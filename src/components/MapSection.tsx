import { useState } from "react";
import { MapPin, School, Users, Megaphone, Building2 } from "lucide-react";

// Dados dos estados com informações históricas
const statesData: Record<string, { 
  name: string; 
  coordinates: { x: number; y: number };
  highlights: { type: string; title: string; description: string }[] 
}> = {
  RJ: {
    name: "Rio de Janeiro",
    coordinates: { x: 78, y: 68 },
    highlights: [
      { type: "escola", title: "INES (1857)", description: "Instituto Nacional de Educação de Surdos - Primeira escola para surdos da América Latina, fundada por Ernest Huet e Dom Pedro II" },
      { type: "centro", title: "FENEIS-RJ", description: "Sede da Federação Nacional de Educação e Integração dos Surdos, fundada em 1987" },
      { type: "ativismo", title: "Berço da Libras", description: "Local onde a Língua de Sinais Francesa se misturou com sinais locais, originando a Libras" },
    ],
  },
  SP: {
    name: "São Paulo",
    coordinates: { x: 65, y: 65 },
    highlights: [
      { type: "escola", title: "Instituto Santa Teresinha", description: "Importante centro de educação bilíngue para surdos, com longa tradição no ensino" },
      { type: "ativismo", title: "Movimentos dos anos 90", description: "Berço de grandes mobilizações pela oficialização da Libras" },
      { type: "centro", title: "FENEIS-SP", description: "Regional importante com forte atuação na defesa dos direitos dos surdos" },
    ],
  },
  MG: {
    name: "Minas Gerais",
    coordinates: { x: 67, y: 58 },
    highlights: [
      { type: "escola", title: "Escola Estadual para Surdos", description: "Uma das primeiras escolas estaduais especializadas na educação de surdos" },
      { type: "centro", title: "FENEIS-MG", description: "Regional importante na luta por direitos e inclusão da comunidade surda" },
    ],
  },
  RS: {
    name: "Rio Grande do Sul",
    coordinates: { x: 55, y: 85 },
    highlights: [
      { type: "escola", title: "Escola Concórdia", description: "Tradição na educação de surdos no Sul do Brasil" },
      { type: "ativismo", title: "Movimento gaúcho", description: "Forte atuação política da comunidade surda na região Sul" },
    ],
  },
  BA: {
    name: "Bahia",
    coordinates: { x: 78, y: 42 },
    highlights: [
      { type: "escola", title: "ICES", description: "Instituto Central de Educação de Surdos - referência na educação de surdos no Nordeste" },
      { type: "centro", title: "CESBA", description: "Centro de Surdos da Bahia - importante centro de referência para a comunidade surda" },
      { type: "centro", title: "FENEIS-BA", description: "Centro de referência no Nordeste para defesa dos direitos dos surdos" },
    ],
  },
  PR: {
    name: "Paraná",
    coordinates: { x: 58, y: 72 },
    highlights: [
      { type: "escola", title: "NEL - UFPR (2016)", description: "Núcleo de Ensino de Libras da UFPR, apoiando a difusão da língua conforme a Lei 10.436/2002" },
      { type: "centro", title: "FENEIS-PR", description: "Atuação regional na formação e capacitação de intérpretes" },
    ],
  },
  PE: {
    name: "Pernambuco",
    coordinates: { x: 88, y: 32 },
    highlights: [
      { type: "escola", title: "Escola de Surdos de Pernambuco", description: "Uma das primeiras escolas para surdos do Nordeste" },
      { type: "ativismo", title: "Movimento Nordestino", description: "Forte presença da comunidade surda na luta por direitos" },
    ],
  },
  CE: {
    name: "Ceará",
    coordinates: { x: 85, y: 25 },
    highlights: [
      { type: "escola", title: "Instituto Cearense de Educação de Surdos", description: "Importante instituição de educação de surdos no Nordeste" },
      { type: "centro", title: "Associação de Surdos do Ceará", description: "Atuação na defesa dos direitos e cultura surda" },
    ],
  },
  SC: {
    name: "Santa Catarina",
    coordinates: { x: 58, y: 78 },
    highlights: [
      { type: "escola", title: "UFSC - Letras Libras", description: "Pioneira no curso superior de Letras Libras no Brasil" },
      { type: "centro", title: "Grupo de Pesquisas em Estudos Surdos", description: "Referência em pesquisas acadêmicas sobre Libras e cultura surda" },
    ],
  },
  DF: {
    name: "Distrito Federal",
    coordinates: { x: 62, y: 52 },
    highlights: [
      { type: "instituicao", title: "Sede do Governo Federal", description: "Local de sanção da Lei 10.436/2002 e outras legislações importantes" },
      { type: "escola", title: "Escola Bilíngue Libras e Português", description: "Primeira escola pública bilíngue do DF" },
    ],
  },
  AM: {
    name: "Amazonas",
    coordinates: { x: 30, y: 20 },
    highlights: [
      { type: "escola", title: "Escola Estadual para Surdos", description: "Importante centro de educação de surdos na região Norte" },
      { type: "ativismo", title: "Comunidade Surda Amazônica", description: "Presença de variações regionais únicas da Libras" },
    ],
  },
  PA: {
    name: "Pará",
    coordinates: { x: 52, y: 18 },
    highlights: [
      { type: "escola", title: "UEPA - Curso de Libras", description: "Formação de professores e intérpretes na região Norte" },
      { type: "centro", title: "Associação de Surdos do Pará", description: "Defesa dos direitos da comunidade surda paraense" },
    ],
  },
  GO: {
    name: "Goiás",
    coordinates: { x: 55, y: 52 },
    highlights: [
      { type: "escola", title: "Centro de Capacitação de Profissionais da Educação de Surdos", description: "Formação de educadores para atendimento a alunos surdos" },
      { type: "centro", title: "FENEIS-GO", description: "Atuação regional na promoção da cultura e língua de sinais" },
    ],
  },
};

const iconMap: Record<string, typeof School> = {
  escola: School,
  centro: Users,
  ativismo: Megaphone,
  instituicao: Building2,
};

// Componente do mapa do Brasil em SVG
function BrazilMap({ selectedState, onStateClick }: { selectedState: string | null; onStateClick: (state: string) => void }) {
  return (
    <div className="relative w-full h-full">
      {/* Mapa simplificado do Brasil */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Fundo do mapa */}
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Contorno simplificado do Brasil */}
        <path
          d="M25,5 L85,5 Q95,15 90,25 L92,40 L88,55 L78,75 L65,90 L55,95 L40,90 L30,75 L25,60 L20,40 L15,25 Q15,10 25,5 Z"
          fill="url(#mapGradient)"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />
        
        {/* Pontos dos estados */}
        {Object.entries(statesData).map(([code, data]) => (
          <g key={code} onClick={() => onStateClick(code)} className="cursor-pointer">
            {/* Círculo de pulso para estado selecionado */}
            {selectedState === code && (
              <circle
                cx={data.coordinates.x}
                cy={data.coordinates.y}
                r="6"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                className="animate-ping"
              />
            )}
            {/* Ponto do estado */}
            <circle
              cx={data.coordinates.x}
              cy={data.coordinates.y}
              r={selectedState === code ? "4" : "3"}
              fill={selectedState === code ? "hsl(var(--primary))" : "hsl(var(--secondary))"}
              className="transition-all duration-300 hover:r-5"
            />
            {/* Label do estado */}
            <text
              x={data.coordinates.x}
              y={data.coordinates.y + 8}
              textAnchor="middle"
              fontSize="3"
              fill={selectedState === code ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
              fontWeight={selectedState === code ? "bold" : "normal"}
              className="transition-all duration-300"
            >
              {code}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function MapSection() {
  const [selectedState, setSelectedState] = useState<string | null>("RJ");

  return (
    <section id="mapa" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-secondary/20 text-primary rounded-full text-sm font-medium mb-4">
            Geografia da História
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4">
            Mapa da Libras no Brasil
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore as primeiras escolas, centros de referência e pontos de ativismo
            da comunidade surda em cada região do país.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Mapa do Brasil */}
          <div className="relative bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 aspect-square lg:aspect-auto lg:h-[550px]">
            <BrazilMap 
              selectedState={selectedState} 
              onStateClick={setSelectedState}
            />
            
            {/* Legenda */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-2 font-medium">Legenda:</p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <div className="flex items-center gap-1">
                    <School className="w-3 h-3 text-primary" />
                    <span>Escolas</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-primary" />
                    <span>Centros</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Megaphone className="w-3 h-3 text-primary" />
                    <span>Ativismo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informações do Estado */}
          <div>
            {selectedState && statesData[selectedState] ? (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-heading text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  {statesData[selectedState].name}
                </h3>
                
                <div className="space-y-4">
                  {statesData[selectedState].highlights.map((item, index) => {
                    const Icon = iconMap[item.type] || MapPin;
                    return (
                      <div
                        key={index}
                        className="flex gap-4 p-5 bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-heading text-foreground mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Lista de estados para navegação rápida */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Outros estados:</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(statesData)
                      .filter(([code]) => code !== selectedState)
                      .map(([code, data]) => (
                        <button
                          key={code}
                          onClick={() => setSelectedState(code)}
                          className="px-3 py-1 text-xs bg-muted hover:bg-primary/10 hover:text-primary rounded-full transition-colors"
                        >
                          {code} - {data.name}
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <p>Selecione um estado no mapa</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
