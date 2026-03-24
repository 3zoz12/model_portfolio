import { useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import Masonry from "react-responsive-masonry";
import ResponsiveMasonry from "react-responsive-masonry";
import { portfolioSeries } from "../data/portfolioData";
import { Lightbox } from "./Lightbox";

export function GalleryPage() {
  const { series: seriesId } = useParams<{ series: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const series = portfolioSeries.find((s) => s.id === seriesId);

  if (!series) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-neutral-400">
        <p className="tracking-widest text-sm">Series not found.</p>
        <Link to="/" className="mt-6 text-[10px] tracking-[0.2em] text-neutral-400 hover:text-neutral-900 border-b border-current pb-0.5 transition-colors">
          BACK TO PORTFOLIO
        </Link>
      </div>
    );
  }

  const handleOpen = (index: number) => setLightboxIndex(index);
  const handleClose = () => setLightboxIndex(null);
  const handlePrev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + series.images.length) % series.images.length : 0));
  const handleNext = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % series.images.length : 0));

  return (
    <div className="min-h-screen">
      {/* Series header */}
      <div className="px-6 md:px-12 pt-12 pb-10 text-center">
        <p className="text-[9px] tracking-[0.3em] text-neutral-300 mb-3">PORTFOLIO</p>
        <h1
          className="tracking-[0.2em] text-neutral-800 mb-2"
          style={{ fontFamily: "'Georgia', serif", fontSize: "18px", fontWeight: 400 }}
        >
          {series.title.toUpperCase()}
        </h1>
        <p className="text-[10px] tracking-[0.15em] text-neutral-400">{series.subtitle}</p>
        <div className="mt-6 h-px w-8 bg-neutral-200 mx-auto" />
      </div>

      {/* Masonry Gallery */}
      <div className="px-4 md:px-8 pb-20 max-w-screen-xl mx-auto">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}
        >
          <Masonry gutter="10px">
            {series.images.map((img, index) => (
              <div
                key={img.id}
                className="overflow-hidden cursor-pointer group"
                onClick={() => handleOpen(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full block object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* Back link */}
      <div className="pb-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-neutral-400 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft size={12} />
          BACK TO PORTFOLIO
        </Link>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={series.images}
          currentIndex={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
