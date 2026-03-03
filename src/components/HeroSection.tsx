import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
      <motion.div style={{ y, opacity }} className="text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-hero font-display text-foreground mb-6"
        >
          HELLO, I'M{" "}
          <span className="text-muted-foreground">DIMZ MEDIA,</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-hero font-display text-muted-foreground leading-none"
        >
          CREATIVE PHOTOGRAPHER &{" "}
          <span className="text-foreground">VISUAL STORYTELLER.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/portfolio"
            className="font-display text-sm tracking-[0.15em] border border-foreground px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            VIEW PORTFOLIO
          </Link>
          <a
            href="https://instagram.com/dimz.media"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm tracking-[0.15em] border border-muted-foreground px-8 py-3 text-muted-foreground hover:border-foreground hover:text-foreground transition-all duration-300"
          >
            @DIMZ.MEDIA
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
