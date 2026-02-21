import { motion } from "framer-motion";
import { BookOpen, Coins, Code } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Learn",
    titleUa: "Навчайся",
    items: [
      "Програми навчання Solana-розробки",
      "Воркшопи для засновників стартапів",
      "Підтримка від топ-експертів екосистеми",
    ],
  },
  {
    icon: Coins,
    title: "Earn",
    titleUa: "Заробляй",
    items: [
      "Гранти на розвиток стартапів",
      "Працевлаштування в проєктах хабу",
      "Грошові бонуси для студентів",
    ],
  },
  {
    icon: Code,
    title: "Build",
    titleUa: "Створюй",
    items: [
      "Спільнота білдерів на Solana",
      "Хакатони та змагання",
      "Акселераційна програма для проєктів",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            Що ми <span className="text-gradient-wheat">робимо</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Три напрямки, що допомагають українській Web3 спільноті рости та розвиватися
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:glow-primary"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <pillar.icon size={24} />
              </div>
              <h3 className="mb-1 text-2xl font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="mb-5 text-sm font-medium text-accent">
                {pillar.titleUa}
              </p>
              <ul className="space-y-3">
                {pillar.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
