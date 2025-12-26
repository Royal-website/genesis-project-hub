import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

START_URL = "https://www.houstonsignsandawnings.com/"
HEADERS = {"User-Agent": "Mozilla/5.0"}

def is_internal(url):
    return urlparse(url).netloc == urlparse(START_URL).netloc

def normalize(url):
    return url.split("#")[0].rstrip("/")

def crawl(start_url):
    visited = set()
    queue = [start_url]

    while queue:
        current = queue.pop(0)
        if current in visited:
            continue

        visited.add(current)

        try:
            r = requests.get(current, headers=HEADERS, timeout=15)
            r.raise_for_status()
        except Exception:
            continue

        soup = BeautifulSoup(r.text, "lxml")

        for a in soup.find_all("a", href=True):
            href = a["href"]
            full = urljoin(current, href)

            if not is_internal(full):
                continue

            clean = normalize(full)

            if clean not in visited:
                queue.append(clean)

    return sorted(visited)

if __name__ == "__main__":
    urls = crawl(START_URL)

    with open("urls.txt", "w") as f:
        for u in urls:
            f.write(u + "\n")

    print(f"✔ URLs saved: {len(urls)}")
