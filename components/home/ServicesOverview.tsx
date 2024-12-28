'use client';

import { motion } from 'framer-motion';
import { Building2, PartyPopper, Music, Rocket, Plane, Wallet } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Corporate Events',
    description: 'Exclusive venues with luxurious amenities and customized event strategies.'
  },
  {
    icon: <PartyPopper className="w-8 h-8" />,
    title: 'Weddings & Social Events',
    description: 'Destination weddings at Goa, Udaipur, Rishikesh, and more.'
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: 'Entertainment Management',
    description: 'Celebrity performances and unique acts tailored to your event.'
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Product Launches',
    description: 'High-impact events to introduce new products in style.'
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: 'Travel Management',
    description: 'Comprehensive travel programs including flights, visas, and logistics.'
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: 'Financial Management',
    description: 'Budget planning, expense monitoring, and financial reporting.'
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive event management solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-[#FFD700]/10 flex items-center justify-center mb-6 text-[#FFD700]">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0e2a47] mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}