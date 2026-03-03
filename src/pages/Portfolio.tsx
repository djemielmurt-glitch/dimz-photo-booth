import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-hero text-center mb-20 text-foreground"
          >
            PORTFOLIO
          </motion.h1>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {allPhotos.map((photo, i) => (
              <motion.div
                key={photo.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden break-inside-avoid cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-end">
                  <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-display text-xs tracking-[0.2em] text-muted-foreground mb-1">
                      {photo.category}
                    </p>
                    <h3 className="font-display text-xl tracking-wider text-foreground">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
