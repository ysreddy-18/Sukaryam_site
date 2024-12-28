import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import GallerySection from '@/components/home/GallerySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import CompanySection from '@/components/home/CompanySection';

export default function Home() {
  return (
    <>
      <main className="overflow-hidden ">
      <HeroSection />
        <GallerySection />
        <CompanySection/>
        <ServicesSection />
        <AboutSection />
        <CapabilitiesSection/>
        <TestimonialsSection />
      </main>
    </>
  );
}