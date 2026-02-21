import WheatIcon from "./WheatIcon";

const footerLinks = [
  {
    title: "Спільнота",
    links: [
      { label: "Twitter / X", href: "https://x.com/SuperteamUKR" },
      { label: "Telegram", href: "https://t.me/KumekaTeam" },
      { label: "Discord", href: "https://discord.com/invite/2FcnWcu7Tf" },
    ],
  },
  {
    title: "Ресурси",
    links: [
      { label: "Superteam Global", href: "https://superteam.fun" },
      { label: "Solana", href: "https://solana.com" },
      { label: "Earn", href: "https://earn.superteam.fun" },
    ],
  },
  {
    title: "Навігація",
    links: [
      { label: "Місія", href: "#mission" },
      { label: "Напрямки", href: "#what-we-do" },
      { label: "Спільнота", href: "#community" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <WheatIcon className="text-accent" size={24} />
              <span className="font-heading text-lg font-bold text-foreground">
                superteam
                <span className="ml-1 text-xs font-medium uppercase tracking-widest text-accent">
                  UA
                </span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              №1 Solana Web3 хаб в Україні. Будуємо майбутнє децентралізованого інтернету разом.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Superteam Ukraine. Усі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
