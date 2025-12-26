import json
import os
import shutil

SOURCE_DIR = "output/pages"
TARGET_ROOT = "pages"

def detect_folder(path):
    if path.startswith("/sign-types"):
        return "signtypes"
    if path.startswith("/industries"):
        return "industries"
    if path.startswith("/locations"):
        return "locations"
    return "main-menu"

os.makedirs(TARGET_ROOT, exist_ok=True)

for filename in os.listdir(SOURCE_DIR):
    if not filename.endswith(".json"):
        continue

    src_path = os.path.join(SOURCE_DIR, filename)

    with open(src_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    path = data.get("path", "/")
    folder = detect_folder(path)

    dest_dir = os.path.join(TARGET_ROOT, folder)
    os.makedirs(dest_dir, exist_ok=True)

    dest_path = os.path.join(dest_dir, filename)

    shutil.move(src_path, dest_path)
    print(f"Moved {filename} → pages/{folder}/")

print("✔ Pages organized to match GitHub structure")
