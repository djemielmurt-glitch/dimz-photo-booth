import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-hero text-center mb-16 text-foreground"
          >
            ABOUT
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 font-body text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              I'm Dimz Media — a creative photographer and visual storyteller
              passionate about capturing moments that evoke emotion and tell
              compelling stories through the lens.
            </p>
            <p>
              From moody landscapes and urban exploration to intimate portraits
              and aerial perspectives, my work spans a wide range of genres,
              always with a focus on atmosphere and cinematic quality.
            </p>
            <p>
              Every frame is an opportunity to create something meaningful. I
              believe photography is more than documentation — it's an art form
              that connects us to the world in profound ways.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-border"
          >
            <h2 className="text-section text-foreground mb-8">GET IN TOUCH</h2>
            <div className="space-y-3 font-body text-muted-foreground">
              <p>
                Instagram:{" "}
                <a
                  href="https://instagram.com/dimz.media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  @dimz.media
                </a>
              </p>
              <p>
                Email:{" "}
                <span className="text-foreground">hello@dimzmedia.com</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
