import { useState } from "react";
import {
  ChevronRight,
  Landmark,
  BookOpen,
  Scale,
  Smartphone,
  Users,
  GraduationCap,
  Ban,
  Globe,
  Flag,
} from "lucide-react";

const timelineEvents = [
  {
    year: "1760",
    title: "Primeira Escola para Surdos",
    description:
      "Charles-Michel de l'Épée funda a primeira escola pública para surdos em Paris, desenvolvendo os 'sinais metódicos' baseados na Língua de Sinais Francesa Antiga.",
    icon: GraduationCap,
    category: "Origem",
  },
  {
    year: "1857",
    title: "Fundação do INES",
    description:
      "Dom Pedro II convida o professor surdo francês Ernest Huet para fundar o Imperial Instituto de Surdos-Mudos (atual INES) no Rio de Janeiro, introduzindo a Língua de Sinais Francesa que se misturou com sinais locais, formando a Libras.",
    icon: Landmark,
    category: "Instituição",
  },
  {
    year: "1875",
    title: "Primeiro Dicionário de Sinais",
    description:
      "Flausino José da Costa Gama, ex-aluno do INES, publica 'Iconografia dos Signaes dos Surdos-Mudos', o primeiro dicionário de sinais do Brasil.",
    icon: BookOpen,
    category: "Publicação",
  },
  {
    year: "1880",
    title: "Congresso de Milão",
    description:
      "Educadores (quase todos ouvintes) votaram pela proibição de línguas de sinais nas escolas, priorizando o oralismo. Isso causou décadas de opressão e declínio cultural para a comunidade surda.",
    icon: Ban,
    category: "Marco Histórico",
  },
  {
    year: "1911",
    title: "Oralismo no Brasil",
    description:
      "O INES adotou o oralismo puro seguindo a tendência mundial pós-Milão, proibindo sinais nas aulas.",
    icon: BookOpen,
    category: "Educação",
  },
  {
    year: "1960",
    title: "Reconhecimento Científico",
    description:
      "William Stokoe provou cientificamente que línguas de sinais são linguagens completas com gramática própria, impulsionando o reconhecimento global e o orgulho surdo.",
    icon: Globe,
    category: "Ciência",
  },
  {
    year: "1987",
    title: "Fundação da FENEIS",
    description:
      "Fundação da Federação Nacional de Educação e Integração dos Surdos, organização que luta pelos direitos da comunidade surda brasileira.",
    icon: Users,
    category: "Organização",
  },
  {
    year: "2002",
    title: "Lei 10.436 - Lei de Libras",
    description:
      "Em 24 de abril, a Lei nº 10.436 reconheceu a Libras como meio legal de comunicação e expressão para comunidades surdas. Esta data é comemorada como Dia Nacional da Libras.",
    icon: Scale,
    category: "Legislação",
  },
  {
    year: "2005",
    title: "Decreto 5.626",
    description:
      "Regulamentação da Lei de Libras, obrigando o ensino de Libras em cursos de magistério e fonoaudiologia, além da formação de intérpretes.",
    icon: Scale,
    category: "Legislação",
  },
  {
    year: "2010",
    title: "Repúdio ao Congresso de Milão",
    description:
      "O Congresso Internacional de Educação de Surdos repudiou formalmente as resoluções de 1880, reconhecendo o erro histórico da proibição das línguas de sinais.",
    icon: Flag,
    category: "Marco Histórico",
  },
  {
    year: "2015",
    title: "Lei Brasileira de Inclusão",
    description:
      "A Lei 13.146/2015 reforçou o uso da Libras em serviços públicos, ampliando a acessibilidade para a comunidade surda.",
    icon: Scale,
    category: "Legislação",
  },
  {
    year: "2016",
    title: "Núcleo de Ensino de Libras - UFPR",
    description:
      "Criação do NEL na UFPR, apoiando a difusão da língua conforme a legislação vigente.",
    icon: Landmark,
    category: "Instituição",
  },
];

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(7);

  return (
    <section id="timeline" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-secondary/20 text-primary rounded-full text-sm font-medium mb-4">
            Explore a História
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4">
            Linha do Tempo Interativa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os marcos mais importantes da história da Libras: origem,
            instituições, legislações, personagens e avanços.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline Line */}
          <div className="absolute top-8 left-4 right-4 h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              // style={{
              //   width: `${((activeIndex + 1) / timelineEvents.length) * 100}%`,
              // }}
              style={{
                width: `${
                  activeIndex === 0
                    ? 0
                    : (activeIndex / (timelineEvents.length - 1)) * 100
                }%`,
              }}
            />
          </div>

          {/* Timeline Points */}
          <div className="flex justify-between relative mb-8 overflow-x-auto p-2">
            {timelineEvents.map((event, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="flex flex-col items-center group flex-shrink-0 px-2"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    index <= activeIndex
                      ? "bg-primary border-primary text-primary-foreground scale-105"
                      : "bg-background border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  <event.icon className="w-5 h-5" />
                </div>
                <span
                  className={`mt-2 text-xs font-bold transition-colors whitespace-nowrap ${
                    index === activeIndex
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {event.year}
                </span>
              </button>
            ))}
          </div>

          {/* Active Event Card */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-start gap-6">
              <div className="hidden lg:flex w-20 h-20 bg-primary/10 rounded-2xl items-center justify-center shrink-0">
                {(() => {
                  const Icon = timelineEvents[activeIndex].icon;
                  return <Icon className="w-10 h-10 text-primary" />;
                })()}
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-secondary/20 text-primary text-xs font-medium rounded-full mb-2">
                  {timelineEvents[activeIndex].category}
                </span>
                <h3 className="text-2xl font-heading text-foreground mb-2">
                  {timelineEvents[activeIndex].year} -{" "}
                  {timelineEvents[activeIndex].title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {timelineEvents[activeIndex].description}
                </p>
              </div>
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % timelineEvents.length)
                }
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
              >
                Próximo
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-4 max-h-[600px] overflow-y-auto">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl border transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary/5 border-primary shadow-card"
                  : "bg-card border-border"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    index === activeIndex
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <event.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">
                    {event.category}
                  </span>
                  <h3 className="font-heading text-foreground">
                    {event.year} - {event.title}
                  </h3>
                </div>
              </div>
              {index === activeIndex && (
                <p className="mt-3 text-muted-foreground pl-16">
                  {event.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
