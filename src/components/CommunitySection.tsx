import { useState } from "react";
import { Play, Quote, ExternalLink } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Regina Mercurio",
    role: "Formadora de Educação Inclusiva",
    quote: "A formação de professores em Libras é fundamental para garantir a inclusão real dos alunos surdos nas escolas. Precisamos de educadores preparados e sensibilizados.",
    description: "Como está a formação dos professores em Libras?",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    hasVideo: true,
  },
  {
    id: 2,
    name: "Comunidade Surda",
    role: "Depoimentos Coletivos",
    quote: "A Lei de Libras foi uma conquista histórica que mudou nossas vidas. Finalmente temos nosso direito à comunicação reconhecido oficialmente.",
    description: "Reconhecimento da Lei de LIBRAS - 12 anos de celebração",
    videoUrl: "https://www.youtube.com/watch?v=wwTIsz2Swpk",
    hasVideo: true,
  },
  {
    id: 3,
    name: "Pesquisadores - II CONEC 2024",
    role: "Comunicação Oral",
    quote: "A formação de professores para a inclusão de alunos surdos precisa ir além do básico. É necessário um conhecimento profundo da cultura surda e da Libras.",
    description: "A formação de professores para a inclusão de alunos surdos",
    videoUrl: null,
    hasVideo: true,
  },
  {
    id: 4,
    name: "Profa. Vanessa Nogueira",
    role: "Professora da Unilab",
    quote: "O processo de formação de professores no ensino de Libras enfrenta dificuldades, mas também abre perspectivas importantes para o futuro da educação inclusiva.",
    description: "O processo de Formação de Professores/as no Ensino de Libras na Unilab: dificuldades e perspectivas",
    videoUrl: null,
    hasVideo: true,
  },
  {
    id: 5,
    name: "Educadores",
    role: "Escola Regular",
    quote: "Na escola regular, desenvolvemos estratégias criativas para incluir a Libras no cotidiano. É um trabalho desafiador, mas extremamente gratificante.",
    description: "Libras na Escola Regular: Os educadores e suas estratégias",
    videoUrl: null,
    hasVideo: true,
  },
  {
    id: 6,
    name: "Rafael Carlos Lima da Silva",
    role: "Mestrando em Educação",
    quote: "A importância do aprendizado de Libras na educação vai muito além da comunicação. É sobre respeito, inclusão e reconhecimento de uma cultura rica.",
    description: "Ensino-aprendizagem em Libras",
    videoUrl: null,
    hasVideo: true,
  },
  {
    id: 7,
    name: "Profa. Thaís Freitas",
    role: "Educadora",
    quote: "A Libras é essencial no processo educacional de alunos surdos. Ela permite que expressem seus pensamentos, participem ativamente e desenvolvam todo seu potencial.",
    description: "A importância da Libras no ensino e na aprendizagem de alunos surdos",
    videoUrl: null,
    hasVideo: true,
  },
  {
    id: 8,
    name: "Educadores e Especialistas",
    role: "Live Educacional",
    quote: "A inclusão da Libras no ambiente escolar transforma não só a vida dos alunos surdos, mas de toda a comunidade escolar, criando um ambiente mais acolhedor.",
    description: "Live - A Inclusão da Libras no ambiente escolar",
    videoUrl: null,
    hasVideo: true,
  },
];

export function CommunitySection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handlePlayVideo = (id: number, url: string | null) => {
    if (url) {
      window.open(url, '_blank');
    }
    setPlayingVideo(id);
  };

  return (
    <section id="comunidade" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Histórias Reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4">
            Vozes da Comunidade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos de pessoas surdas, intérpretes e educadores que vivem e
            constroem a história da Libras todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card-hover transition-all duration-300"
            >
              {testimonial.hasVideo && (
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                  {/* Thumbnail placeholder com ícone */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/40 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                      <span className="text-xs text-muted-foreground">Vídeo em Libras</span>
                    </div>
                  </div>
                  
                  {/* Play button */}
                  <button 
                    onClick={() => handlePlayVideo(testimonial.id, testimonial.videoUrl)}
                    className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group-hover:shadow-xl"
                  >
                    <Play className="w-7 h-7 text-primary-foreground ml-1" />
                  </button>
                  
                  {/* Badge de vídeo em Libras */}
                  <span className="absolute bottom-3 right-3 px-3 py-1 bg-foreground/70 text-background text-xs rounded-full flex items-center gap-1">
                    {testimonial.videoUrl ? (
                      <>
                        <ExternalLink className="w-3 h-3" />
                        Assistir
                      </>
                    ) : (
                      "Vídeo em Libras"
                    )}
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <Quote className="w-8 h-8 text-secondary/50 mb-4" />
                <p className="text-sm font-medium text-primary mb-2">
                  {testimonial.description}
                </p>
                <p className="text-foreground mb-6 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-heading text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading text-foreground text-sm">
                      {testimonial.name}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Quer compartilhar sua história? Entre em contato conosco!
          </p>
          <a 
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Enviar Depoimento
          </a>
        </div>
      </div>
    </section>
  );
}
