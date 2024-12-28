import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
src="/assets/conference-speakers.jpg"          alt="Event"
          fill
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to <br /> 
            <span className="text-[#cc9e4b]">Sukaryam</span> 
          </h1>
         
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in">
            Crafting Unforgettable Events That Inspire, Engage, and Deliver Results.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up">
            <Link
              href="/Contact"
              className="px-4 md:px-8 py-4 bg-[#cc934b] text-black rounded-full font-medium hover:bg-[#cc9e4b]/90 transition-all inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
