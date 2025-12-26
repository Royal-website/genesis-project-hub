import os
import json

PAGES_DIR = "pages"
IMAGES_DIR = "public/images"

VALID_EXTS = (".jpg", ".jpeg", ".png", ".webp")

def choose_hero(images):
    # Prefer large or descriptive names
    priority = ["hero", "indoor", "outdoor", "motivational", "banner"]
    for p in priority:
        for img in images:
            if p in img.lower():
                return img
    return images[0] if images else None

def process_category(category):
    pages_path = os.path.join(PAGES_DIR, category)
    images_root = os.path.join(IMAGES_DIR, category)

    if not os.path.isdir(pages_path):
        return

    for file in os.listdir(pages_path):
        if not file.endswith(".json"):
            continue

        slug = file.replace(".json", "")
        page_file = os.path.join(pages_path, file)
        image_folder = os.path.join(images_root, slug)

        with open(page_file, "r", encoding="utf-8") as f:
            data = json.load(f)

        images = []
        if os.path.isdir(image_folder):
            images = sorted([
                img for img in os.listdir(image_folder)
                if img.lower().endswith(VALID_EXTS)
            ])

        if not images:
            print(f"⚠️  No images found for {category}/{slug}")
            continue

        hero = choose_hero(images)
        gallery = [img for img in images if img != hero]

        data["images"] = {
            "basePath": f"/images/{category}/{slug}/",
            "hero": hero,
            "gallery": gallery
        }

        with open(page_file, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

        print(f"✔ Embedded images → {category}/{slug}")

print("Starting image embedding...\n")

for cat in ["industries", "signtypes", "locations", "main-menu"]:
    process_category(cat)

print("\n✅ Image embedding complete")
