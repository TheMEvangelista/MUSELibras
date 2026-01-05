import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { User, Globe, Flag, X, Calendar, Award, BookOpen } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

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

interface Character {
  name: string;
  role: string;
  description: string;
  fullBio: string;
  achievements: string[];
  period: string;
  image: string | null;
  nationality: string;
  country: string;
}

const characters: Character[] = [
  // Internacionais
  {
    name: "Pedro Ponce de León",
    role: "Primeiro Educador de Surdos",
    description: "Monge beneditino espanhol reconhecido como o primeiro educador de surdos da história.",
    fullBio: "Pedro Ponce de León (1520-1584) foi um monge beneditino espanhol do Mosteiro de San Salvador de Oña. Ele é considerado o primeiro professor de surdos da história, tendo desenvolvido métodos pioneiros de educação que provaram que pessoas surdas eram capazes de aprender. Seu trabalho desafiou a crença prevalente de que surdos eram incapazes de raciocínio ou aprendizado.",
    achievements: [
      "Primeiro educador de surdos documentado na história",
      "Provou que surdos possuíam capacidade intelectual igual aos ouvintes",
      "Desenvolveu métodos de ensino de leitura, escrita e fala",
      "Educou filhos de nobres espanhóis surdos"
    ],
    period: "1520-1584",
    image: pedroPonceLeon,
    nationality: "internacional",
    country: "Espanha",
  },
  {
    name: "Charles Michel de L'Épée",
    role: "Pai dos Surdos",
    description: "Fundou a primeira escola pública gratuita para surdos em Paris (1755).",
    fullBio: "Charles Michel de L'Épée (1712-1789) foi um clérigo francês que dedicou sua vida à educação de surdos. Em 1755, fundou a primeira escola pública gratuita para surdos do mundo em Paris. Ele sistematizou sinais existentes, criando os 'sinais metódicos', e foi reconhecido pela Assembleia Nacional Francesa como 'Benfeitor da Humanidade'. Sua escola existe até hoje como Institut National de Jeunes Sourds de Paris.",
    achievements: [
      "Fundou a primeira escola pública gratuita para surdos do mundo",
      "Criou os 'sinais metódicos' sistematizando a comunicação visual",
      "Reconhecido como 'Benfeitor da Humanidade' pela Assembleia Nacional Francesa",
      "Formou diversos educadores que espalharam seus métodos pelo mundo"
    ],
    period: "1712-1789",
    image: charlesLepee,
    nationality: "internacional",
    country: "França",
  },
  {
    name: "Thomas Hopkins Gallaudet",
    role: "Fundador da Educação de Surdos nos EUA",
    description: "Educador americano que trouxe a Língua de Sinais para os Estados Unidos.",
    fullBio: "Thomas Hopkins Gallaudet (1787-1851) foi um educador americano que viajou à Europa para aprender métodos de educação de surdos. Em Paris, conheceu Laurent Clerc e juntos fundaram a primeira escola para surdos dos Estados Unidos em 1817, a American School for the Deaf em Hartford, Connecticut. A Gallaudet University, única universidade do mundo dedicada exclusivamente a estudantes surdos, leva seu nome.",
    achievements: [
      "Fundou a primeira escola para surdos dos EUA (1817)",
      "Trouxe a Língua de Sinais Francesa para a América",
      "A Gallaudet University foi nomeada em sua homenagem",
      "Estabeleceu as bases da educação de surdos na América do Norte"
    ],
    period: "1787-1851",
    image: thomasGallaudet,
    nationality: "internacional",
    country: "Estados Unidos",
  },
  {
    name: "Laurent Clerc",
    role: "Primeiro Professor Surdo nos EUA",
    description: "Educador surdo francês fundamental na introdução da ASL nos Estados Unidos.",
    fullBio: "Laurent Clerc (1785-1869) foi um educador surdo francês que se tornou figura central na história da educação de surdos nos Estados Unidos. Estudante e depois professor na escola de L'Épée em Paris, viajou aos EUA com Gallaudet e ajudou a fundar a American School for the Deaf. Foi a primeira pessoa surda a discursar perante o Congresso Americano, defendendo os direitos dos surdos.",
    achievements: [
      "Primeiro professor surdo a atuar nos Estados Unidos",
      "Co-fundador da American School for the Deaf",
      "Primeira pessoa surda a discursar no Congresso Americano",
      "Fundamental na criação da ASL a partir da LSF"
    ],
    period: "1785-1869",
    image: laurentClerc,
    nationality: "internacional",
    country: "França / EUA",
  },
  {
    name: "Helen Keller",
    role: "Escritora e Ativista",
    description: "Ficou surda e cega na infância, tornou-se renomada escritora e ativista.",
    fullBio: "Helen Adams Keller (1880-1968) perdeu a visão e a audição aos 19 meses de idade devido a uma doença. Com a ajuda de sua professora Anne Sullivan, aprendeu a se comunicar e se tornou a primeira pessoa surdocega a obter um diploma universitário (Radcliffe College, 1904). Foi autora de 12 livros, palestrante internacional e ativista pelos direitos das pessoas com deficiência, mulheres e trabalhadores.",
    achievements: [
      "Primeira pessoa surdocega a obter diploma universitário",
      "Autora de 12 livros, incluindo 'A História da Minha Vida'",
      "Ativista pelos direitos de pessoas com deficiência",
      "Recebeu a Medalha Presidencial da Liberdade em 1964"
    ],
    period: "1880-1968",
    image: helenKeller,
    nationality: "internacional",
    country: "Estados Unidos",
  },
  {
    name: "Marlee Matlin",
    role: "Atriz e Ativista",
    description: "Primeira atriz surda a ganhar um Oscar, pelo filme 'Filhos do Silêncio'.",
    fullBio: "Marlee Beth Matlin (1965-presente) é uma atriz americana surda desde os 18 meses de idade. Em 1987, aos 21 anos, tornou-se a mais jovem vencedora do Oscar de Melhor Atriz e a primeira pessoa surda a ganhar um Oscar, pelo filme 'Filhos do Silêncio' (Children of a Lesser God). É ativista pelos direitos dos surdos e pela representatividade na mídia.",
    achievements: [
      "Primeira pessoa surda a ganhar um Oscar (1987)",
      "Mais jovem vencedora do Oscar de Melhor Atriz",
      "Ativista pela representatividade surda em Hollywood",
      "Estrela em séries como 'The West Wing' e 'Quantico'"
    ],
    period: "1965-presente",
    image: marleeMatlin,
    nationality: "internacional",
    country: "Estados Unidos",
  },
  {
    name: "Juan Pablo Bonet",
    role: "Pioneiro na Educação de Surdos",
    description: "Publicou o primeiro livro sobre educação de surdos em 1620.",
    fullBio: "Juan Pablo Bonet (1573-1633) foi um padre e educador espanhol que publicou em 1620 'Reducción de las letras y arte para enseñar a hablar a los mudos', o primeiro livro sobre educação de surdos da história. Desenvolveu um método de ensino usando o alfabeto manual (dactilologia), que influenciou educadores em toda a Europa.",
    achievements: [
      "Autor do primeiro livro sobre educação de surdos (1620)",
      "Desenvolveu o alfabeto manual (dactilologia)",
      "Influenciou educadores de surdos em toda a Europa",
      "Pioneiro no método oral combinado com sinais"
    ],
    period: "1573-1633",
    image: juanPabloBonet,
    nationality: "internacional",
    country: "Espanha",
  },
  // Brasileiros
  {
    name: "Ernest Huet",
    role: "Fundador do INES",
    description: "Professor surdo francês que fundou o Imperial Instituto de Surdos-Mudos.",
    fullBio: "Eduard Huet (também conhecido como Ernest Huet, 1820-1882) foi um professor surdo francês convidado por Dom Pedro II para fundar a primeira escola para surdos do Brasil. Em 26 de setembro de 1857, fundou o Imperial Instituto de Surdos-Mudos (atual INES - Instituto Nacional de Educação de Surdos) no Rio de Janeiro. Trouxe a Língua de Sinais Francesa que, ao se misturar com sinais locais, originou a Libras.",
    achievements: [
      "Fundou o Imperial Instituto de Surdos-Mudos (1857)",
      "Introduziu a Língua de Sinais Francesa no Brasil",
      "Contribuiu para a origem da Libras",
      "26 de setembro: Dia Nacional do Surdo em sua homenagem"
    ],
    period: "1820-1882",
    image: ernestHuet,
    nationality: "brasileiro",
    country: "França / Brasil",
  },
  {
    name: "Flausino José da Gama",
    role: "Autor do Primeiro Dicionário",
    description: "Ex-aluno do INES, publicou a 'Iconografia dos Sinais dos Surdos-Mudos'.",
    fullBio: "Flausino José da Gama foi um ex-aluno surdo do Imperial Instituto de Surdos-Mudos que em 1875 publicou a 'Iconografia dos Signaes dos Surdos-Mudos', o primeiro dicionário de língua de sinais do Brasil. A obra contém ilustrações de sinais usados na época, sendo um documento histórico fundamental para o estudo da evolução da Libras.",
    achievements: [
      "Publicou o primeiro dicionário de sinais do Brasil (1875)",
      "A 'Iconografia' é documento histórico fundamental",
      "Primeiro surdo brasileiro a publicar obra sobre sinais",
      "Registrou sinais que mostram a evolução da Libras"
    ],
    period: "Séc. XIX",
    image: null,
    nationality: "brasileiro",
    country: "Brasil",
  },
  {
    name: "Lucinda Ferreira Brito",
    role: "Linguista Pioneira",
    description: "Uma das principais pioneiras no estudo e formalização da Libras.",
    fullBio: "Lucinda Ferreira Brito é uma linguista brasileira considerada uma das principais pioneiras no estudo científico da Libras. Autora de 'Por uma Gramática de Línguas de Sinais' (1995), foi fundamental na descrição linguística da Libras e na luta por seu reconhecimento como língua. Foi peça-chave na oficialização da sigla 'LIBRAS' em 1993 e na Lei 10.436/2002.",
    achievements: [
      "Autora de 'Por uma Gramática de Línguas de Sinais' (1995)",
      "Fundamental na oficialização da sigla LIBRAS (1993)",
      "Contribuiu para a Lei de Libras (10.436/2002)",
      "Pioneira na descrição linguística científica da Libras"
    ],
    period: "Contemporânea",
    image: lucindaBrito,
    nationality: "brasileiro",
    country: "Brasil",
  },
];

function CharacterModal({ character, isOpen, onClose }: { character: Character | null; isOpen: boolean; onClose: () => void }) {
  if (!character) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{character.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header com imagem */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/30 mx-auto sm:mx-0">
              {character.image ? (
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-16 h-16 text-primary" />
                </div>
              )}
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-heading text-foreground mb-1">{character.name}</h2>
              <p className="text-secondary font-medium mb-2">{character.role}</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                  <Calendar className="w-3 h-3" />
                  {character.period}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/20 text-foreground rounded-full text-xs">
                  <Globe className="w-3 h-3" />
                  {character.country}
                </span>
              </div>
            </div>
          </div>

          {/* Biografia */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-heading text-foreground mb-3">
              <BookOpen className="w-5 h-5 text-primary" />
              Biografia
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {character.fullBio}
            </p>
          </div>

          {/* Conquistas */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-heading text-foreground mb-3">
              <Award className="w-5 h-5 text-primary" />
              Principais Conquistas
            </h3>
            <ul className="space-y-2">
              {character.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                  </span>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function CharactersSection() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  
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
                className="group overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCharacter(character)}
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
                    <button className="mt-4 text-primary font-medium text-sm hover:underline">
                      Ver Perfil Completo →
                    </button>
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
                className="group overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCharacter(character)}
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
                    <button className="mt-4 text-primary font-medium text-sm hover:underline">
                      Ver Perfil Completo →
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Perfil */}
      <CharacterModal 
        character={selectedCharacter} 
        isOpen={!!selectedCharacter} 
        onClose={() => setSelectedCharacter(null)} 
      />
    </section>
  );
}
