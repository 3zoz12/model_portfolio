import portfolioImage03 from "../pro_images/40.jpeg";
import portfolioImage04 from "../pro_images/70.jpeg";
import portfolioImage05 from "../pro_images/WhatsApp Image 2026-03-24 at 3.05.17 PM.jpeg";
import portfolioImage06 from "../pro_images/WhatsApp Image 2026-03-24 at 3.05.17 PM (1).jpeg";
import portfolioImage07 from "../pro_images/30.jpeg";
import portfolioImage08 from "../pro_images/WhatsApp Image 2026-03-24 at 3.05.18 PM.jpeg";
import portfolioImage09 from "../pro_images/WhatsApp Image 2026-03-24 at 3.05.18 PM (1).jpeg";
import portfolioImage10 from "../pro_images/WhatsApp Image 2026-03-24 at 3.05.18 PM (2).jpeg";
import portfolioImage11 from "../pro_images/20.jpeg";
import portfolioImage12 from "../pro_images/WhatsApp Image 2026-03-24 at 3.05.19 PM.jpeg";

export interface PixpaPortfolioImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
}

export const pixpaPortfolioImages: PixpaPortfolioImage[] = [
  {
    id: "pixpa-2",
    src: portfolioImage03,
    alt: "Azeez portfolio image 1",
    width: 960,
    height: 1280,
    description: "black and white",
  },
  {
    id: "pixpa-3",
    src: portfolioImage04,
    alt: "Azeez portfolio image 2",
    width: 1024,
    height: 1280,
    description: "Crimson Studio Edition — Fall Ready-to-Wear",
  },
  {
    id: "pixpa-4",
    src: portfolioImage05,
    alt: "Azeez portfolio image 3",
    width: 854,
    height: 1280,
    description: "Confidence, framed in red.",
  },
  {
    id: "pixpa-5",
    src: portfolioImage06,
    alt: "Azeez portfolio image 4",
    width: 854,
    height: 1280,
    description: "Cinema Radio Archives — Downtown Urban Edge",
  },
  {
    id: "pixpa-6",
    src: portfolioImage07,
    alt: "Azeez portfolio image 5",
    width: 960,
    height: 1280,
    description: "Nostalgic 249 — Sudanese Cultural Heritage",
  },
  {
    id: "pixpa-7",
    src: portfolioImage08,
    alt: "Azeez portfolio image 6",
    width: 960,
    height: 1280,
    description: "Golden Hour Textures — Casual Street Style",
  },
  {
    id: "pixpa-8",
    src: portfolioImage09,
    alt: "Azeez portfolio image 7",
    width: 854,
    height: 1280,
    description: "Not just a look — a mood, a frequency, a whole atmosphere.",
  },
  {
    id: "pixpa-9",
    src: portfolioImage10,
    alt: "Azeez portfolio image 8",
    width: 854,
    height: 1280,
    description: "Not every sound is heard — some are worn, lived, and carried.",
  },
  {
    id: "pixpa-10",
    src: portfolioImage11,
    alt: "Azeez portfolio image 9",
    width: 1066,
    height: 1600,
    description: "Golden Hour Textures — Casual Street Style",
  },
  {
    id: "pixpa-11",
    src: portfolioImage12,
    alt: "Azeez portfolio image 10",
    width: 960,
    height: 1280,
    description: "Architectural Contrast — High Fashion Concrete",
  },
];
