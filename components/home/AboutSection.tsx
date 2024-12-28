'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

const features = [
  'Identifying Intricacies of Brands ',
  'Identifying Target Audiences',
  'Devising Idea/Concept/Strategy ',
  'Conceptualizing, Creative and Design',
  'Nationwide Execution ',
  'PR Support',
  'Media Management',
  'BTL Activities or Event suppo ',
  'echnology Support',
  'Presentation, Process Note, cost analysis etc. '
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80"
                alt="About Us"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs">
              <h3 className="text-4xl font-bold text-[#0e2a47] mb-2">25+</h3>
              <p className="text-gray-600">Years of Excellence in Event Management</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#0e2a47] mb-6">
              Creating Extraordinary Event Experiences with
              <span className=" text-[#cc9e4b]">  Sukaryam</span> 
            </h2>
            <p className="text-gray-600 mb-8">
            We at Sukaryam not only provide execution but also provide complete solutions. 
            Some reasons to make Sukaryam your event planner:
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="p-1 bg-[#cc9e4b]/10 rounded-full">
                    <Check className="w-4 h-4 text-[#cc9e4b]" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}