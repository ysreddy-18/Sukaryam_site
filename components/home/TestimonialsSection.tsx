'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sukaryam transformed our corporate event into an unforgettable experience. Their attention to detail was impeccable.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "Tech Solutions Inc."
  },
  {
    quote: "The team's professionalism and creativity made our wedding day absolutely perfect. We couldn't have asked for better partners.",
    author: "Priya Sharma",
    position: "Client",
    company: "Destination Wedding"
  },
  {
    quote: "Their expertise in event management is unmatched. They delivered beyond our expectations.",
    author: "Rajesh Kumar",
    position: "CEO",
    company: "Global Enterprises"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What our clients say about their experience with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <Quote className="w-10 h-10 text-[#FFD700] mb-6" />
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div>
                <h4 className="font-semibold text-[#0e2a47]">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}