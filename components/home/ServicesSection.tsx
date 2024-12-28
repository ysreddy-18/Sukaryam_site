'use client';

import { motion } from 'framer-motion';
import { Building2, PartyPopper, Music, Rocket, Plane, Wallet, Users, Camera, Gift, Heart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const services = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Travel Management',
    description: 'Comprehensive travel logistics and coordination for seamless event experiences',
    image: '/assets/travel-management.jpg'  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'Financial Management',
    description: 'Strategic budgeting and financial planning for optimal event execution',
    image: '/assets/financial-management.jpg'  },
  {
    icon: <PartyPopper className="w-6 h-6" />,
    title: 'Sponsor Attraction',
    description: 'Building valuable partnerships and securing event sponsorships',
    image: '/assets/sponsor-attraction.jpg'  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Speaker Management',
    description: 'End-to-end speaker coordination and logistics handling',
    image: '/assets/speaker-management.jpg'  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Venue Selection and Negotiations',
    description: 'Strategic venue sourcing and contract negotiations',
    image: '/assets/venue-selection.jpg'  },
  // {
  //   icon: <Rocket className="w-6 h-6" />,
  //   title: 'Abstract Management',
  //   description: 'Efficient handling and organization of event abstracts and submissions',
  //   image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
  // },
  {
    icon: <Gift className="w-6 h-6" />,
    title: 'Planning Team Support',
    description: 'Dedicated assistance and resources for event planning teams',
    image: '/assets/planning-support.jpg'  },
  // {
  //   icon: <Users className="w-6 h-6" />,
  //   title: 'Delegate Registration',
  //   description: 'Streamlined registration process and attendee management',
  //   image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80'
  // },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Marketing/Promotion and Website Development',
    description: 'Comprehensive digital marketing and web presence solutions',
    image: '/assets/marketing-promotion.jpg'  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Food & Beverage/Catering Management',
    description: 'Expert catering coordination and dietary requirement handling',
    image: '/assets/catering-management.jpg'  },
];


export default function ServicesSection() {
  const router = useRouter()

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0e2a47] mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive event solutions tailored to create unforgettable experiences
          </p>
        </motion.div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl h-[300px]"
            >
              <div className="relative h-full">
                <Image
                  src={service.image}
                  alt={service.title}
fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#cc9e4b] rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="lg:col-span-4 flex flex-col md:flex-row justify-center gap-6">
            {services.slice(8, 10).map((service, index) => (
             <motion.div
             key={service.title}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: index * 0.1 }}
             className="group relative overflow-hidden rounded-2xl h-[300px] w-full md:w-[calc(25%-12px)]"
           >
                <div className="relative h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-[#cc9e4b] rounded-full">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-gray-200 text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <button 
           onClick={() => router.push('/Services')} 
           className='lg:col-span-4 mx-auto px-8 py-3 bg-[#cc9e4b] text-white rounded-full font-semibold hover:bg-[#b88c3d] transition-colors duration-300 flex items-center gap-2'>
  View More
</button>
        </div>
      </div>
    </section>
  );
  
  
  
}