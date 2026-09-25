import os
import qrcode
import qrcode.image.svg

target_dir = r"C:\Users\devrim6\Documents\NextCloud\Formula Student\General Docs\Recruitments 2026"

qrs = [
    {
        "name": "qr_presentation",
        "label": "Course Presentation",
        "url": "https://arttu-formulastudent.ro/?utm_source=qr&utm_medium=presentation&utm_campaign=recruitment_2026",
    },
    {
        "name": "qr_rollup",
        "label": "Rollups",
        "url": "https://arttu-formulastudent.ro/?utm_source=qr&utm_medium=rollup&utm_campaign=recruitment_2026",
    },
    {
        "name": "qr_flyer",
        "label": "Flyers",
        "url": "https://arttu-formulastudent.ro/?utm_source=qr&utm_medium=flyer&utm_campaign=recruitment_2026",
    },
    {
        "name": "qr_poster",
        "label": "Posters",
        "url": "https://arttu-formulastudent.ro/?utm_source=qr&utm_medium=poster&utm_campaign=recruitment_2026",
    },
]

for item in qrs:
    print(f"Generating for: {item['label']}...")
    
    # 1. Ultra High-Res PNG (box_size=40, border=3 -> approx 2000x2000 px, 300+ DPI print ready)
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=40,
        border=3,
    )
    qr.add_data(item["url"])
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    
    # Ensure resize to exact 2048x2048 for crisp standard 2K resolution
    from PIL import Image
    img_resized = img.resize((2048, 2048), Image.Resampling.NEAREST)
    png_path = os.path.join(target_dir, f"{item['name']}.png")
    img_resized.save(png_path, "PNG", dpi=(300, 300))
    print(f"  -> Saved PNG: {png_path} ({img_resized.size[0]}x{img_resized.size[1]} px, {os.path.getsize(png_path) / 1024:.1f} KB)")
    
    # 2. Scalable Vector Graphics (SVG, vector for Illustrator / PPT / CAD)
    qr_svg = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=3,
        image_factory=qrcode.image.svg.SvgPathImage,
    )
    qr_svg.add_data(item["url"])
    qr_svg.make(fit=True)
    svg_img = qr_svg.make_image()
    svg_path = os.path.join(target_dir, f"{item['name']}.svg")
    svg_img.save(svg_path)
    print(f"  -> Saved SVG: {svg_path} ({os.path.getsize(svg_path) / 1024:.1f} KB)")

print("\nAll QR codes successfully generated in ultra-high resolution!")
