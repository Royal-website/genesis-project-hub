import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
from tqdm import tqdm

INPUT_FILE = "site-structure.normalized.json"
OUTPUT_FILE = "organized-images.json"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; ImageCrawler/1.0)"
}

def load_all_urls(data):
    urls = set()

    for section in data.values():
        if isinstance(section, list):
            for item in section:
                url = item.get("url")
                if url and url.startswith("http"):
                    urls.add(url)

    return sorted(urls)

def extract_images(page_url):
    images = set()

    try:
        response = requests.get(page_url, headers=HEADERS, timeout=20)
        if response.status_code != 200:
            return []

        soup = BeautifulSoup(response.text, "lxml")

        # <img src="">
        for img in soup.find_all("img"):
            src = img.get("src")
            if src:
                images.add(urljoin(page_url, src))

            # srcset support
            srcset = img.get("srcset")
            if srcset:
                for part in srcset.split(","):
                    img_url = part.strip().split(" ")[0]
                    images.add(urljoin(page_url, img_url))

        # background-image in inline styles
        for tag in soup.find_all(style=True):
            style = tag["style"]
            if "background-image" in style:
                start = style.find("url(")
                end = style.find(")", start)
                if start != -1 and end != -1:
                    bg_url = style[start + 4:end].strip("\"'")
                    images.add(urljoin(page_url, bg_url))

    except Exception as e:
        print(f"Error crawling {page_url}: {e}")

    return sorted(images)

def main():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    urls = load_all_urls(data)
    print(f"Found {len(urls)} unique pages")

    output = {}

    for url in tqdm(urls, desc="Crawling pages"):
        images = extract_images(url)
        output[url] = {
            "image_count": len(images),
            "images": images
        }

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2)

    print(f"\n✅ Done. Saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
