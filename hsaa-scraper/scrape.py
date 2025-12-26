import requests
from bs4 import BeautifulSoup
import json
import re
from urllib.parse import urlparse

URL = "https://www.houstonsignsandawnings.com/"
HEADERS = {"User-Agent": "Mozilla/5.0"}
ALLOWED_TAGS = ["h1", "h2", "h3", "p"]

# Common “content wrappers” used by WordPress themes/builders.
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
    ".elementor-location-single",
    ".wp-site-blocks",
]

# Text we generally do NOT want in Loveable content payload
DROP_IF_CONTAINS = [
    "Regulated by The Texas Department of Licensing and Regulation",
    "Example images used for illustrative purposes only",
]

def clean_text(s: str) -> str:
    s = s.replace("\u00a0", " ")
    s = re.sub(r"\s+", " ", s).strip()
    # remove junk single characters like "Δ"
    if len(s) <= 1:
        return ""
    return s

def pick_content_root(soup: BeautifulSoup):
    # Try common wrappers first (keeps nav/footer out)
    for sel in CONTENT_SELECTORS:
        el = soup.select_one(sel)
        if el:
            return el
    # fallback
    return soup.body or soup

def scrape_page(url: str):
    r = requests.get(url, headers=HEADERS, timeout=20)
    r.raise_for_status()

    soup = BeautifulSoup(r.text, "lxml")

    # remove obvious non-content
    for bad in soup(["script", "style", "noscript"]):
        bad.decompose()

    root = pick_content_root(soup)

    content = []
    seen = set()

    for tag in root.find_all(ALLOWED_TAGS):
        text = clean_text(tag.get_text(" ", strip=True))
        if not text:
            continue

        # Drop known footer/legal lines
        if any(bad in text for bad in DROP_IF_CONTAINS):
            continue

        # de-duplicate exact repeats
        key = (tag.name, text)
        if key in seen:
            continue
        seen.add(key)

        content.append({"tag": tag.name.upper(), "text": text})

    return {
        "url": url,
        "path": urlparse(url).path or "/",
        "content": content
    }

if __name__ == "__main__":
    data = scrape_page(URL)
    with open("output.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"Scrape complete → output.json ({len(data['content'])} blocks)")
