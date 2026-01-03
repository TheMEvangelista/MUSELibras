import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TimelineSection } from "@/components/TimelineSection";
import { CharactersSection } from "@/components/CharactersSection";
import { CuriositiesSection } from "@/components/CuriositiesSection";
import { GallerySection } from "@/components/GallerySection";
import { MapSection } from "@/components/MapSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <CharactersSection />
        <CuriositiesSection />
        <GallerySection />
        <MapSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
