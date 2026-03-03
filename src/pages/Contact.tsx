import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-hero mb-8 text-foreground"
          >
            CONTACT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg text-muted-foreground mb-16"
          >
            Available for collaborations, commissions, and creative projects.
            Let's create something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <a
              href="https://instagram.com/dimz.media"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border px-8 py-4 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 w-full max-w-sm justify-center"
            >
              <Instagram size={20} />
              <span className="font-display text-sm tracking-[0.15em]">
                @DIMZ.MEDIA
              </span>
            </a>
            <a
              href="mailto:hello@dimzmedia.com"
              className="flex items-center gap-3 border border-border px-8 py-4 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 w-full max-w-sm justify-center"
            >
              <Mail size={20} />
              <span className="font-display text-sm tracking-[0.15em]">
                HELLO@DIMZMEDIA.COM
              </span>
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
