import { useState, useEffect } from "react";

interface ContentItem {
  tag: string;
  text: string;
}

interface Section {
  title: string;
  paragraphs: string[];
  signTypes?: string[];
}

interface LocationContent {
  heroTitle: string;
  heroImage: string;
  sections: Section[];
  loading: boolean;
  error: string | null;
}

// Sidebar items to filter out
const SIDEBAR_ITEMS = [
  "Sign Types", "Industries", "We Accept:", "Client Review",
  "Royal Signs & Awnings reigns supreme!", "The sign looks amazing at night!"
];

// Sign type names that appear as H3 under sections (not separate sections)
const SIGN_TYPE_H3S = [
  "Awning Signs", "Blade Signs", "Cabinet Signs", "Channel Letters",
  "Dimensional Letters", "Hanging Signs", "Lighted Signs", "Monument Signs",
  "Pole Signs", "Post & Panel Signs", "Pylon Signs", "Storefront Signs",
  "Sign Repairs", "High Rise Signs", "Channel Letters Signs", "Floor Signs",
  "Lobby Signs", "Office Signs", "POP Signs", "Room ID Signs", "Wall Signs",
  "Wayfinding Signs"
];

// Service types that have dedicated image folders
const SERVICE_TYPES = [
  "sign-company", "indoor-signs", "outdoor-signs", "awning-signs",
  "custom-signs", "business-signs", "metal-signs", "pole-signs",
  "canopy-tents", "monument-signs", "sign-repairs"
];

// Extract service type from slug (e.g., "indoor-signs-sugar-land-tx" -> "indoor-signs")
function getServiceType(slug: string): string {
  for (const service of SERVICE_TYPES) {
    if (slug.startsWith(service)) {
      return service;
    }
  }
  return "sign-company"; // Default for general location pages
}

// Extract location from slug (e.g., "indoor-signs-sugar-land-tx" -> "sugar-land-tx")
function getLocationFromSlug(slug: string): string {
  for (const service of SERVICE_TYPES) {
    if (slug.startsWith(`${service}-`)) {
      return slug.replace(`${service}-`, "");
    }
  }
  return slug;
}

// Location fallback mapping for missing JSON files
const LOCATION_FALLBACKS: Record<string, string> = {
  "houston-tx": "alief-tx",
  "katy-tx": "alief-tx",
  "spring-tx": "alief-tx",
  "baytown-tx": "alief-tx",
  "cy-fair-tx": "alief-tx"
};

// Location display names for title replacement
const LOCATION_NAMES: Record<string, string> = {
  "alief-tx": "Alief",
  "houston-tx": "Houston",
  "katy-tx": "Katy",
  "spring-tx": "Spring",
  "baytown-tx": "Baytown",
  "cy-fair-tx": "Cy-Fair",
  "missouri-city-tx": "Missouri City",
  "richmond-tx": "Richmond",
  "rosenberg-tx": "Rosenberg",
  "sugar-land-tx": "Sugar Land",
  "thompsons-tx": "Thompsons"
};

// Map slug to correct JSON file name with fallback logic
function mapSlugToJsonFile(slug: string): { primary: string; fallback?: string } {
  // "sign-company-{location}" routes use the general location JSON file
  if (slug.startsWith("sign-company-")) {
    const location = slug.replace("sign-company-", "");
    const fallbackLocation = LOCATION_FALLBACKS[location];
    return {
      primary: location,
      fallback: fallbackLocation
    };
  }
  
  // For service-location pages, try original first, then fallback to alief version
  for (const service of SERVICE_TYPES) {
    if (slug.startsWith(`${service}-`)) {
      const location = slug.replace(`${service}-`, "");
      const fallbackLocation = LOCATION_FALLBACKS[location];
      if (fallbackLocation) {
        return {
          primary: slug,
          fallback: `${service}-${fallbackLocation}`
        };
      }
    }
  }
  
  return { primary: slug };
}

export function useLocationContent(slug: string): LocationContent {
  const [content, setContent] = useState<LocationContent>({
    heroTitle: "",
    heroImage: "",
    sections: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    async function fetchContent() {
      try {
        const { primary, fallback } = mapSlugToJsonFile(slug);
        
        // Try primary JSON first, then fallback
        let response = await fetch(`/content/locations/${primary}.json`);
        let usedFallback = false;
        let fallbackSource = fallback;
        
        if (!response.ok && fallback) {
          response = await fetch(`/content/locations/${fallback}.json`);
          usedFallback = true;
        }
        
        if (!response.ok) throw new Error("Content not found");
        
        const data = await response.json();
        const items: ContentItem[] = data.content || [];
        
        // Parse content
        let heroTitle = items.find(i => i.tag === "H1")?.text || "";
        
        // Replace location name in title if using fallback content
        if (usedFallback && fallbackSource) {
          const targetLocation = getLocationFromSlug(slug);
          const sourceLocation = getLocationFromSlug(fallbackSource);
          const targetName = LOCATION_NAMES[targetLocation] || targetLocation;
          const sourceName = LOCATION_NAMES[sourceLocation] || sourceLocation;
          heroTitle = heroTitle.replace(new RegExp(sourceName, "gi"), targetName);
        }
        const sections: Section[] = [];
        let currentSection: Section | null = null;
        let currentSignTypes: string[] = [];
        
        for (const item of items) {
          // Skip sidebar content
          if (SIDEBAR_ITEMS.includes(item.text)) {
            currentSection = null;
            continue;
          }
          
          if (item.tag === "H2") {
            // Save previous section with its sign types
            if (currentSection) {
              if (currentSignTypes.length > 0) {
                currentSection.signTypes = [...currentSignTypes];
              }
              sections.push(currentSection);
            }
            currentSection = { title: item.text, paragraphs: [] };
            currentSignTypes = [];
          } else if (item.tag === "H3" && currentSection) {
            // H3s under H2 are sign types
            if (SIGN_TYPE_H3S.includes(item.text)) {
              currentSignTypes.push(item.text);
            }
          } else if (item.tag === "P" && currentSection) {
            // Skip single-word sidebar items
            if (item.text.split(" ").length > 3) {
              currentSection.paragraphs.push(item.text);
            }
          }
        }
        
        // Save last section
        if (currentSection && currentSection.paragraphs.length > 0) {
          if (currentSignTypes.length > 0) {
            currentSection.signTypes = [...currentSignTypes];
          }
          sections.push(currentSection);
        }
        
        // Resolve hero image with fallback
        const heroImage = await resolveImage(slug);
        
        setContent({
          heroTitle,
          heroImage,
          sections: sections.filter(s => s.paragraphs.length > 0),
          loading: false,
          error: null
        });
      } catch (err) {
        setContent(prev => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : "Failed to load content"
        }));
      }
    }
    
    fetchContent();
  }, [slug]);

  return content;
}

async function resolveImage(slug: string): Promise<string> {
  const serviceType = getServiceType(slug);
  
  // Use service-based hero images (reusable across all locations)
  const paths = [
    `/images/services/${serviceType}/hero.jpg`,
    `/images/_defaults/hero.jpg`
  ];
  
  for (const path of paths) {
    try {
      const response = await fetch(path, { method: "HEAD" });
      if (response.ok) return path;
    } catch {}
  }
  
  return paths[paths.length - 1];
}

export function getSectionImage(slug: string, index: number): string {
  const serviceType = getServiceType(slug);
  // Use service-based section images (reusable across all locations)
  return `/images/services/${serviceType}/section-${String(index + 1).padStart(2, "0")}.jpg`;
}

export function getDefaultImage(): string {
  return `/images/services/sign-company/section-01.jpg`;
}
