import json, os, requests, re
from urllib.parse import urlparse

# ================= SETTINGS =================
STRUCTURE_FILE = "site-structure.normalized.json"
IMAGES_FILE = "organized-images.json"

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, ".."))
OUTPUT_BASE = os.path.join(PROJECT_ROOT, "public", "images")

MAX_IMAGES_PER_PAGE = 8
TIMEOUT = 25
HEADERS = {"User-Agent": "Mozilla/5.0 (RoyalSigns Image Sync)"}

# ================= HELPERS =================
def slugify(text):
    text = text.lower().strip()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-") or "page"

def slug_from_url(url):
    path = urlparse(url).path.rstrip("/")
    return slugify(path.split("/")[-1])

def is_image(url):
    if not url or url.startswith("data:"):
        return False
    return urlparse(url).path.lower().endswith(
        (".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg")
    )

def safe_name(url):
    return os.path.basename(urlparse(url).path).split("?")[0] or "image.jpg"

def download(url, dest):
    try:
        r = requests.get(url, headers=HEADERS, timeout=TIMEOUT, stream=True)
        if r.status_code != 200:
            return False
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        with open(dest, "wb") as f:
            for chunk in r.iter_content(65536):
                if chunk:
                    f.write(chunk)
        return True
    except Exception:
        return False

# ================= MAIN =================
def main():
    with open(STRUCTURE_FILE, "r", encoding="utf-8") as f:
        structure = json.load(f)

    with open(IMAGES_FILE, "r", encoding="utf-8") as f:
        images_map = json.load(f)

    downloaded = skipped = 0

    for category, pages in structure.items():
        for page in pages:
            page_url = page.get("url")
            if not page_url:
                continue

            page_slug = slug_from_url(page_url)

            images = images_map.get(page_url, {}).get("images", [])
            images = [u for u in images if is_image(u)][:MAX_IMAGES_PER_PAGE]

            if not images:
                continue

            folder = os.path.join(OUTPUT_BASE, category, page_slug)

            for i, img in enumerate(images, 1):
                dest = os.path.join(folder, f"{i:02d}-{safe_name(img)}")

                if os.path.exists(dest):
                    skipped += 1
                    continue

                if download(img, dest):
                    downloaded += 1
                    print(f"✅ {dest}")

    print("\n=========== DONE ===========")
    print(f"Downloaded: {downloaded}")
    print(f"Skipped: {skipped}")
    print(f"Saved under: {OUTPUT_BASE}")

if __name__ == "__main__":
    main()
