import { motion } from "framer-motion";

const partners = [
  "Solana Foundation",
  "Superteam",
  "Helius",
  "Marinade",
  "Jupiter",
  "Phantom",
];

const PartnersSection = () => {
  return (
    <section id="partners" className="border-t border-border py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl">
            Нам <span className="text-gradient-wheat">довіряють</span>
          </h2>
          <p className="text-muted-foreground">
            Провідні проєкти екосистеми Solana
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {partners.map((name) => (
            <div
              key={name}
              className="flex h-12 items-center rounded-lg border border-border/50 bg-card px-6 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
