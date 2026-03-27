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
    <motion.div 
      className="min-h-screen bg-[#f6efef]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <section className="mx-auto max-w-[1760px] px-4 pb-16 pt-16 sm:px-6 md:px-10 md:pb-24 md:pt-20">
        <div className="pb-10 md:pb-14">
          <motion.h1
            className="text-[#1a1716]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2rem, 3vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Portfolio
          </motion.h1>
        </div>

        <div className="relative">
          <div className="columns-1 sm:columns-2 xl:columns-3 [column-gap:10px] md:[column-gap:32px] xl:[column-gap:60px]">
          {pixpaPortfolioImages.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              className="mb-[10px] block w-full cursor-pointer break-inside-avoid overflow-hidden bg-transparent text-left md:mb-[32px] xl:mb-[60px]"
              onClick={() => setLightboxIndex(index)}
              initial={reduceMotion ? undefined : { opacity: 0, y: 40, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  // Only stagger the first 6 items for the initial page load. 
                  // Items further down will reveal instantly as they scroll into view.
                  : { duration: 1.1, delay: index < 6 ? index * 0.15 : 0, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="block h-auto w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.03]"
                initial={reduceMotion ? undefined : { scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.button>
          ))}
        </div>
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
    </motion.div>
  );
}
