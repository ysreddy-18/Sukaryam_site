"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const CompanySection = () => {
  return (
    <section id="company" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px]">
            <Image
src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3" alt="Our Company"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#0e2a47]">
              Our Company
            </h2>
            <div className="w-20 h-1 bg-[#cc9e4b]"/>
            
            <p className="text-lg text-gray-700">
            Sukaryam is a full-service event management rm. We are strategic 
event management pa ners. Be it a medical conference or a 
corporate event, a spo s event or a social event, we approach 
every project with meticulous a ention to detail and obsessive 
precision. We understand that a properly executed event can be 
leveraged to suppo an organization’s strategic vision, 
incorporated into a company’s marketing plan, or used to build 
networks and client loyalty. Regardless of size and scope, we treat 
your event like a business with clear strategic goals, de ned 
milestones, and a comprehensive plan to ensure that your event is 
delivered on time and on budget.
            </p>
            
            {/* <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-600">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div> */}

            <button className="mt-8 px-8 py-3 bg-[#cc9e4b] hover:bg-[#cc9e4b]/90 text-white rounded-lg transition duration-300">
              know More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanySection;
