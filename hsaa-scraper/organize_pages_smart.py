import json
import os
import shutil

SOURCE_DIR = "pages/main-menu"
TARGET_ROOT = "pages"

SIGN_TYPE_KEYWORDS = [
    "signs", "wraps", "letters", "banners", "awning", "monument",
    "pole", "vinyl", "blade", "cabinet", "channel", "digital",
    "lighted", "wall", "window", "floor", "menu", "ada"
]

INDUSTRY_KEYWORDS = [
    "restaurant", "bank", "hospital", "retail", "school", "church",
    "hotel", "mall", "doctor", "dentist", "lawyer", "salon",
    "automotive", "manufacturing", "warehouse", "laundromat",
    "gas-station", "dealership", "real-estate", "property"
]

def detect_folder(slug):
    if slug.endswith("-tx"):
        return "locations"

    for kw in INDUSTRY_KEYWORDS:
        if kw in slug:
            return "industries"

    for kw in SIGN_TYPE_KEYWORDS:
        if kw in slug:
            return "signtypes"

    return "main-menu"

for filename in os.listdir(SOURCE_DIR):
    if not filename.endswith(".json"):
        continue

    src_path = os.path.join(SOURCE_DIR, filename)
    slug = filename.replace(".json", "")

    folder = detect_folder(slug)
    dest_dir = os.path.join(TARGET_ROOT, folder)
    os.makedirs(dest_dir, exist_ok=True)

    dest_path = os.path.join(dest_dir, filename)
    shutil.move(src_path, dest_path)

    print(f"Moved {filename} → pages/{folder}/")

print("✔ Smart organization complete")
