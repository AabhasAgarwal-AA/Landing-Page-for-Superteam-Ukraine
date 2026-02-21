import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import WheatIcon from "./WheatIcon";
import p_1 from "../assets/images/p_1.png";
import p_2 from "../assets/images/p_2.png";
import p_3 from "../assets/images/p_3.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-center gap-2">
              <WheatIcon className="text-accent" size={20} />
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Superteam Ukraine
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-foreground">Solana</span>
              <br />
              <span className="text-gradient-primary">спільнота</span>
              <br />
              <span className="text-foreground">в Україні</span>
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Superteam Ukraine — це хаб для розробників, засновників та креаторів, 
              які будують майбутнє на Solana. Навчайся, заробляй та створюй разом з нами.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://x.com/SuperteamUA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-primary"
              >
                Приєднатися
              </a>
              <a
                href="#what-we-do"
                className="inline-flex items-center rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:bg-muted"
              >
                Дізнатися більше
              </a>
            </div>
          </motion.div>

          {/* Right: Photo grid placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <img className="photo-placeholder aspect-[3/4] rounded-2xl text-xs text-muted-foreground" src={p_1} alt="Image" />
                </div>
                <div>
                  
                    <img className="photo-placeholder aspect-square rounded-2xl text-xs text-muted-foreground" src={p_2} alt="Image"></img>
                  
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div>
                  
                    <img className="photo-placeholder aspect-square rounded-2xl text-xs text-muted-foreground" src={p_3} alt="Image"></img>

                  
                </div>
                <div>
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative wheat elements */}
      <motion.div
        className="absolute bottom-10 right-10 text-accent/20 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <WheatIcon size={80} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
