import { Lightbulb, History, Globe, Heart, Sparkles, BookMarked, Hand, Users, Palette, MapPin } from "lucide-react";

const curiosities = [
  {
    icon: Globe,
    title: "Libras Não é Universal",
    fact: "Cada país tem sua própria língua de sinais! A Libras tem influências da Língua de Sinais Francesa, mas é única, com variações regionais no Brasil - como 'acentos' diferentes entre Norte e Sul.",
  },
  {
    icon: Heart,
    title: "Expressão Facial é Gramática",
    fact: "Em Libras, as expressões faciais não são apenas emoção - elas fazem parte da gramática e podem mudar o significado da frase. É uma língua espaço-visual completa!",
  },
  {
    icon: Hand,
    title: "5 Parâmetros Linguísticos",
    fact: "Os sinais são formados por 5 elementos: configuração de mão, localização, movimento, orientação e expressão não manual (facial/corpo).",
  },
  {
    icon: Users,
    title: "Batismo de Nomes",
    fact: "Na cultura surda, surdos criam 'nomes em sinais' únicos para pessoas, baseados em características físicas ou personalidade. É um ritual cultural feito apenas por surdos!",
  },
  {
    icon: History,
    title: "Congresso de Milão (1880)",
    fact: "Por mais de 100 anos, línguas de sinais foram proibidas nas escolas após este congresso. Apenas em 2010 houve um repúdio formal a essas resoluções.",
  },
  {
    icon: MapPin,
    title: "Martha's Vineyard",
    fact: "Nos EUA (séculos XVII-XX), até 1 em 4 habitantes de algumas vilas era surdo. Todos usavam língua de sinais, criando uma sociedade bilíngue onde a surdez não era estigma.",
  },
  {
    icon: BookMarked,
    title: "Primeiro Dicionário (1875)",
    fact: "Flausino José da Gama, ex-aluno do INES, publicou a 'Iconografia dos Signaes dos Surdos-Mudos', o primeiro dicionário de sinais do Brasil.",
  },
  {
    icon: Sparkles,
    title: "Deaf Pride",
    fact: "Muitos surdos veem a surdez não como deficiência, mas como diferença cultural e linguística. Há poesia em sinais, teatro surdo e storytelling visual únicos!",
  },
  {
    icon: Palette,
    title: "Setembro Azul",
    fact: "O 'Setembro Azul' é o mês da visibilidade surda no Brasil, celebrando as conquistas da comunidade. O azul representa a cor símbolo da cultura surda.",
  },
  {
    icon: Lightbulb,
    title: "Lei de Libras (2002)",
    fact: "A Libras foi reconhecida oficialmente como língua em 24 de abril de 2002, após décadas de luta. Esta data é comemorada como Dia Nacional da Libras.",
  },
  {
    icon: Globe,
    title: "Deaflympics",
    fact: "As Olimpíadas Surdas existem desde 1924! É um evento global que celebra o esporte e a cultura surda, anterior até mesmo às Paralimpíadas.",
  },
  {
    icon: History,
    title: "Monges e Sinais",
    fact: "Na Antiguidade, monges beneditinos já desenvolviam sinais manuais devido ao voto de silêncio. Essa prática influenciou o desenvolvimento das línguas de sinais.",
  },
];

export function CuriositiesSection() {
  return (
    <section id="curiosidades" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-secondary/20 text-primary rounded-full text-sm font-medium mb-4">
            Descubra Mais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4">
            Sabia que...?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curiosidades fascinantes sobre a Libras, a cultura surda e a história
            que conecta gerações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {curiosities.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.fact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
