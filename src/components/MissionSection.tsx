import { motion } from "framer-motion";
import WheatIcon from "./WheatIcon";

const MissionSection = () => {
  return (
    <section id="mission" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <WheatIcon className="mx-auto mb-4 text-accent" size={32} />
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
              Наша <span className="text-gradient-primary">місія</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Ми розвиваємо та підтримуємо українську Solana-екосистему, 
              надаючи можливості талановитим розробникам та інноваційним проєктам. 
              Superteam Ukraine — це місток між глобальною Web3 спільнотою та 
              українськими будівничими нового інтернету.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {[
              { number: "500+", label: "Учасників" },
              { number: "50+", label: "Подій" },
              { number: "30+", label: "Проєктів" },
              { number: "10+", label: "Партнерів" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-foreground md:text-4xl">
                  {stat.number}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
