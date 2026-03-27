import { motion, useReducedMotion } from "motion/react";
import heroImage from "../images/WhatsApp Image 2026-03-24 at 3.05.16 PM (3).jpeg";
import editorialImage from "../images/110.jpeg";
import portraitImage from "../images/3.jpeg";

export function HomePage() {
  const reduceMotion = useReducedMotion();
  const heroTransition = reduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] };
  const revealTransition = reduceMotion ? { duration: 0 } : { duration: 0.9, ease: [0.22, 1, 0.36, 1] };
  const imageReveal = reduceMotion
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 1, y: 0, scale: 1 };
  const imageInitial = reduceMotion
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 0, y: 24, scale: 0.98 };
  const textInitial = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 };
  const textReveal = { opacity: 1, y: 0 };

  return (
    <div className="bg-[#f6efef]">
      <motion.section
        className="mx-auto flex max-w-[1720px] flex-col gap-8 px-4 pb-10 pt-12 sm:px-6 md:min-h-[680px] md:flex-row md:items-stretch md:gap-0 md:pb-16 md:pt-14"
        style={{ backgroundColor: "#f6efef" }}
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={heroTransition}
      >
        <motion.div
          className="w-full overflow-hidden bg-[#ddd0c8] md:ml-10 md:mt-4 md:min-h-[620px] md:max-w-[620px] md:flex-[0_0_44%]"
          initial={imageInitial}
          animate={imageReveal}
          transition={heroTransition}
        >
          <motion.div
            className="aspect-[1.08/1] min-h-[320px] h-full w-full md:aspect-auto"
            initial={reduceMotion ? undefined : { scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={heroImage}
              alt="Karlly beauty portrait"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex max-w-xl flex-col items-center justify-center gap-6 px-1 py-6 text-center md:max-w-none md:flex-1 md:px-12"
          initial={textInitial}
          animate={textReveal}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            className="text-[#231917]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(3rem, 4.5vw, 4.1rem)",
              fontWeight: 400,
              lineHeight: 1.05,
            }}
            initial={textInitial}
            animate={textReveal}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I&apos;m Azeez.
          </motion.h1>
          <motion.p
            className="max-w-[540px] text-[#4a3f3a]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1rem, 1.25vw, 1.15rem)",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
            initial={textInitial}
            animate={textReveal}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Sudanese model based in Egypt, focused on fashion. Known for a strong presence and versatile looks.
          </motion.p>
          <motion.div
            className="pt-1"
            initial={textInitial}
            animate={textReveal}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="https://www.instagram.com/_7ateesh_?igsh=ZG52MzhkbXEwNTdw&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-transparent border border-[#231917] px-10 py-[15px] text-[#231917] transition-all duration-300 hover:bg-[#231917] hover:text-[#f7f0ee]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="w-full"
        style={{ backgroundColor: "#b8c8d4" }}
        initial={textInitial}
        whileInView={textReveal}
        viewport={{ once: true, amount: 0.22 }}
        transition={revealTransition}
      >
        <motion.div
          className="w-full flex flex-col items-center justify-center"
          style={{ minHeight: "380px", position: "relative" }}
          initial={imageInitial}
          whileInView={imageReveal}
          viewport={{ once: true, amount: 0.22 }}
          transition={revealTransition}
        >
          <motion.img
            src={editorialImage}
            alt="Editorial portfolio image"
            className="h-full min-h-[380px] w-full object-cover"
            initial={reduceMotion ? undefined : { scale: 1.03 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </motion.section>

      <motion.section
        style={{ backgroundColor: "#f5efea" }}
        className="flex flex-col items-center gap-10 px-6 py-12 sm:px-8 md:min-h-[980px] md:flex-row md:items-center md:justify-between md:gap-16 md:px-14 md:py-20"
        initial={textInitial}
        whileInView={textReveal}
        viewport={{ once: true, amount: 0.18 }}
        transition={revealTransition}
      >
        <motion.div
          className="flex-shrink-0 flex items-center justify-center md:w-[42%] md:justify-start"
          initial={imageInitial}
          whileInView={imageReveal}
          viewport={{ once: true, amount: 0.18 }}
          transition={revealTransition}
        >
          <motion.div
            className="relative w-full max-w-[320px] overflow-hidden md:max-w-[690px]"
            style={{ aspectRatio: "0.66 / 1", flexShrink: 0 }}
            initial={reduceMotion ? undefined : { scale: 1.03 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={portraitImage}
              alt="Karlly portrait"
              className="h-full w-full object-cover grayscale"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-1 flex-col items-center justify-center text-center md:max-w-[46%]"
          initial={textInitial}
          whileInView={textReveal}
          viewport={{ once: true, amount: 0.22 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#7a7068",
              marginBottom: "40px",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
            initial={textInitial}
            whileInView={textReveal}
            viewport={{ once: true, amount: 0.35 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Measurements
          </motion.h2>
          
          <motion.div
            className="w-full max-w-[480px] grid grid-cols-2 gap-x-8 gap-y-7 text-left"
            initial={textInitial}
            whileInView={textReveal}
            viewport={{ once: true, amount: 0.24 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.95, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { label: "Height", value: "6'3" },
              { label: "Neck", value: "17.7" },
              { label: "Shoulders", value: "19.7" },
              { label: "Chest", value: "15.7" },
              { label: "Sleeves", value: "26" },
              { label: "Waist", value: "25.6" },
              { label: "Hips", value: "33.1" },
              { label: "Inseam", value: "38.6" },
              { label: "Thigh", value: "17.7" },
              { label: "Shoe", value: "11" },
              { label: "Eyes", value: "Brown" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col border-b border-[#e6ded8] pb-3">
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#9e9188",
                    marginBottom: "4px"
                  }}
                >
                  {stat.label}
                </span>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.75rem",
                    color: "#231917",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
