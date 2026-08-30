import React, { useState, useMemo } from 'react';
import { CompetitionResultItem, CompetitionCategory } from '../../data/competitions';
import { CompetitionResultCard } from './CompetitionResultCard';

interface CompetitionResultsGridProps {
  results: CompetitionResultItem[];
  showCategoryFilter?: boolean;
  className?: string;
}

export const CompetitionResultsGrid: React.FC<CompetitionResultsGridProps> = ({
  results,
  showCategoryFilter = false,
  className = '',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    results.forEach((r) => {
      if (r.category) cats.add(r.category);
    });
    return Array.from(cats);
  }, [results]);

  const filteredResults = useMemo(() => {
    if (selectedCategory === 'all') return results;
    return results.filter((r) => r.category === selectedCategory);
  }, [results, selectedCategory]);

  return (
    <div className={`space-y-4 ${className}`}>
      {showCategoryFilter && categories.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 pb-2">
          <button
            onClick={() => setSelectedCategory('all')}
            type="button"
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition ${
              selectedCategory === 'all'
                ? 'bg-warm-900 text-white'
                : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
            }`}
          >
            All Events ({results.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition ${
                selectedCategory === cat
                  ? 'bg-brand-red text-white'
                  : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredResults.map((res, idx) => (
          <CompetitionResultCard key={`${res.name}-${idx}`} result={res} />
        ))}
      </div>
    </div>
  );
};
