import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import json
import cssutils
import re
from collections import deque

BASE_URL = "https://www.houstonsignsandawnings.com"
DOMAIN = urlparse(BASE_URL).netloc

visited_pages = set()
queue = deque([BASE_URL])

site_data = {
    "site": BASE_URL,
    "pages": [],
    "external_assets": {
        "videos": [],
        "maps": []
    }
}

def is_internal(url):
    return DOMAIN in urlparse(url).netloc or urlparse(url).netloc == ""

def clean_url(url):
    return url.split("#")[0].rstrip("/")

while queue:
    current_url = clean_url(queue.popleft())

    if current_url in visited_pages:
        continue

    print(f"Crawling: {current_url}")
    visited_pages.add(current_url)

    try:
        response = requests.get(current_url, timeout=10)
        soup = BeautifulSoup(response.text, "lxml")
    except Exception as e:
        print("Failed:", current_url, e)
        continue

    page_entry = {
        "url": current_url,
        "images": [],
        "internal_links": [],
        "external_links": []
    }

    # -------- Extract Images --------
    for img in soup.find_all("img"):
        src = img.get("src")
        if src:
            page_entry["images"].append(urljoin(current_url, src))

    # -------- Extract Background Images (CSS) --------
    for style in soup.find_all(style=True):
        matches = re.findall(r'url\\((.*?)\\)', style["style"])
        for match in matches:
            page_entry["images"].append(urljoin(current_url, match.strip('"').strip("'")))

    # -------- Extract Links --------
    for a in soup.find_all("a", href=True):
        href = urljoin(current_url, a["href"])
        href = clean_url(href)

        if is_internal(href):
            if href not in visited_pages:
                queue.append(href)
            page_entry["internal_links"].append(href)
        else:
            page_entry["external_links"].append(href)

            # Detect YouTube
            if "youtube.com" in href or "youtu.be" in href:
                site_data["external_assets"]["videos"].append(href)

            # Detect Google Maps
            if "google.com/maps" in href:
                site_data["external_assets"]["maps"].append(href)

    # Remove duplicates
    page_entry["images"] = list(set(page_entry["images"]))
    page_entry["internal_links"] = list(set(page_entry["internal_links"]))
    page_entry["external_links"] = list(set(page_entry["external_links"]))

    site_data["pages"].append(page_entry)

# -------- Save JSON --------
with open("output.json", "w", encoding="utf-8") as f:
    json.dump(site_data, f, indent=2)

print("✅ Crawl completed. Output saved to output.json")
