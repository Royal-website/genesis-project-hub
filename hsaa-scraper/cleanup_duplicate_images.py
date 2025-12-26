import os
import json

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PAGES_DIR = os.path.join(PROJECT_ROOT, "pages")

def clean_file(path):
    with open(path, "r", encoding="utf-8") as f:
        raw = f.read()

    # Load JSON (Python keeps the last duplicate key automatically)
    data = json.loads(raw)

    # Re-write clean JSON with a single images block
    if "images" in data:
        images = data["images"]
        del data["images"]
        data["images"] = images

    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def walk_pages():
    for root, _, files in os.walk(PAGES_DIR):
        for file in files:
            if file.endswith(".json"):
                clean_file(os.path.join(root, file))

walk_pages()
print("✅ Cleaned duplicate images blocks in all JSON files")
