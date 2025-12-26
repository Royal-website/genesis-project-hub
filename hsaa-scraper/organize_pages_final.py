import os
import shutil

SOURCE_DIR = "pages/main-menu"
ROOT = "pages"

NAVBAR_PAGES = [
    "indoor-signs",
    "outdoor-signs",
    "awning-signs",
    "vehicle-wraps",
    "custom-signs",
    "business-signs",
    "reviews",
    "contact-us"
]

INDUSTRIES = [
    "automotive","bank","bar","barber","church","city","college","construction",
    "convenience","corporate","dealership","dentist","doctor","gas-station",
    "hospital","hospitality","hotel","laundromat","lawyer","mall","manufacturing",
    "new-business","nursery","political","property-management","real-estate",
    "restaurant","retail","salon","school","small-business","warehouse"
]

SIGNTYPES = [
    "ada","acrylic","blade","building","cabinet","canopy","car-wrap",
    "channel","corrugated","tablecovers","dibond","digital","dimensional",
    "door","electronic","fleet","floor","foamcore","hanging",
    "high-rise","informational","led","banners","lighted","lobby","menu",
    "metal","monument","office","pop","pole","portable","post-panel",
    "printed","promotional","pylon","room-id","safety","sandblasted",
    "storefront","table-top","temporary","tenant",
    "trade-show","tradeshow","truck","van","wall","wayfinding","window"
]

def classify(slug):
    if slug in NAVBAR_PAGES:
        return "main-menu"

    if slug.endswith("-tx"):
        return "locations"

    for k in INDUSTRIES:
        if k in slug:
            return "industries"

    for k in SIGNTYPES:
        if k in slug:
            return "signtypes"

    return "main-menu"

for file in os.listdir(SOURCE_DIR):
    if not file.endswith(".json"):
        continue

    slug = file.replace(".json", "")
    folder = classify(slug)

    dest_dir = os.path.join(ROOT, folder)
    os.makedirs(dest_dir, exist_ok=True)

    shutil.move(
        os.path.join(SOURCE_DIR, file),
        os.path.join(dest_dir, file)
    )

    print(f"{file} → pages/{folder}/")

print("✔ FINAL organization complete")
