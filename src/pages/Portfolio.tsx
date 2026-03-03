import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";
import photo6 from "@/assets/photo6.jpg";

const allPhotos = [
  { src: photo1, title: "Golden Hour", category: "Landscape" },
  { src: photo2, title: "Urban Nights", category: "Street" },
  { src: photo3, title: "Seascape", category: "Fine Art" },
  { src: photo4, title: "Autumn Road", category: "Aerial" },
  { src: photo5, title: "Desert Light", category: "Landscape" },
  { src: photo6, title: "Misty Forest", category: "Nature" },
];

const PortfolioItem = ({
  photo,
  index,
  onClick,
}: {
  photo: (typeof allPhotos)[0];
  index: number;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.96, 1, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="group relative overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <motion.div style={{ y }}>
        <div className="w-full overflow-hidden" style={{ aspectRatio: "2.35 / 1" }}>
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end pointer-events-none">
        <div className="p-6 md:p-10">
          <span className="font-display text-xs tracking-[0.3em] text-muted-foreground block mb-1">
            {photo.category} — {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-xl md:text-2xl tracking-wider text-foreground">
            {photo.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [selected, setSelected] = useState<{ src: string; title: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-hero text-center mb-20 text-foreground"
          >
            PORTFOLIO
          </motion.h1>

          <div className="flex flex-col gap-6">
            <PortfolioItem photo={allPhotos[0]} index={0} onClick={() => setSelected(allPhotos[0])} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PortfolioItem photo={allPhotos[1]} index={1} onClick={() => setSelected(allPhotos[1])} />
              <PortfolioItem photo={allPhotos[2]} index={2} onClick={() => setSelected(allPhotos[2])} />
            </div>
            <PortfolioItem photo={allPhotos[3]} index={3} onClick={() => setSelected(allPhotos[3])} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PortfolioItem photo={allPhotos[4]} index={4} onClick={() => setSelected(allPhotos[4])} />
              <PortfolioItem photo={allPhotos[5]} index={5} onClick={() => setSelected(allPhotos[5])} />
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <Lightbox
        src={selected?.src ?? null}
        alt={selected?.title ?? ""}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};

export default Portfolio;
