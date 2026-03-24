export interface PortfolioSeries {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  images: { id: string; src: string; alt: string; width: number; height: number }[];
}

export const portfolioSeries: PortfolioSeries[] = [
  {
    id: "editorial",
    title: "Editorial",
    subtitle: "Fashion & Editorial Work",
    coverImage:
      "https://images.unsplash.com/photo-1648046016726-9260b555902b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NzQzNTA5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      {
        id: "e1",
        src: "https://images.unsplash.com/photo-1648046016726-9260b555902b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NzQzNTA5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Fashion editorial model",
        width: 3,
        height: 4,
      },
      {
        id: "e2",
        src: "https://images.unsplash.com/photo-1633614386903-27d7eb3e8b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwb3V0ZG9vciUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NDM1MDk4NXww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Editorial fashion outdoor",
        width: 4,
        height: 3,
      },
      {
        id: "e3",
        src: "https://images.unsplash.com/photo-1676577419904-b1547b728bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBtYWdhemluZSUyMHBvcnRyYWl0JTIwd29tYW4lMjBjb2xvcnxlbnwxfHx8fDE3NzQzNTA5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Editorial magazine portrait",
        width: 3,
        height: 4,
      },
      {
        id: "e4",
        src: "https://images.unsplash.com/photo-1618341003319-80a52375411b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBvcnRyYWl0JTIwY29sb3IlMjBmaWxtJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc0MzUwOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Artistic portrait color film",
        width: 4,
        height: 3,
      },
    ],
  },
  {
    id: "portrait",
    title: "Portrait",
    subtitle: "Fine Art & Portrait Photography",
    coverImage:
      "https://images.unsplash.com/photo-1635345825088-98068082ca5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwYXJ0JTIwcG9ydHJhaXQlMjB3b21hbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzQzNTA5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      {
        id: "p1",
        src: "https://images.unsplash.com/photo-1635345825088-98068082ca5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwYXJ0JTIwcG9ydHJhaXQlMjB3b21hbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzQzNTA5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Fine art portrait woman studio",
        width: 3,
        height: 4,
      },
      {
        id: "p2",
        src: "https://images.unsplash.com/photo-1621012649112-d1724740b0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjbG9zZSUyMHVwJTIwcG9ydHJhaXQlMjBmYWNlfGVufDF8fHx8MTc3NDM1MDk4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Beauty close up portrait",
        width: 4,
        height: 3,
      },
      {
        id: "p3",
        src: "https://images.unsplash.com/photo-1646101641345-a1abad136276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwYXJ0aXN0aWMlMjBibGFjayUyMHdoaXRlfGVufDF8fHx8MTc3NDM1MDk3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Portrait photography artistic black white",
        width: 3,
        height: 4,
      },
      {
        id: "p4",
        src: "https://images.unsplash.com/photo-1763677593928-468dc9767e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMHBvcnRyYWl0JTIwbW9vZHklMjBsaWdodGluZyUyMHdvbWFufGVufDF8fHx8MTc3NDM1MDk4NXww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Dramatic moody portrait",
        width: 3,
        height: 4,
      },
      {
        id: "p5",
        src: "https://images.unsplash.com/photo-1762395500093-f47607c482b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRpbWF0ZSUyMHBvcnRyYWl0JTIwc29mdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NzQzNTA5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Intimate portrait soft light",
        width: 4,
        height: 3,
      },
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    subtitle: "Candid & Documentary Stories",
    coverImage:
      "https://images.unsplash.com/photo-1560158623-9669b8879c8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBwaG90b2dyYXBoeSUyMG5hdHVyYWwlMjBsaWdodCUyMHdvbWFufGVufDF8fHx8MTc3NDM1MDk4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      {
        id: "l1",
        src: "https://images.unsplash.com/photo-1560158623-9669b8879c8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBwaG90b2dyYXBoeSUyMG5hdHVyYWwlMjBsaWdodCUyMHdvbWFufGVufDF8fHx8MTc3NDM1MDk4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Lifestyle photography natural light",
        width: 4,
        height: 3,
      },
      {
        id: "l2",
        src: "https://images.unsplash.com/photo-1665682824775-92f80e27ae54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwY2FuZGlkfGVufDF8fHx8MTc3NDM1MDk4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Documentary street photography",
        width: 4,
        height: 3,
      },
      {
        id: "l3",
        src: "https://images.unsplash.com/photo-1766481412533-4bbd6f990a36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwb3J0cmFpdCUyMGludGltYXRlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc0MzUwOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Couple portrait intimate",
        width: 3,
        height: 4,
      },
      {
        id: "l4",
        src: "https://images.unsplash.com/photo-1690996257818-d054f0bb8b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwcG9ydHJhaXQlMjBkb2N1bWVudGFyeSUyMHdvbWFufGVufDF8fHx8MTc3NDM1MDk4OXww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Environmental portrait documentary",
        width: 4,
        height: 3,
      },
    ],
  },
];

export const allImages = portfolioSeries.flatMap((series) =>
  series.images.map((img) => ({ ...img, series: series.id, seriesTitle: series.title }))
);
