import { useState } from "react";
import { Lightbulb, History, Globe, Heart, Sparkles, BookMarked, Hand, Users, Palette, MapPin, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

const curiosities = [
  {
    icon: Globe,
    title: "Libras Não é Universal",
    shortFact: "Cada país tem sua própria língua de sinais!",
    fullFact: "Cada país tem sua própria língua de sinais! A Libras tem influências da Língua de Sinais Francesa, mas é única, com variações regionais no Brasil - como 'acentos' diferentes entre Norte e Sul. Existem mais de 300 línguas de sinais diferentes no mundo, cada uma com sua própria gramática e vocabulário.",
  },
  {
    icon: Heart,
    title: "Expressão Facial é Gramática",
    shortFact: "Em Libras, as expressões faciais fazem parte da gramática!",
    fullFact: "Em Libras, as expressões faciais não são apenas emoção - elas fazem parte da gramática e podem mudar completamente o significado da frase. Por exemplo, uma sobrancelha levantada pode indicar uma pergunta. É uma língua espaço-visual completa com estrutura gramatical própria!",
  },
  {
    icon: Hand,
    title: "5 Parâmetros Linguísticos",
    shortFact: "Os sinais são formados por 5 elementos distintos.",
    fullFact: "Os sinais são formados por 5 elementos fundamentais: configuração de mão (forma), localização (onde é feito), movimento (direção e velocidade), orientação (para onde a palma aponta) e expressão não manual (facial/corporal). A combinação desses elementos cria milhares de sinais diferentes.",
  },
  {
    icon: Users,
    title: "Batismo de Nomes",
    shortFact: "Surdos criam 'nomes em sinais' únicos para pessoas.",
    fullFact: "Na cultura surda, existe a tradição do 'batismo em sinais' - surdos criam 'nomes em sinais' únicos para pessoas, baseados em características físicas, personalidade ou até profissão. É um ritual cultural importante feito exclusivamente por pessoas surdas, sendo considerado uma honra receber seu 'sinal'.",
  },
  {
    icon: History,
    title: "Congresso de Milão (1880)",
    shortFact: "Línguas de sinais foram proibidas por mais de 100 anos.",
    fullFact: "Por mais de 100 anos, línguas de sinais foram proibidas nas escolas após o Congresso de Milão de 1880, que determinou que apenas o método oralista deveria ser usado na educação de surdos. Apenas em 2010, no 21º Congresso Internacional de Educação de Surdos, houve um repúdio formal a essas resoluções.",
  },
  {
    icon: MapPin,
    title: "Martha's Vineyard",
    shortFact: "Uma ilha onde todos usavam língua de sinais.",
    fullFact: "Nos Estados Unidos, entre os séculos XVII e XX, a ilha de Martha's Vineyard tinha uma população com alta incidência de surdez hereditária - até 1 em 4 habitantes era surdo em algumas vilas. Todos os moradores, ouvintes e surdos, usavam língua de sinais, criando uma sociedade verdadeiramente bilíngue onde a surdez não era estigmatizada.",
  },
  {
    icon: BookMarked,
    title: "Primeiro Dicionário (1875)",
    shortFact: "Flausino José da Gama publicou o primeiro dicionário de sinais brasileiro.",
    fullFact: "Flausino José da Gama, ex-aluno surdo do INES, publicou em 1875 a 'Iconografia dos Signaes dos Surdos-Mudos', o primeiro dicionário de sinais do Brasil. A obra contém ilustrações de sinais da época, sendo um documento histórico fundamental para entender a evolução da Libras ao longo de quase 150 anos.",
  },
  {
    icon: Sparkles,
    title: "Deaf Pride",
    shortFact: "Muitos surdos veem a surdez como diferença cultural.",
    fullFact: "Muitos surdos veem a surdez não como deficiência, mas como diferença cultural e linguística - é o conceito de 'Deaf Pride' (Orgulho Surdo). A cultura surda tem sua própria literatura, poesia em sinais, teatro surdo, storytelling visual, humor específico e tradições únicas que são celebradas mundialmente.",
  },
  {
    icon: Palette,
    title: "Setembro Azul",
    shortFact: "O mês de setembro é dedicado à visibilidade surda no Brasil.",
    fullFact: "O 'Setembro Azul' é o mês da visibilidade surda no Brasil, celebrando as conquistas da comunidade. O azul representa a cor símbolo da cultura surda internacionalmente. Em setembro são comemorados o Dia Nacional do Surdo (26/09), Dia Internacional da Língua de Sinais (23/09) e Dia Internacional do Surdo (último domingo).",
  },
  {
    icon: Lightbulb,
    title: "Lei de Libras (2002)",
    shortFact: "A Libras foi reconhecida oficialmente em 24 de abril de 2002.",
    fullFact: "A Libras foi reconhecida oficialmente como língua no Brasil pela Lei 10.436, sancionada em 24 de abril de 2002, após décadas de luta da comunidade surda. Esta data é comemorada como Dia Nacional da Libras. A lei foi regulamentada pelo Decreto 5.626/2005, que tornou obrigatório o ensino de Libras em cursos de licenciatura.",
  },
  {
    icon: Globe,
    title: "Deaflympics",
    shortFact: "As Olimpíadas Surdas existem desde 1924!",
    fullFact: "As Deaflympics (Olimpíadas Surdas) existem desde 1924, sendo anteriores até mesmo às Paralimpíadas (1960). É um evento global quadrienal que celebra o esporte e a cultura surda, com atletas de mais de 100 países. O Brasil participou pela primeira vez em 1993 e já conquistou diversas medalhas em modalidades como futsal, natação e atletismo.",
  },
  {
    icon: History,
    title: "Monges e Sinais",
    shortFact: "Monges beneditinos desenvolviam sinais devido ao voto de silêncio.",
    fullFact: "Na Antiguidade, monges beneditinos já desenvolviam sistemas de sinais manuais devido ao voto de silêncio que observavam em determinados horários e locais do mosteiro. Essa prática monástica influenciou o desenvolvimento das primeiras formas de comunicação gestual estruturada que depois evoluíram para as línguas de sinais.",
  },
];

export function CuriositiesSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {curiosities.map((item, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <Collapsible
                key={index}
                open={isOpen}
                onOpenChange={() => toggleItem(index)}
              >
                <div
                  className={`relative bg-card rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'border-primary/30 shadow-lg' 
                      : 'border-border hover:border-primary/20 hover:shadow-md'
                  }`}
                >
                  {/* Decorative Background */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 transition-colors ${
                    isOpen ? 'bg-primary/10' : 'bg-primary/5'
                  }`} />
                  
                  <CollapsibleTrigger asChild>
                    <button className="w-full p-6 text-left relative">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                          isOpen 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-heading text-foreground mb-1 pr-8">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {item.shortFact}
                          </p>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </button>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <div className="px-6 pb-6 pt-0">
                      <div className="pl-16 border-t border-border pt-4">
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {item.fullFact}
                        </p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </section>
  );
}
