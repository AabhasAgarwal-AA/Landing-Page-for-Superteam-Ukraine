import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import WheatIcon from "./WheatIcon";

const navLinks = [
  { label: "Місія", href: "#mission" },
  { label: "Напрямки", href: "#what-we-do" },
  { label: "Спільнота", href: "#community" },
  { label: "Партнери", href: "#partners" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <WheatIcon className="text-accent" size={28} />
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            superteam
            <span className="ml-1 text-xs font-medium uppercase tracking-widest text-accent">
              Ukraine
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://x.com/SuperteamUA"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-primary"
          >
            Приєднатися
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://x.com/SuperteamUA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Приєднатися
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
