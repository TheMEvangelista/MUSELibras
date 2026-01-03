import { Heart, Mail, Instagram, Youtube, Facebook } from "lucide-react";

const footerLinks = {
  projeto: [
    { label: "Sobre", href: "#sobre" },
    { label: "Linha do Tempo", href: "#timeline" },
    { label: "Personagens", href: "#personagens" },
    { label: "Galeria", href: "#galeria" },
  ],
  recursos: [
    { label: "Curiosidades", href: "#curiosidades" },
    { label: "Mapa Interativo", href: "#mapa" },
    { label: "Depoimentos", href: "#comunidade" },
  ],
  acessibilidade: [
    { label: "Alto Contraste", href: "#" },
    { label: "Aumentar Fonte", href: "#" },
    { label: "Vídeos em Libras", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl mb-4">
              MUSE<span className="text-secondary">Libras</span>
            </h3>
            <p className="text-background/70 mb-6">
              Um museu digital dedicado a preservar e compartilhar a rica história
              da Língua Brasileira de Sinais.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Projeto</h4>
            <ul className="space-y-2">
              {footerLinks.projeto.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Acessibilidade</h4>
            <ul className="space-y-2">
              {footerLinks.acessibilidade.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-background/20">
          <a
            href="mailto:contato@muselibras.com.br"
            className="flex items-center gap-2 text-background/70 hover:text-secondary transition-colors"
          >
            <Mail className="w-5 h-5" />
            contato@muselibras.com.br
          </a>
          <p className="text-background/50 text-sm text-center">
            Este site segue as diretrizes de acessibilidade WCAG 2.1
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-background/20">
          <p className="text-background/50 text-sm flex items-center justify-center gap-1">
            © {new Date().getFullYear()} MUSELibras. Feito com
            <Heart className="w-4 h-4 text-destructive fill-current" />
            para a comunidade surda.
          </p>
        </div>
      </div>
    </footer>
  );
}
