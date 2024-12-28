'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
    alt: 'Corporate Event',
    category: 'Corporate',
    description: 'Elevating business gatherings to memorable experiences'
  },
  {
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
    alt: 'Wedding Celebration',
    category: 'Wedding',
    description: 'Creating magical moments for your special day'
  },
  {
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    alt: 'Product Launch',
    category: 'Launch',
    description: 'Showcasing your products with impact and style'
  },
  {
    src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329',
    alt: 'Entertainment Event',
    category: 'Entertainment',
    description: 'Delivering unforgettable entertainment experiences'
  }
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0e2a47] mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-[#cc9e4b] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing our finest moments and successful events
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-scroll">
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={index}
                className="flex-none w-[350px] group relative h-[250px] overflow-hidden rounded-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-4 py-1 bg-[#cc9e4b] text-white text-sm rounded-full mb-4">
                      {image.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{image.alt}</h3>
                    <p className="text-gray-300">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}