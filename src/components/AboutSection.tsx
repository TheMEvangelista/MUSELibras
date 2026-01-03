import { BookOpen, Users, Camera, Landmark } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Documentos Históricos",
    description: "Acesso a registros, manuscritos e publicações que marcaram a história da Libras.",
  },
  {
    icon: Users,
    title: "Personagens Marcantes",
    description: "Conheça as figuras que lutaram e transformaram a educação de surdos no Brasil.",
  },
  {
    icon: Camera,
    title: "Galeria de Fotos",
    description: "Imagens raras de escolas, eventos e momentos históricos da comunidade surda.",
  },
  {
    icon: Landmark,
    title: "Museu Digital",
    description: "Um espaço virtual acessível, preservando a memória e cultura da língua de sinais.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Sobre o Projeto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4">
            Um Portal para a Memória Surda
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O MUSELibras é um museu digital dedicado a preservar e compartilhar a
            história da Língua Brasileira de Sinais. Reunimos documentos, relatos,
            fotografias, curiosidades e personagens marcantes que construíram essa
            rica trajetória.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
