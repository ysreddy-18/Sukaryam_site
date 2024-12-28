import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import CompanySection from '@/components/home/CompanySection';
import dynamic from 'next/dynamic'
const GallerySection = dynamic(() => import('@/components/home/GallerySection'))
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'))
const ContactForm = dynamic(() => 
  import('@/components/shared/ContactForm').then(mod => mod.ContactForm)
)

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