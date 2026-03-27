import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImage {
  src: string;
  alt: string;
  description?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
      >
        <X size={24} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-5 text-white/50 tracking-widest text-[10px]">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Image & Description Container */}
      <div
        className="max-w-[90vw] max-h-[90vh] flex flex-col items-center justify-center gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="max-w-full max-h-[75vh] object-contain drop-shadow-2xl"
          style={{ userSelect: "none" }}
        />
        
        {/* Session Description Widget */}
        {current.description && (
          <div className="text-center bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span 
              className="text-[#f7f0ee] tracking-[0.15em] uppercase text-[10px] md:text-xs font-medium" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {current.description}
            </span>
          </div>
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
