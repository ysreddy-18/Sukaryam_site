'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    details: "+91 9717243531",
    link: "tel:+919717243531"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    details: "sukaryamworld@gmail.com",
    link: "mailto:sukaryamworld@gmail.com"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    locations: [
      "Gurgaon : 1st Floor, N-272, Mayfield Gardens, Sector-51, Gurgaon - 122003",
      "Rishikesh : 79, Awas Vikas, Virbhadra Road, Rishikesh - 249201"
    ]
  }
];

export default function ContactSection() {
  return (
    <section className="relative py-24 overflow-hidden ">
      {/* Background Design */}
      <div className="absolute inset-0 ">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#cc9e4b]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cc9e4b]/5 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative container mx-auto px-4 pt-8  ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-[#0e2a47] mb-4">Get in Touch</h2>
          <div className="w-24 h-1.5 bg-[#cc9e4b] mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Let's discuss how we can make your next event extraordinary
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 
                           hover:border-[#cc9e4b]/20 transition-all duration-500
                           before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/50 before:to-white/80 
                           before:rounded-2xl before:-z-10">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#cc9e4b]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative w-14 h-14 bg-white rounded-xl flex items-center justify-center
                                shadow-sm group-hover:shadow-md transition-all duration-300">
                    <div className="text-[#cc9e4b] transform group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[#0e2a47] mb-4">{info.title}</h3>
                
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-base text-gray-600 hover:text-[#cc9e4b] transition-colors duration-300"
                  >
                    {info.details}
                  </a>
                ) : (
                  <div className="space-y-2">
                    {info.locations?.map((location, idx) => (
                      <div key={idx} className="relative pl-4">
                        <div className="absolute left-0 top-2 w-1 h-1 rounded-full bg-[#cc9e4b]/50" />
                        <p className="text-sm text-gray-600 leading-relaxed text-left">
                          {location}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
