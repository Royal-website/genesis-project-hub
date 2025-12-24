import json, os, requests, re
from urllib.parse import urlparse

# ================= SETTINGS =================
INPUT_FILE = "organized-images.json"

# You ALREADY have this path (confirmed)
OUTPUT_BASE = "./public/images"

# Download ONLY missing categories
CATEGORIES = {
    "industries": ["industry", "hospital", "hotel", "restaurant", "church", "school", "bank"],
    "locations": ["tx", "houston", "alief", "sugar-land", "richmond", "rosenberg", "missouri-city"],
    "main-menu": ["contact", "about", "review", "company"]
}

MAX_IMAGES_PER_PAGE = 8   # protects disk space
TIMEOUT = 25

HEADERS = {"User-Agent": "Mozilla/5.0 (RoyalSigns Image Sync)"}

# ================= HELPERS =================
def slugify(s: str) -> str:
    s = s.strip().lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-") or "page"

def is_downloadable_image(url: str) -> bool:
    if url.startswith("data:"):
        return False
    path = urlparse(url).path.lower()
    return path.endswith((".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"))

def safe_filename(url: str) -> str:
    name = os.path.basename(urlparse(url).path)
    return name.split("?")[0] or "image.jpg"

def download(url: str, dest_path: str) -> bool:
    try:
        r = requests.get(url, headers=HEADERS, timeout=TIMEOUT, stream=True)
        if r.status_code != 200:
            return False
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        with open(dest_path, "wb") as f:
            for chunk in r.iter_content(1024 * 64):
                if chunk:
                    f.write(chunk)
        return True
    except Exception:
        return False

# ================= MAIN =================
def main():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    downloaded = 0
    skipped = 0

    for page_url, payload in data.items():
        url_l = page_url.lower()

        for category, keywords in CATEGORIES.items():
            if not any(k in url_l for k in keywords):
                continue

            images = payload.get("images", [])
            images = [u for u in images if is_downloadable_image(u)]
            images = images[:MAX_IMAGES_PER_PAGE]

            page_slug = slugify(page_url.rstrip("/").split("/")[-1])
            folder = os.path.join(OUTPUT_BASE, category, page_slug)

            for i, img_url in enumerate(images, start=1):
                fname = safe_filename(img_url)
                dest = os.path.join(folder, f"{i:02d}-{fname}")

                if os.path.exists(dest):
                    skipped += 1
                    continue

                if download(img_url, dest):
                    downloaded += 1
                    print(f"✅ {dest}")
                else:
                    print(f"❌ Failed: {img_url}")

    print("\n================ DONE ================")
    print(f"Downloaded: {downloaded}")
    print(f"Skipped (existing): {skipped}")
    print(f"Saved under: {os.path.abspath(OUTPUT_BASE)}")

if __name__ == "__main__":
    main()
