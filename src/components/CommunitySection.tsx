import { motion } from "framer-motion";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";
import p7 from "../assets/images/p7.png";
import pic from "../assets/images/pic.png";




const CommunitySection = () => {
  return (
    <section id="community" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            Наша <span className="text-gradient-primary">спільнота</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Ми регулярно проводимо мітапи, воркшопи та хакатони по всій Україні
          </p>
        </motion.div>

        {/* Photo grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-5 md:grid-cols-4"
        >
          {[
            { aspect: "aspect-[4/3] md:col-span-2", label: "Мітап", img: p1 }, // featured
            { aspect: "aspect-square", label: "Хакатон", img: p2 },
            { aspect: "aspect-square", label: "Воркшоп", img: p3 },
            { aspect: "aspect-[4/3]", label: "Нетворкінг", img: p4 },
            { aspect: "aspect-[4/3]", label: "Подія спільноти", img: p5 },
            { aspect: "aspect-[4/3]", label: "Конференція", img: p6 },
            { aspect: "aspect-[4/3]", label: "Команда", img: p7 },
          ].map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${item.aspect}`}
            >
              <img
                src={item.img}
                alt={item.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Label */}
              <div className="absolute bottom-4 left-4">
                <span className="text-sm font-semibold text-white tracking-wide">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
        

        {/* 2 Years In Review Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 md:mt-32"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">

            {/* Optional Title */}
            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold md:text-4xl">
                Огляд 2 років
              </h3>
              <p className="mt-3 text-muted-foreground">
                Результати нашої спільноти за два роки
              </p>
            </div>

            {/* Image wrapper */}
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2a235a] to-[#1b163d] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/10" />

              <img
                src={pic}
                alt="2 Years in Review"
                className="relative w-full h-auto rounded-2xl object-contain"
              />
            </div>

          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-muted-foreground">
            Приєднуйтесь до подій та залишайтесь у курсі
          </p>
          <a
            href="https://lu.ma/SuperteamUA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:bg-muted"
          >
            Переглянути події
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
