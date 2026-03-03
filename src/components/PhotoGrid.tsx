import { useState } from "react";
import { motion } from "framer-motion";
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

// Layout: "full" = full width, "half" = 50%, "third" = 33%
const layout: Array<{ span: string; indices: number[] }> = [
  { span: "full", indices: [0] },
  { span: "half", indices: [1, 2] },
  { span: "third", indices: [3] },
  { span: "two-third", indices: [4] },
  { span: "full", indices: [5] },
];

const PhotoGrid = () => {
  const [selected, setSelected] = useState<{ src: string; title: string } | null>(null);

  return (
    <section className="py-24">
      <div className="max-w-[1800px] mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-section text-center mb-16 text-foreground"
        >
          RECENT WORK
        </motion.h2>

        <div className="flex flex-col gap-3">
          {layout.map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-3">
              {row.indices.map((photoIdx) => {
                const photo = photos[photoIdx];
                if (!photo) return null;

                const widthClass =
                  row.span === "full"
                    ? "w-full"
                    : row.span === "half"
                    ? "w-1/2"
                    : row.span === "third"
                    ? "w-[38%]"
                    : "w-[62%]";

                return (
                  <motion.div
                    key={photo.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: photoIdx * 0.05 }}
                    className={`${widthClass} group relative overflow-hidden cursor-pointer flex-shrink-0`}
                    style={{ aspectRatio: "2.35 / 1" }}
                    onClick={() => setSelected(photo)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-8">
                        <h3 className="font-display text-xl tracking-wider text-foreground">
                          {photo.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
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
