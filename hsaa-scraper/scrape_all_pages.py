import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse
import json
import os
import re

HEADERS = {"User-Agent": "Mozilla/5.0"}
ALLOWED_TAGS = ["h1", "h2", "h3", "p"]

INPUT_URLS_FILE = "urls.txt"
OUTPUT_DIR = "output"

CONTENT_SELECTORS = [
    "main",
    "article",
    "#content",
    "#main",
    ".site-content",
    ".content-area",
    ".entry-content",
    ".page-content",
    ".elementor",
    ".wp-site-blocks"
]

def clean_text(text):
    text = text.replace("\u00a0", " ")
    text = re.sub(r"\s+", " ", text).strip()
    return text if len(text) > 1 else ""

def detect_category(path):
    if path.startswith("/sign-types"):
        return "sign-types"
    if path.startswith("/industries"):
        return "industries"
    if path.startswith("/locations"):
        return "locations"
    return "pages"

def get_content_root(soup):
    for sel in CONTENT_SELECTORS:
        el = soup.select_one(sel)
        if el:
            return el
    return soup.body

def scrape_page(url):
    r = requests.get(url, headers=HEADERS, timeout=20)
    r.raise_for_status()

    soup = BeautifulSoup(r.text, "lxml")

    for bad in soup(["script", "style", "noscript"]):
        bad.decompose()

    root = get_content_root(soup)
    content = []
    seen = set()

    for tag in root.find_all(ALLOWED_TAGS):
        text = clean_text(tag.get_text(" ", strip=True))
        if not text:
            continue

        key = (tag.name, text)
        if key in seen:
            continue
        seen.add(key)

        content.append({
            "tag": tag.name.upper(),
            "text": text
        })

    parsed = urlparse(url)

    return {
        "url": url,
        "path": parsed.path or "/",
        "category": detect_category(parsed.path or "/"),
        "content": content
    }

def safe_filename(path):
    name = path.strip("/").replace("/", "-")
    return name if name else "home"

if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    with open(INPUT_URLS_FILE) as f:
        urls = [line.strip() for line in f if line.strip()]

    for url in urls:
        try:
            data = scrape_page(url)

            category_dir = os.path.join(OUTPUT_DIR, data["category"])
            os.makedirs(category_dir, exist_ok=True)

            filename = safe_filename(data["path"]) + ".json"
            filepath = os.path.join(category_dir, filename)

            with open(filepath, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)

            print(f"✔ Scraped: {data['path']}")

        except Exception as e:
            print(f"✖ Failed: {url} → {e}")
