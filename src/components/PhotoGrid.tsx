import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";
import photo6 from "@/assets/photo6.jpg";
import Lightbox from "./Lightbox";

const photos = [
  { src: photo1, title: "Golden Hour" },
  { src: photo2, title: "Urban Nights" },
  { src: photo3, title: "Seascape" },
  { src: photo4, title: "Autumn Road" },
  { src: photo5, title: "Desert Light" },
  { src: photo6, title: "Misty Forest" },
];

const PhotoItem = ({
  photo,
  index,
  onClick,
}: {
  photo: (typeof photos)[0];
  index: number;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="group relative overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <motion.div style={{ y }} className="w-full h-full">
        <div
          className="w-full overflow-hidden"
          style={{ aspectRatio: "2.35 / 1" }}
        >
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
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-xl md:text-2xl tracking-wider text-foreground">
            {photo.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const PhotoGrid = () => {
  const [selected, setSelected] = useState<{ src: string; title: string } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <motion.h2
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-section text-center mb-20 text-foreground"
        >
          RECENT WORK
        </motion.h2>

        <div className="flex flex-col gap-6">
          {/* Row 1: Full width hero */}
          <PhotoItem photo={photos[0]} index={0} onClick={() => setSelected(photos[0])} />

          {/* Row 2: Two side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PhotoItem photo={photos[1]} index={1} onClick={() => setSelected(photos[1])} />
            <PhotoItem photo={photos[2]} index={2} onClick={() => setSelected(photos[2])} />
          </div>

          {/* Row 3: Full width */}
          <PhotoItem photo={photos[3]} index={3} onClick={() => setSelected(photos[3])} />

          {/* Row 4: Two side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PhotoItem photo={photos[4]} index={4} onClick={() => setSelected(photos[4])} />
            <PhotoItem photo={photos[5]} index={5} onClick={() => setSelected(photos[5])} />
          </div>
        </div>
      </div>

      <Lightbox
        src={selected?.src ?? null}
        alt={selected?.title ?? ""}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};

export default PhotoGrid;
