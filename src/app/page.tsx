import { HeroSection } from "@/components/layout/HeroSection";
import { Navbar } from "@/components/ui/Navbar";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { AboutSection } from "@/components/layout/AboutSection";
import { ServicesSection } from "@/components/layout/ServicesSection";
import { ProjectsSection } from "@/components/layout/ProjectsSection";
import { ContactSection } from "@/components/layout/ContactSection";
import { FacilitySection } from "@/components/layout/FacilitySection";
import { MaterialsSection } from "@/components/layout/MaterialsSection";

/**
 * Home Page
 * Showcases the WSCO landing page with hero carousel and features
 */

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
  <FacilitySection />
  <MaterialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
