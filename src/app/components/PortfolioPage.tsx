import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { pixpaPortfolioImages } from "../data/pixpaPortfolioData";
import { Lightbox } from "./Lightbox";

export function PortfolioPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const handleClose = () => setLightboxIndex(null);
  const handlePrev = () =>
    setLightboxIndex((index) =>
      index !== null ? (index - 1 + pixpaPortfolioImages.length) % pixpaPortfolioImages.length : 0
    );
  const handleNext = () =>
    setLightboxIndex((index) =>
      index !== null ? (index + 1) % pixpaPortfolioImages.length : 0
    );

  return (
    <div className="min-h-screen bg-[#f6efef]">
      <section className="mx-auto max-w-[1760px] px-4 pb-16 pt-16 sm:px-6 md:px-10 md:pb-24 md:pt-20">
        <div className="pb-10 md:pb-14">
          <h1
            className="text-[#1a1716]"
            style={{
              fontFamily: "'Old Standard TT', Georgia, serif",
              fontSize: "clamp(2rem, 3vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Portfolio
          </h1>
        </div>

        <div className="columns-1 sm:columns-2 xl:columns-3 [column-gap:10px] md:[column-gap:32px] xl:[column-gap:60px]">
          {pixpaPortfolioImages.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              className="mb-[10px] block w-full cursor-pointer break-inside-avoid overflow-hidden bg-transparent text-left md:mb-[32px] xl:mb-[60px]"
              onClick={() => setLightboxIndex(index)}
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.7, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="block h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.01]"
                initial={reduceMotion ? undefined : { scale: 1.02 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.button>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={pixpaPortfolioImages}
          currentIndex={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
