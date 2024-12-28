'use client'

import { useState } from 'react'
import { Building2, Stethoscope, Music, Rocket, Users, Gift, Sparkles, Plane, GraduationCap } from 'lucide-react'
import Image from 'next/image'

const capabilities = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'CORPORATE Conferences/EVENTS',
    description: 'Professional corporate event planning and execution',
    detailedDescription:[ "Through understanding a company's unique brand and identifying their target audience, our team designs an event concept and coordinates all technical aspects before the event begins.We promise you the exquisite & splendid time for your delegates, business associates, & employees.",],
    image:"/assets/corporate-conferences.jpg" 
   },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: 'Medical CONFERENCES/events',
    description: 'Specialized medical conference management',
    detailedDescription:[
        " Whether you are planning a Medical conference, seminar or awards dinner, each event is unique and requires a strong foundation to make it a success. To make sure your conference meets your goals, objectives and unique logistical requirements, you need a proven pa ner with experience in your eld to help strategize and plan all elements of your event.",
        "With over two decades of experience managing conferences, we are uniquely suited to help you develop strategies to take your conference to the next level. As your long-term pa ner, we listen to your goals, work with your planning team and draw on historical data and our relationships to build a solid foundation to make a success story.",
        " We also take advantage of the latest tools and technology to streamline the logistics for your conference such as a centralised database for all your pa icipants, transparent nancials, historical pro ling and promotional tools.",
    ], 
    image:"/assets/medical-conferences.jpg" 
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'ENTERTAINMENT',
    description: 'Dynamic entertainment event coordination',
    detailedDescription: [" Sukaryam has experience and extensive database of talented pe ormers to suit all of your ente ainment needs. From celebrity singers and dancers to x-factor, the voice and india’s got talent contestants, as well as cha topping a ists, our priority is to nd the most unique and exceptional act to suit your event. "],
    image:"/assets/entertainment.jpg" 
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: 'Concerts & Artists Management',
    description: 'End-to-end concert planning and artist coordination',
    detailedDescription: ["Celebrities from di erent elds prove an asset and spice up any event. In our country, bollywood or spo s celebrities hold a larger than life image among their fans and thus this management is to be dealt with special care by our professionals. "],
    image:"/assets/concerts.jpg" 
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: 'SOCIAL EVENTS MANAGEMENT',
    description: 'Memorable social gathering organization',
    detailedDescription: [
        "We ensure that we transform your imagination of a dream wedding into a spectacular celebration. We cra an astounding wedding of your choice – extravagant or intimate, royal or traditional, you think of it and we make it happen.",
        "Be it Goa, Rishikesh, Corbe , Udaipur or any other destination, we have been managing multiple destination weddings in india and abroad within unbelievable budgets. We will make it happen in the famous fo s, hotels, palaces, and beaches.",
    ],
    image:"/assets/social-events.jpg" 
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Dealers/Employees/ Investors Meet',
    description: 'Strategic stakeholder meeting management',
    detailedDescription: [
        " Sometimes, when you are announcing a new distribution initiative or want to motivate your distribution, sales channel, dealers, investors or the shareholders, a spectacular event with right kind information, speakers and ente ainment is the need of the hour. Our specialized team does everything from selecting the venue to hospitality and catering for any business meet."
    ],
    image:"/assets/stakeholder-meetings.jpg" 

  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Product Launches',
    description: 'Impactful product launch event execution',
    detailedDescription:[
        " At Sukaryam we understand the impo ance of first impressions and the need for a high impact event that introduces your product in style. Our dedicated events team are experienced in all elements of launch delivery, so you can concentrate on unveiling the product and leave the planning, logistics, launch idea and management to us."
    ],
    image:"/assets/product-launches.jpg" 
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: 'MICE | Corporate Tours',
    description: 'Comprehensive MICE solutions and corporate travel',
    detailedDescription:[
        "There is a huge extent of customization in case of a MICE (O site) trip in terms of destinations, conference activities, needs, hotel sightseeing Ente ainment, gala dinner venue, team building, our prime focus is always to cater to our customers’ speci c needs and the intent is to delight the customer. "
    ],
    image:"/assets/mice-tours.jpg" 
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Workshops',
    description: 'Interactive workshop planning and facilitation',
    detailedDescription:[
        "Inspirational talks from passionate, creative people. The idea is a simple one- That people who do things, can inspire the rest of us to go and do things too. We do help in doing all the arrangements."
    ],
    image:"/assets/workshops.jpg" 
  }
]

export default function OurCapabilities() {
  const [activeCapability, setActiveCapability] = useState(capabilities[0])
  const [isListOpen, setIsListOpen] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 pt-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#0e2a47] mb-4">Our Capabilities</h2>
          <div className="w-24 h-1.5 bg-[#cc9e4b] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Delivering exceptional experiences across diverse event categories
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Mobile Dropdown */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setIsListOpen(!isListOpen)}
              className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 text-[#cc9e4b] bg-[#cc9e4b]/10 rounded-lg">
                  {activeCapability.icon}
                </div>
                <span className="font-medium text-gray-900">{activeCapability.title}</span>
              </div>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isListOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isListOpen && (
              <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                {capabilities.map((capability) => (
                  <button
                    key={capability.title}
                    onClick={() => {
                      setActiveCapability(capability)
                      setIsListOpen(false)
                    }}
                    className="w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${activeCapability.title === capability.title 
                        ? 'text-[#cc9e4b] bg-[#cc9e4b]/10' 
                        : 'text-gray-400'}`}>
                        {capability.icon}
                      </div>
                      <span className={activeCapability.title === capability.title 
                        ? 'text-gray-900' 
                        : 'text-gray-600'}>
                        {capability.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop List */}
          <div className="hidden lg:block lg:w-1/3">
            <div className="space-y-2 p-6 border-r bg-[#0e2a47] border-gray-100 rounded-md flex-col justify-center items-center">
              {capabilities.map((capability) => (
                <button
                  key={capability.title}
                  onClick={() => setActiveCapability(capability)}
                  className={`w-full text-left p-4 rounded transition-all duration-300 
                    ${activeCapability.title === capability.title 
                      ? 'bg-[#fff]    border-l-4 border-[#cc9e4b]' 
                      : 'hover:bg-gray-50 border-l-4 border-transparent !hover:!text-gray-900 '}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${activeCapability.title === capability.title 
                      ? 'text-[#cc9e4b]' 
                      : 'text-gray-400'}`}>
                      {capability.icon}
                    </div>
                    <h3 className={`font-medium ${activeCapability.title === capability.title 
                      ? 'text-gray-900' 
                      : 'text-gray-400 '}`}>
                      {capability.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3">
            <div className="relative h-[300px] lg:h-[400px] rounded-md overflow-hidden mb-8">
              <Image
                src={activeCapability.image}
                alt={activeCapability.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg text-white">
                    {activeCapability.icon}
                  </div>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-[#cc9e4b] to-transparent" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-light text-white tracking-wide">
                  {activeCapability.title}
                </h3>
              </div>
            </div>

            <div className="space-y-6 px-4 lg:px-0">
  <p className="text-xl text-gray-600 font-light">
    {activeCapability.description}
  </p>
  <div className="w-12 h-[1px] bg-[#cc9e4b]" />
  <div className="space-y-4 text-gray-700 leading-relaxed">
    {activeCapability.detailedDescription.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}
