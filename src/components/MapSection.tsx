import { useState } from "react";
import { MapPin, School, Users, Megaphone, Building2 } from "lucide-react";
import BrazilMapSVG from "@/assets/brazil-map.svg";

// Dados dos estados com informações históricas
const statesData: Record<
  string,
  {
    name: string;
    color: string;
    highlights: { type: string; title: string; description: string }[];
  }
> = {
  RJ: {
    name: "Rio de Janeiro",
    color: "hsl(210, 100%, 45%)",
    highlights: [
      {
        type: "escola",
        title: "INES (1857)",
        description:
          "Instituto Nacional de Educação de Surdos - Primeira escola para surdos da América Latina, fundada por Ernest Huet e Dom Pedro II",
      },
      {
        type: "centro",
        title: "FENEIS-RJ",
        description:
          "Sede da Federação Nacional de Educação e Integração dos Surdos, fundada em 1987",
      },
      {
        type: "ativismo",
        title: "Berço da Libras",
        description:
          "Local onde a Língua de Sinais Francesa se misturou com sinais locais, originando a Libras",
      },
    ],
  },
  SP: {
    name: "São Paulo",
    color: "hsl(280, 70%, 50%)",
    highlights: [
      {
        type: "escola",
        title: "Instituto Santa Teresinha",
        description:
          "Importante centro de educação bilíngue para surdos, com longa tradição no ensino",
      },
      {
        type: "ativismo",
        title: "Movimentos dos anos 90",
        description:
          "Berço de grandes mobilizações pela oficialização da Libras",
      },
      {
        type: "centro",
        title: "FENEIS-SP",
        description:
          "Regional importante com forte atuação na defesa dos direitos dos surdos",
      },
    ],
  },
  MG: {
    name: "Minas Gerais",
    color: "hsl(35, 90%, 55%)",
    highlights: [
      {
        type: "escola",
        title: "Escola Estadual para Surdos",
        description:
          "Uma das primeiras escolas estaduais especializadas na educação de surdos",
      },
      {
        type: "centro",
        title: "FENEIS-MG",
        description:
          "Regional importante na luta por direitos e inclusão da comunidade surda",
      },
    ],
  },
  RS: {
    name: "Rio Grande do Sul",
    color: "hsl(160, 60%, 45%)",
    highlights: [
      {
        type: "escola",
        title: "Escola Concórdia",
        description: "Tradição na educação de surdos no Sul do Brasil",
      },
      {
        type: "ativismo",
        title: "Movimento gaúcho",
        description: "Forte atuação política da comunidade surda na região Sul",
      },
    ],
  },
  BA: {
    name: "Bahia",
    color: "hsl(340, 70%, 50%)",
    highlights: [
      {
        type: "escola",
        title: "ICES",
        description:
          "Instituto Central de Educação de Surdos - referência na educação de surdos no Nordeste",
      },
      {
        type: "centro",
        title: "CESBA",
        description:
          "Centro de Surdos da Bahia - importante centro de referência para a comunidade surda",
      },
      {
        type: "centro",
        title: "FENEIS-BA",
        description:
          "Centro de referência no Nordeste para defesa dos direitos dos surdos",
      },
    ],
  },
  PR: {
    name: "Paraná",
    color: "hsl(190, 70%, 45%)",
    highlights: [
      {
        type: "escola",
        title: "NEL - UFPR (2016)",
        description:
          "Núcleo de Ensino de Libras da UFPR, apoiando a difusão da língua conforme a Lei 10.436/2002",
      },
      {
        type: "centro",
        title: "FENEIS-PR",
        description:
          "Atuação regional na formação e capacitação de intérpretes",
      },
    ],
  },
  PE: {
    name: "Pernambuco",
    color: "hsl(45, 90%, 50%)",
    highlights: [
      {
        type: "escola",
        title: "Escola de Surdos de Pernambuco",
        description: "Uma das primeiras escolas para surdos do Nordeste",
      },
      {
        type: "ativismo",
        title: "Movimento Nordestino",
        description: "Forte presença da comunidade surda na luta por direitos",
      },
    ],
  },
  CE: {
    name: "Ceará",
    color: "hsl(15, 80%, 55%)",
    highlights: [
      {
        type: "escola",
        title: "Instituto Cearense de Educação de Surdos",
        description: "Importante instituição de educação de surdos no Nordeste",
      },
      {
        type: "centro",
        title: "Associação de Surdos do Ceará",
        description: "Atuação na defesa dos direitos e cultura surda",
      },
    ],
  },
  SC: {
    name: "Santa Catarina",
    color: "hsl(250, 60%, 55%)",
    highlights: [
      {
        type: "escola",
        title: "UFSC - Letras Libras",
        description: "Pioneira no curso superior de Letras Libras no Brasil",
      },
      {
        type: "centro",
        title: "Grupo de Pesquisas em Estudos Surdos",
        description:
          "Referência em pesquisas acadêmicas sobre Libras e cultura surda",
      },
    ],
  },
  DF: {
    name: "Distrito Federal",
    color: "hsl(120, 50%, 45%)",
    highlights: [
      {
        type: "instituicao",
        title: "Sede do Governo Federal",
        description:
          "Local de sanção da Lei 10.436/2002 e outras legislações importantes",
      },
      {
        type: "escola",
        title: "Escola Bilíngue Libras e Português",
        description: "Primeira escola pública bilíngue do DF",
      },
    ],
  },
  AM: {
    name: "Amazonas",
    color: "hsl(170, 60%, 40%)",
    highlights: [
      {
        type: "escola",
        title: "Escola Estadual para Surdos",
        description: "Importante centro de educação de surdos na região Norte",
      },
      {
        type: "ativismo",
        title: "Comunidade Surda Amazônica",
        description: "Presença de variações regionais únicas da Libras",
      },
    ],
  },
  PA: {
    name: "Pará",
    color: "hsl(200, 70%, 50%)",
    highlights: [
      {
        type: "escola",
        title: "UEPA - Curso de Libras",
        description: "Formação de professores e intérpretes na região Norte",
      },
      {
        type: "centro",
        title: "Associação de Surdos do Pará",
        description: "Defesa dos direitos da comunidade surda paraense",
      },
    ],
  },
  GO: {
    name: "Goiás",
    color: "hsl(60, 70%, 45%)",
    highlights: [
      {
        type: "escola",
        title: "Centro de Capacitação de Profissionais da Educação de Surdos",
        description: "Formação de educadores para atendimento a alunos surdos",
      },
      {
        type: "centro",
        title: "FENEIS-GO",
        description:
          "Atuação regional na promoção da cultura e língua de sinais",
      },
    ],
  },
};

const iconMap: Record<string, typeof School> = {
  escola: School,
  centro: Users,
  ativismo: Megaphone,
  instituicao: Building2,
};

// Posições dos marcadores para cada estado (baseado no SVG com viewBox 0 0 821 744)
const stateMarkers: Record<string, { x: number; y: number }> = {
  AM: { x: 200, y: 180 },
  PA: { x: 400, y: 170 },
  CE: { x: 630, y: 170 },
  PE: { x: 650, y: 245 },
  BA: { x: 620, y: 350 },
  DF: { x: 480, y: 380 },
  GO: { x: 430, y: 400 },
  MG: { x: 540, y: 440 },
  RJ: { x: 570, y: 510 },
  SP: { x: 480, y: 530 },
  PR: { x: 400, y: 560 },
  SC: { x: 450, y: 610 },
  RS: { x: 380, y: 660 },
};

export function MapSection() {
  const [selectedState, setSelectedState] = useState<string | null>("RJ");
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (stateCode: string) => {
    if (stateCode in statesData) {
      setSelectedState(stateCode);
    }
  };

  return (
    <section
      id="mapa"
      className="section-padding bg-gradient-to-b from-muted to-background"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-secondary/20 text-primary rounded-full text-sm font-medium mb-4">
            Geografia da História
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4">
            Mapa da Libras no Brasil
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore as primeiras escolas, centros de referência e pontos de
            ativismo da comunidade surda em cada região do país.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
          {/* Mapa do Brasil - Com SVG fornecido */}
          <div className="relative bg-gradient-to-br from-background via-muted/50 to-background rounded-3xl p-6 shadow-elegant border border-border/50">
            <div className="relative">
              {/* Mapa SVG base */}
              <img
                src={BrazilMapSVG}
                alt="Mapa do Brasil"
                className="w-full h-auto max-h-[600px] object-contain"
                style={{
                  filter: "hue-rotate(-10deg) saturate(1.2)",
                }}
              />

              {/* Overlay com marcadores interativos */}
              <svg
                viewBox="0 0 821 744"
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: "none" }}
              >
                <defs>
                  {/* Gradientes para cada estado */}
                  {Object.entries(statesData).map(([code, data]) => (
                    <radialGradient
                      key={`grad-${code}`}
                      id={`marker-gradient-${code}`}
                    >
                      <stop
                        offset="0%"
                        stopColor={data.color}
                        stopOpacity="1"
                      />
                      <stop
                        offset="100%"
                        stopColor={data.color}
                        stopOpacity="0.7"
                      />
                    </radialGradient>
                  ))}

                  {/* Filtro de brilho para selecionados */}
                  <filter
                    id="marker-glow"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Filtro de sombra */}
                  <filter
                    id="marker-shadow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feDropShadow
                      dx="1"
                      dy="2"
                      stdDeviation="2"
                      floodOpacity="0.3"
                    />
                  </filter>
                </defs>

                {/* Marcadores dos estados */}
                {Object.entries(stateMarkers).map(([code, pos]) => {
                  const stateData = statesData[code];
                  const isSelected = selectedState === code;
                  const isHovered = hoveredState === code;
                  const radius = isSelected ? 22 : isHovered ? 18 : 14;

                  return (
                    <g
                      key={code}
                      style={{ pointerEvents: "auto", cursor: "pointer" }}
                      onClick={() => handleStateClick(code)}
                      onMouseEnter={() => setHoveredState(code)}
                      onMouseLeave={() => setHoveredState(null)}
                    >
                      {/* Anel de pulso para estado selecionado */}
                      {isSelected && (
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={radius + 8}
                          fill="none"
                          stroke={stateData.color}
                          strokeWidth="2"
                          opacity="0.4"
                          className="animate-ping"
                          style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
                        />
                      )}

                      {/* Círculo principal */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={radius}
                        fill={`url(#marker-gradient-${code})`}
                        stroke="hsl(var(--background))"
                        strokeWidth={isSelected ? 4 : 2}
                        filter={
                          isSelected
                            ? "url(#marker-glow)"
                            : "url(#marker-shadow)"
                        }
                        className="transition-all duration-300"
                      />

                      {/* Sigla do estado */}
                      <text
                        x={pos.x}
                        y={pos.y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={isSelected ? "12" : "10"}
                        fontWeight="bold"
                        fill="white"
                        className="pointer-events-none select-none"
                        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
                      >
                        {code}
                      </text>

                      {/* Indicador de quantidade de destaques */}
                      <circle
                        cx={pos.x + radius - 4}
                        cy={pos.y - radius + 4}
                        r="8"
                        fill="hsl(var(--background))"
                        stroke={stateData.color}
                        strokeWidth="2"
                        className="pointer-events-none"
                      />
                      <text
                        x={pos.x + radius - 4}
                        y={pos.y - radius + 4}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize="8"
                        fontWeight="bold"
                        fill={stateData.color}
                        className="pointer-events-none select-none"
                      >
                        {stateData.highlights.length}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Tooltip no hover
            {hoveredState && statesData[hoveredState] && (
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border animate-fade-in">
                <p className="font-heading text-foreground">
                  {statesData[hoveredState].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {statesData[hoveredState].highlights.length} destaques
                  históricos
                </p>
              </div>
            )} */}
          </div>

          {/* Cards de Informação - Lado direito */}
          <div className="space-y-4">
            {selectedState && statesData[selectedState] ? (
              <div className="animate-fade-in">
                {/* Header do estado */}
                <div
                  className="p-5 rounded-2xl mb-4 text-white"
                  style={{ background: statesData[selectedState].color }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">
                      {selectedState.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading">
                        {statesData[selectedState].name}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {statesData[selectedState].highlights.length} pontos de
                        destaque
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cards de destaques */}
                <div className="space-y-3">
                  {statesData[selectedState].highlights.map((item, index) => {
                    const Icon = iconMap[item.type] || MapPin;
                    return (
                      <div
                        key={index}
                        className="flex gap-4 p-4 bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            background: `${statesData[selectedState].color}20`,
                          }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: statesData[selectedState].color }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-heading text-foreground text-sm mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Navegação de estados */}
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3 font-medium">
                    Explorar outros estados:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(statesData)
                      .filter(([code]) => code !== selectedState)
                      .map(([code, data]) => (
                        <button
                          key={code}
                          onClick={() => setSelectedState(code)}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
                          style={{
                            backgroundColor: `${data.color}20`,
                            color: data.color,
                          }}
                        >
                          {code}
                        </button>
                      ))}
                  </div>
                </div>

                {/* Legenda */}
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3 font-medium">
                    Legenda:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(iconMap).map(([type, Icon]) => (
                      <div
                        key={type}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="capitalize">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center p-8 bg-muted/30 rounded-2xl border border-dashed border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-muted-foreground">
                    Clique em um marcador no mapa para ver os destaques
                    históricos
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
