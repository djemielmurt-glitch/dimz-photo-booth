import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-sm tracking-[0.15em] text-muted-foreground">
          © 2026 DIMZ.MEDIA — ALL RIGHTS RESERVED
        </p>
        <a
          href="https://instagram.com/dimz.media"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Instagram size={18} />
          <span className="font-display text-sm tracking-[0.15em]">@DIMZ.MEDIA</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
