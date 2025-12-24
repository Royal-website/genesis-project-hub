import json

with open("site-structure.json", "r", encoding="utf-8") as f:
    data = json.load(f)

def unique_by_url(items):
    seen = {}
    for i in items:
        seen[i["url"]] = i["label"]
    return [{"label": v, "url": k} for k, v in seen.items()]

normalized = {
    "main_menu": unique_by_url(data.get("main_menu", [])),
    "sign_types": unique_by_url(data.get("sign_types", [])),
    "industries": unique_by_url(data.get("industries", [])),
    "footer_links": unique_by_url(data.get("footer_links", []))
}

with open("site-structure.normalized.json", "w", encoding="utf-8") as f:
    json.dump(normalized, f, indent=2)

print("✅ site-structure.normalized.json created")
