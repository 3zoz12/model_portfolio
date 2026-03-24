import { motion, useReducedMotion } from "motion/react";
import heroImage from "../images/1.jpeg";
import editorialImage from "../images/2.jpeg";
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
            className="max-w-[620px] text-[#2f2420]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.5rem, 2vw, 2.15rem)",
              lineHeight: 1.35,
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
              className="inline-flex items-center rounded-[12px] bg-[#24211f] px-10 py-4 text-[#f7f0ee] transition-colors hover:bg-[#393330]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.15rem, 1.2vw, 1.45rem)",
                letterSpacing: "0.01em",
                textDecoration: "none",
                fontWeight: 500,
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
          <motion.p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.25rem, 1.8vw, 1.8rem)",
              letterSpacing: "0.08em",
              color: "#7a7068",
              marginBottom: "24px",
              fontWeight: 400,
            }}
            initial={textInitial}
            whileInView={textReveal}
            viewport={{ once: true, amount: 0.35 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Measurements
          </motion.p>
          <motion.div
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.75rem, 5vw, 5rem)",
              color: "#231917",
              lineHeight: 1.32,
              fontWeight: 400,
            }}
            initial={textInitial}
            whileInView={textReveal}
            viewport={{ once: true, amount: 0.24 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.95, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>Height: 190</p>
            <p> Neck: 45 </p>
            <p>Shoulders : 50</p>
            <p>Chest : 40 </p>
            <p>Sleeves : 66</p>
            <p>Waist : 65</p>
            <p>Hips : 84</p>
            <p>Inseam : 98 </p>
            <p>Thigh  : 45 </p>
            <p>Shoe: 44</p>
            <p>Eyes  : Black</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
