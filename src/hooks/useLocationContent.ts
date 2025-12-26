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
        const response = await fetch(`/content/locations/${slug}.json`);
        if (!response.ok) throw new Error("Content not found");
        
        const data = await response.json();
        const items: ContentItem[] = data.content || [];
        
        // Parse content
        const heroTitle = items.find(i => i.tag === "H1")?.text || "";
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
  // Try hero.jpg first, then 04-channel-letters.jpg (common in location folders), then default
  const paths = [
    `/images/locations/${slug}/hero.jpg`,
    `/images/locations/${slug}/04-channel-letters.jpg`,
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
  return `/images/locations/${slug}/gallery-${String(index + 1).padStart(2, "0")}.jpg`;
}

export function getDefaultImage(): string {
  return `/images/_defaults/gallery-01.jpg`;
}
