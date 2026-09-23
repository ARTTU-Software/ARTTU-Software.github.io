import React, { useState, useEffect } from 'react';

interface DepartmentSlideshowProps {
  images: string[];
  alt: string;
  imagePosition?: string;
  className?: string;
}

export const DepartmentSlideshow: React.FC<DepartmentSlideshowProps> = ({
  images,
  alt,
  imagePosition = 'object-center',
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      // Advance to the next image if tab is active
      if (document.visibilityState === 'visible') {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {images.map((imgSrc, idx) => {
        const isActive = idx === currentIndex;
        // Use custom imagePosition on primary image (idx 0), object-center on other photos
        const posClass = idx === 0 && imagePosition ? imagePosition : 'object-center';

        return (
          <div
            key={imgSrc}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            aria-hidden={!isActive}
          >
            <img
              src={imgSrc}
              alt={`${alt} showcase ${idx + 1}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 ${posClass}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DepartmentSlideshow;
