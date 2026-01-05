import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

// Importar imagens da galeria
import iconografiaSinais from "@/assets/gallery/iconografia-sinais.png";
import collegioSurdosMudos from "@/assets/gallery/collegio-surdos-mudos.png";
import dactylologia from "@/assets/gallery/dactylologia.png";
import flausinoGama from "@/assets/gallery/flausino-gama.png";
import inesFachada from "@/assets/gallery/ines-fachada.png";
import inesInterior from "@/assets/gallery/ines-interior.png";
import salaAulaAntiga from "@/assets/gallery/sala-aula-antiga.png";
import materialPedagogico1 from "@/assets/gallery/material-pedagogico-1.png";
import materialPedagogico2 from "@/assets/gallery/material-pedagogico-2.png";
import clarkeSchool from "@/assets/gallery/clarke-school.png";
import passeataSurdos from "@/assets/gallery/passeata-surdos.png";
import gallaudetUniversity from "@/assets/gallery/gallaudet-university.png";
import gallaudetEntrada from "@/assets/gallery/gallaudet-entrada.png";
import cesba from "@/assets/gallery/cesba.png";
import feneis from "@/assets/gallery/feneis.png";
import institutoSantaTeresinha from "@/assets/gallery/instituto-santa-teresinha.png";

const galleryItems = [
  {
    id: 1,
    title: "Instituto Nacional de Educação de Surdos",
    year: "1857",
    description: "Fachada histórica do INES no Rio de Janeiro. Fundado por Dom Pedro II e Ernest Huet, é a primeira escola para surdos da América Latina.",
    category: "Instituição",
    image: inesFachada,
  },
  {
    id: 2,
    title: "Interior do INES",
    year: "Séc. XIX",
    description: "Vista interna das instalações históricas do Instituto Nacional de Educação de Surdos.",
    category: "Instituição",
    image: inesInterior,
  },
  {
    id: 3,
    title: "Sala de Aula Antiga",
    year: "Séc. XX",
    description: "Salas de aula antigas do INES onde alunos surdos recebiam educação formal.",
    category: "Educação",
    image: salaAulaAntiga,
  },
  {
    id: 4,
    title: "Iconografia dos Sinais",
    year: "1875",
    description: "Páginas do primeiro dicionário de sinais do Brasil, publicado por Flausino José da Gama, ex-aluno do INES.",
    category: "Documentos",
    image: iconografiaSinais,
  },
  {
    id: 5,
    title: "Collegio de Surdos-Mudos",
    year: "1857",
    description: "Documento histórico do Collegio Nacional para Surdos-Mudos, sob patrocínio de Suas Majestades Imperiais.",
    category: "Documentos",
    image: collegioSurdosMudos,
  },
  {
    id: 6,
    title: "Dactylologia",
    year: "1875",
    description: "Ilustração da dactilologia (alfabeto manual) do livro de Flausino José da Gama.",
    category: "Material Pedagógico",
    image: dactylologia,
  },
  {
    id: 7,
    title: "Estampa de Flausino Gama",
    year: "1875",
    description: "Estampas do livro 'Iconografia dos Signaes dos Surdos-Mudos' mostrando sinais para diferentes profissões e pessoas.",
    category: "Material Pedagógico",
    image: flausinoGama,
  },
  {
    id: 8,
    title: "Material Pedagógico Histórico",
    year: "Séc. XIX",
    description: "Materiais pedagógicos usados na educação de surdos, incluindo ilustrações de sinais para objetos do cotidiano.",
    category: "Material Pedagógico",
    image: materialPedagogico1,
  },
  {
    id: 9,
    title: "Livro de Sinais Ilustrado",
    year: "Séc. XIX",
    description: "Páginas de livros didáticos com ilustrações de sinais utilizados na educação de surdos.",
    category: "Material Pedagógico",
    image: materialPedagogico2,
  },
  {
    id: 10,
    title: "Clarke School for the Deaf",
    year: "Séc. XIX",
    description: "Clarke School for the Deaf/Center for Oral Education, uma das escolas históricas para educação de surdos.",
    category: "Instituição Internacional",
    image: clarkeSchool,
  },
  {
    id: 11,
    title: "Passeata pelos Direitos dos Surdos",
    year: "2008",
    description: "Manifestação pelo Dia Nacional dos Surdos (Lei 11.796/2008), celebrando conquistas da comunidade surda.",
    category: "Ativismo",
    image: passeataSurdos,
  },
  {
    id: 12,
    title: "Universidade Gallaudet",
    year: "1864",
    description: "Primeira e única universidade do mundo dedicada ao ensino de surdos, fundada em Washington, D.C.",
    category: "Instituição Internacional",
    image: gallaudetUniversity,
  },
  {
    id: 13,
    title: "Entrada da Gallaudet University",
    year: "Contemporâneo",
    description: "Portal de entrada da Universidade Gallaudet, símbolo da educação superior para surdos no mundo.",
    category: "Instituição Internacional",
    image: gallaudetEntrada,
  },
  {
    id: 14,
    title: "Centro de Surdos da Bahia - CESBA",
    year: "Contemporâneo",
    description: "O CESBA é um importante centro de referência para a comunidade surda no Nordeste brasileiro.",
    category: "Instituição",
    image: cesba,
  },
  {
    id: 15,
    title: "FENEIS",
    year: "1987",
    description: "Federação Nacional de Educação e Integração dos Surdos, principal organização de defesa dos direitos dos surdos no Brasil.",
    category: "Organização",
    image: feneis,
  },
  {
    id: 16,
    title: "Instituto Santa Teresinha",
    year: "Contemporâneo",
    description: "Importante centro de educação de surdos em São Paulo, com longa tradição no ensino bilíngue.",
    category: "Instituição",
    image: institutoSantaTeresinha,
  },
];

const categories = ["Todos", "Instituição", "Documentos", "Material Pedagógico", "Educação", "Ativismo", "Organização", "Instituição Internacional"];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "Todos"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="galeria" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Acervo Visual
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4">
            Galeria Histórica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Imagens que contam a história da educação de surdos e da Libras no Brasil e no mundo.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-square bg-gradient-to-br from-primary/30 to-secondary/40 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent">
                <span className="text-xs text-background/80">{item.year}</span>
                <h4 className="text-sm font-medium text-background truncate">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-card rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                  {selectedImage.category} • {selectedImage.year}
                </span>
                <h3 className="text-xl font-heading text-foreground mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
