import { Button } from "./ui/button";
import { ArrowDown, Users, BookOpen, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-libras.jpg";

const stats = [
  { icon: Calendar, value: "200+", label: "Anos de História" },
  { icon: Users, value: "10M+", label: "Surdos no Brasil" },
  { icon: BookOpen, value: "500+", label: "Documentos" },
];

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#sobre");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ilustração de mãos fazendo sinais em Libras"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl animate-float animation-delay-300" />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading text-primary-foreground mb-6 animate-fade-up">
            MUSELibras
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light mb-4 animate-fade-up animation-delay-100">
            A História Viva da Língua Brasileira de Sinais
          </p>
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
            Explore a rica trajetória da Libras: das origens às conquistas, dos
            pioneiros às lutas, num museu digital acessível para todos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up animation-delay-300">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToAbout}
              className="group"
            >
              Explorar História
              <ArrowDown className="group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() =>
                document
                  .querySelector("#timeline")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Linha do Tempo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-up animation-delay-400">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
              >
                <stat.icon className="w-8 h-8 text-secondary mb-2" />
                <span className="text-3xl font-heading text-primary-foreground">
                  {stat.value}
                </span>
                <span className="text-sm text-primary-foreground/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
      </div>
    </section>
  );
}
