'use client';

import { motion } from 'framer-motion';
import { Building2, Stethoscope, Music, Rocket, Users, Gift, Sparkles, Plane, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const capabilities = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'CORPORATE Conferences/EVENTS',
    description: 'Professional corporate event planning and execution',
    image: '/assets/corporate-conferences.jpg'  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: 'Medical CONFERENCES/events',
    description: 'Specialized medical conference management',
    image: '/assets/medical-conferences.jpg'  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'ENTERTAINMENT',
    description: 'Dynamic entertainment event coordination',
    image: '/assets/entertainment.jpg'  },
  {
    icon: <Music className="w-8 h-8" />,
    title: 'Concerts & Artists Management',
    description: 'End-to-end concert planning and artist coordination',
    image: '/assets/concerts.jpg'  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: 'SOCIAL EVENTS MANAGEMENT',
    description: 'Memorable social gathering organization',
    image: '/assets/social-events.jpg'  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Dealers/Employees/ Investors Meet',
    description: 'Strategic stakeholder meeting management',
    image: '/assets/stakeholder-meetings.jpg'  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Product Launches',
    description: 'Impactful product launch event execution',
    image: '/assets/product-launches.jpg'  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: 'MICE | Corporate Tours',
    description: 'Comprehensive MICE solutions and corporate travel',
    image: '/assets/mice-tours.jpg'  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Workshops',
    description: 'Interactive workshop planning and facilitation',
    image: '/assets/workshops.jpg'  },
];

export default function CapabilitiesSection() {
  return (
    <section className="py-24  text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#0e2a47]">Our Capabilities</h2>
          <div className="w-24 h-1 bg-[#cc9e4b] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expertise across diverse event categories to deliver exceptional experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[300px]"
            >
              <div className="absolute inset-0 bg-[#cc9e4b] rounded-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative h-full bg-gray-800 rounded-xl transform transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    quality={85}
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  />
                </div>
                <div className="relative h-full p-8 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-black/50 backdrop-blur-sm rounded-xl">
                      {capability.icon}
                    </div>
                    <div className="w-12 h-[2px] bg-[#cc9e4b]"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {capability.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
