import os
import json

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))

PAGES_DIR = os.path.join(PROJECT_ROOT, "pages")
IMAGES_DIR = os.path.join(PROJECT_ROOT, "public", "images")


VALID_EXTS = (".jpg", ".jpeg", ".png", ".webp")

def list_images(folder):
    if not os.path.isdir(folder):
        return []
    return sorted([
        f for f in os.listdir(folder)
        if f.lower().endswith(VALID_EXTS)
    ])

def choose_hero(images):
    priority = ["hero", "indoor", "outdoor", "motivational", "banner"]
    for p in priority:
        for img in images:
            if p in img.lower():
                return img
    return images[0] if images else None

def strip_location(slug):
    if slug.endswith("-tx"):
        parts = slug.split("-")
        return "-".join(parts[:-3])  # remove city (2 words) + tx
    return slug


def resolve_images(category, slug):
    candidates = []

    # 0️⃣ Skip invalid wordpress image slugs completely
    if slug.startswith("wp-content-uploads"):
        return None, None, []

    # 1️⃣ Exact match
    candidates.append((category, slug))

    # 2️⃣ Location fallback → base sign/industry
    base_slug = strip_location(slug)
    if base_slug != slug:
        candidates.append((category, base_slug))
        candidates.append(("signtypes", base_slug))
        candidates.append(("industries", base_slug))

    # 3️⃣ Category default
    candidates.append((category, "_default"))

    for cat, s in candidates:
        folder = os.path.join(IMAGES_DIR, cat, s)
        images = list_images(folder)
        if images:
            return cat, s, images

    # 4️⃣ GLOBAL HARD FALLBACK (never fails)
    return "_defaults", "", ["hero.jpg", "gallery-01.jpg"]


def process_category(category):
    pages_path = os.path.join(PAGES_DIR, category)
    if not os.path.isdir(pages_path):
        return

    for file in os.listdir(pages_path):
        if not file.endswith(".json"):
            continue

        slug = file.replace(".json", "")

        # 🚫 SKIP junk pages created from image URLs
        if slug.startswith("wp-content-uploads"):
            continue

        page_file = os.path.join(pages_path, file)

        with open(page_file, "r", encoding="utf-8") as f:
            data = json.load(f)
        # 🔁 Remove old images block if it exists
        if "images" in data:
            del data["images"]

        img_cat, img_slug, images = resolve_images(category, slug)

        if not images:
            print(f"⚠️  No images resolved for {category}/{slug}")
            continue

        hero = choose_hero(images)
        gallery = [img for img in images if img != hero]

        data["images"] = {
            "basePath": f"/images/{img_cat}/{img_slug}/",
            "hero": hero,
            "gallery": gallery
        }

        with open(page_file, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

        print(f"✔ Images resolved → {category}/{slug} (from {img_cat}/{img_slug})")


print("Starting image embedding with fallback logic...\n")

for cat in ["industries", "signtypes", "locations", "main-menu"]:
    process_category(cat)

print("\n✅ Image embedding with fallback complete")
