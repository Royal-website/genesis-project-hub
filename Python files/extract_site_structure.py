import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import json

BASE_URL = "https://www.houstonsignsandawnings.com"

html = requests.get(BASE_URL).text
soup = BeautifulSoup(html, "lxml")

structure = {
    "main_menu": [],
    "sign_types": [],
    "industries": [],
    "footer_links": []
}

# ---------- MAIN MENU ----------
for nav in soup.select("nav a"):
    text = nav.get_text(strip=True)
    href = nav.get("href")
    if text and href:
        structure["main_menu"].append({
            "label": text,
            "url": urljoin(BASE_URL, href)
        })

# ---------- SIGN TYPES ----------
for a in soup.find_all("a", href=True):
    if "signs" in a.get_text(strip=True).lower():
        structure["sign_types"].append({
            "label": a.get_text(strip=True),
            "url": urljoin(BASE_URL, a["href"])
        })

# ---------- INDUSTRIES ----------
for a in soup.find_all("a", href=True):
    if "industry" in a["href"] or "signs" in a["href"]:
        text = a.get_text(strip=True)
        if "Signs" in text:
            structure["industries"].append({
                "label": text,
                "url": urljoin(BASE_URL, a["href"])
            })

# ---------- FOOTER ----------
footer = soup.find("footer")
if footer:
    for a in footer.find_all("a", href=True):
        structure["footer_links"].append({
            "label": a.get_text(strip=True),
            "url": urljoin(BASE_URL, a["href"])
        })

# ---------- SAVE ----------
with open("site-structure.json", "w", encoding="utf-8") as f:
    json.dump(structure, f, indent=2)

print("✅ site-structure.json created")
