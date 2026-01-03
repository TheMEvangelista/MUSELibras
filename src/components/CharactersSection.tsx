import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { User, Globe, Flag } from "lucide-react";

// Importar imagens dos personagens
import pedroPonceLeon from "@/assets/gallery/pedro-ponce-leon.png";
import charlesLepee from "@/assets/gallery/charles-lepee.png";
import thomasGallaudet from "@/assets/gallery/thomas-gallaudet.png";
import laurentClerc from "@/assets/gallery/laurent-clerc.png";
import helenKeller from "@/assets/gallery/helen-keller.png";
import marleeMatlin from "@/assets/gallery/marlee-matlin.png";
import juanPabloBonet from "@/assets/gallery/juan-pablo-bonet.png";
import ernestHuet from "@/assets/gallery/ernest-huet.png";
import lucindaBrito from "@/assets/gallery/lucinda-brito.png";

const characters = [
  // Internacionais
  {
    name: "Pedro Ponce de León",
    role: "Primeiro Educador de Surdos",
    description: "Monge beneditino espanhol reconhecido como o primeiro educador de surdos da história. Provou que surdos possuíam a mesma capacidade intelectual que ouvintes.",
    period: "1520-1584",
    image: pedroPonceLeon,
    nationality: "internacional",
  },
  {
    name: "Charles Michel de L'Épée",
    role: "Pai dos Surdos",
    description: "Fundou a primeira escola pública gratuita para surdos em Paris (1755). Sistematizou sinais existentes criando os 'sinais metódicos' e foi reconhecido como 'Benfeitor da Humanidade'.",
    period: "1712-1789",
    image: charlesLepee,
    nationality: "internacional",
  },
  {
    name: "Thomas Hopkins Gallaudet",
    role: "Fundador da Educação de Surdos nos EUA",
    description: "Educador americano que trouxe a Língua de Sinais para os Estados Unidos. Fundou a primeira escola para surdos nos EUA em 1817 junto com Laurent Clerc.",
    period: "1787-1851",
    image: thomasGallaudet,
    nationality: "internacional",
  },
  {
    name: "Laurent Clerc",
    role: "Primeiro Professor Surdo nos EUA",
    description: "Educador surdo francês que foi fundamental na introdução da ASL nos Estados Unidos. Foi a primeira pessoa surda a discursar perante o Congresso Americano.",
    period: "1785-1869",
    image: laurentClerc,
    nationality: "internacional",
  },
  {
    name: "Helen Keller",
    role: "Escritora e Ativista",
    description: "Ficou surda e cega na infância, mas se tornou renomada escritora, palestrante e ativista. Defensora dos direitos das pessoas com deficiência e inspiração mundial.",
    period: "1880-1968",
    image: helenKeller,
    nationality: "internacional",
  },
  {
    name: "Marlee Matlin",
    role: "Atriz e Ativista",
    description: "Primeira atriz surda a ganhar um Oscar, pelo filme 'Filhos do Silêncio' em 1986. Defensora dos direitos das pessoas surdas em Hollywood.",
    period: "1965-presente",
    image: marleeMatlin,
    nationality: "internacional",
  },
  {
    name: "Juan Pablo Bonet",
    role: "Pioneiro na Educação de Surdos",
    description: "Publicou o primeiro livro sobre educação de surdos em 1620. Desenvolveu método de ensino usando alfabeto manual (dactilologia).",
    period: "1573-1633",
    image: juanPabloBonet,
    nationality: "internacional",
  },
  // Nacionais
  {
    name: "Ernest Huet",
    role: "Fundador do INES",
    description: "Professor surdo francês convidado por Dom Pedro II. Fundou em 1857 o Imperial Instituto de Surdos-Mudos (atual INES), introduzindo a LSF e moldando a Libras.",
    period: "1820-1882",
    image: ernestHuet,
    nationality: "brasileiro",
  },
  {
    name: "Flausino José da Gama",
    role: "Autor do Primeiro Dicionário",
    description: "Ex-aluno do INES, publicou em 1875 a 'Iconografia dos Sinais dos Surdos-Mudos', o primeiro dicionário de sinais brasileiro.",
    period: "Séc. XIX",
    image: null,
    nationality: "brasileiro",
  },
  {
    name: "Lucinda Ferreira Brito",
    role: "Linguista Pioneira",
    description: "Uma das principais pioneiras no estudo e formalização da Libras. Autora de 'Por uma Gramática de Línguas de Sinais' (1995), foi peça-chave na oficialização da sigla LIBRAS em 1993.",
    period: "Contemporânea",
    image: lucindaBrito,
    nationality: "brasileiro",
  },
];

export function CharactersSection() {
  const internacionais = characters.filter(c => c.nationality === "internacional");
  const brasileiros = characters.filter(c => c.nationality === "brasileiro");

  return (
    <section id="personagens" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Figuras Importantes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4">
            Personagens da História
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os pioneiros, educadores, ativistas e pesquisadores que
            moldaram a história da Libras e da comunidade surda.
          </p>
        </div>

        {/* Personagens Internacionais */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-heading text-foreground">Personagens Internacionais</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {internacionais.map((character, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:-translate-y-2 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center overflow-hidden">
                    {character.image ? (
                      <img 
                        src={character.image} 
                        alt={character.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-background/80 flex items-center justify-center border-4 border-secondary group-hover:scale-110 transition-transform duration-300">
                        <User className="w-12 h-12 text-primary" />
                      </div>
                    )}
                    <span className="absolute top-4 right-4 px-3 py-1 bg-background/90 text-xs font-medium text-primary rounded-full">
                      {character.period}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading text-foreground mb-1">
                      {character.name}
                    </h3>
                    <span className="text-sm text-secondary font-medium">
                      {character.role}
                    </span>
                    <p className="mt-3 text-muted-foreground text-sm line-clamp-3">
                      {character.description}
                    </p>
                    <Button variant="link" className="mt-4 px-0">
                      Ver Perfil Completo →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personagens Brasileiros */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Flag className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-heading text-foreground">Personagens Brasileiros</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brasileiros.map((character, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:-translate-y-2 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center overflow-hidden">
                    {character.image ? (
                      <img 
                        src={character.image} 
                        alt={character.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-background/80 flex items-center justify-center border-4 border-secondary group-hover:scale-110 transition-transform duration-300">
                        <User className="w-12 h-12 text-primary" />
                      </div>
                    )}
                    <span className="absolute top-4 right-4 px-3 py-1 bg-background/90 text-xs font-medium text-primary rounded-full">
                      {character.period}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading text-foreground mb-1">
                      {character.name}
                    </h3>
                    <span className="text-sm text-secondary font-medium">
                      {character.role}
                    </span>
                    <p className="mt-3 text-muted-foreground text-sm line-clamp-3">
                      {character.description}
                    </p>
                    <Button variant="link" className="mt-4 px-0">
                      Ver Perfil Completo →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
