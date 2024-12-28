'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Plane, Wallet, Users, Building2, Gift, FileText, PenTool, Utensils } from 'lucide-react'
const services = [
    {
        icon: <Plane className="w-5 h-5" />,
        title: "Travel Management",
        shortDesc: "Comprehensive travel logistics and coordination",
        mainImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
        galleryImages: [
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80"
        ],
        description: [
          " Incentive travel is one of the best way to motivate your team or reward your best assets, your people.",
          " We craft , develop and manage travel programmes that will reward, inspire and deliver improved peformance for your sta and customers. Be it ight tickets, travel insurances, VISAS, sight-seeing, guided tours or logistic management, we manage it all.",
          "We listen and fully engage with our clients to produce programmes that are unique, money can't buy experiences.",
          "Our highly experienced and passionate team will ensure that your business objectives are met and return on investment is measured, and we research continually to source the most imaginative and exciting travel experiences."
        ]
      },
      {
        icon: <Wallet className="w-5 h-5" />,
        title: "Financial Management",
        shortDesc: "Strategic budgeting and financial planning",
        mainImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
        galleryImages: [
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
        ],
        description: [
          "Holding a conference can be very costly. How well you plan your budget and manage your nances can truly make or break your event.",
          " Our comprehensive budget planning and financial management services cover all aspects of conference nances. We can help you prepare your conference budget, conduct nancial transactions, track expenses and revenue, create nancial repo s and more. "
        ]
      },
    
      {
        icon: <Users className="w-5 h-5" />,
        title: "Sponsor Attraction",
        shortDesc: "Building valuable partnerships and sponsorships",
        mainImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
        galleryImages: [
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
        ],
        description: [
          " Income from sponsors and exhibitors is essential to the financial success of many conferences. We are here to help you raise those funds, and we have a proven history of meeting and o en exceeding client targets.",
          " Connected to the right people, we are able to cut through red tape and we work with commercial partners to integrate them into your event."
        ]
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Speaker Management",
        shortDesc: "Professional speaker coordination and logistics",
        mainImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
        galleryImages: [
          "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80",           "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80"
        ],
        description: [
          "Quality speakers and engaging content are keys to drawing a endees to your conference. Together they establish your credibility and relevance within your eld. ",
          "With years of experience managing speakers, we can coordinate speaker logistics with ease. We handle speaker registration and travel, negotiate and oversee contracts, manage schedules, produce session materials and perform onsite management suppor to collect and distribute content. ",
          "We've got everything covered to ensure your speakers are happy and their sessions are well organised."
        ]
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        title: "Venue Selection and Negotiations",
        shortDesc: "Strategic venue sourcing and management",
        mainImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
        galleryImages: [
          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
        ],
        description: [
          "Where you hold your conference is extremely impo ant to conference success. It needs to entice a endees and provide the right facilities to meet your standards, meeting space requirements, agenda and budget.",
          "As experts in conference management, Sukaryam can help you select the perfect location for your next conference. With relationships and extensive experience working with hotels, convention centers and venues of all sizes, our culturally savvy team knows how to nd just the right location to t your goals, objectives and resources.",
          "We research locations, negotiate contract terms, and record all site selection activities in a central database to aid future planning. Every possible detail is covered to minimize your risks, save you money and ensure you receive the high quality service that will ensure your conference venue receives rave reviews."
        ]
      }, 
      {
        icon: <FileText className="w-5 h-5" />,
        title: "Abstract Management",
        shortDesc: "Efficient abstract submission and review process",
        mainImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
        galleryImages: [
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
        ],
        description: [
          " We can take care of your abstract management headaches. We have a unique understanding of the complexities associated with collecting and presenting research content. From submission and review, to program development and publishing, we have the experience and so ware tools to streamline the entire abstract management process for you so you are free to focus on the selection of quality content."
        ]
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "PLANNING TEAM SUPPORT",
        shortDesc: "Comprehensive planning and administrative support",
        mainImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
        galleryImages: [
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
        ],
        description: [
          "Once we are appointed to manage your event you can relax and hand over the day to day work to our team. We become your administrative arm, doing all  the secretariat roles such as:",
          "•	 Email  Management ",
          "•	  Scheduling Meetings ",
          "•	  Preparing the agenda ",
          "•	 Taking the minutes",
          "•	 Distributing the minutes",
          "•	  Managing responsibilities and timelines"
        ]
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "DELEGATE REGISTRATION",
        shortDesc: "Seamless registration and attendee management",
        mainImage: "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80",
        galleryImages: [
          "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
        ],
        description: [
          " To awlessly manage conference registration you need experience, organisation and the right tools. We handle all phases of registration including pre-registration communications and planning, online and onsite registration suppo , badge creation, repo ing and more. Using integrated, online tools we capture information on your stakeholders in a central database and then automate various registration processes. Not only does this streamline registration for your current conference, but it also provides vital information we can use as the foundation for planning your next meeting or conference.",
          " Each year we handle thousands of registrations for our clients' events, taking care of:",
          "•	 Creating and maintaining the delegate database ",
          "•	   Full nancial administration ",
          "•	  Answering queries by phone and email ",
          "•	  Sending out con rmations/joining instructions",
          "•	  Chasing up overdue payments",
          "•	   Conference Promotion to Ensure Increased Registration ",
          "•	 Setting-up desk and sta ng for enquiries on the day of your conference."
        ]
      },
     
      {
        icon: <PenTool className="w-5 h-5" />,
        title: "Marketing/promotion and Website Development",
        shortDesc: "Strategic marketing and digital presence solutions",
        mainImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80",
        galleryImages: [
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
        ],
        description: [
          "Conference promotion is essential for holding and growing a successful conference. With Sukaryam as your event pa ner, you have access to a full range of marketing and communications services to publicize your conference, build excitement and keep your pa icipants informed.",
          "As pa of our marketing and communications services, we will help you promote your event with professional email campaigns, invitations and a branded website. To keep your pa icipants up-to-date and engaged throughout your event our team will produce and distribute onsite communications like program guides and more. We don't stop there. A er the conference, we help with post-conference evaluations to gain pa icipants' feedback, which together we can use to improve and plan your next conference."
        ]
      },
      {
        icon: <Utensils className="w-5 h-5" />,
        title: "Food & Beverage/Catering Management",
        shortDesc: "Expert culinary planning and execution",
        mainImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
        galleryImages: [
          "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1521917441209-e886f0404a7b?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80"
        ],
        description: [
          "Choose from a wide variety of cuisines and dishes from various regions of India and across the globe, beautiful presentation style, live stations and special displays, you get it all with us. The experience of our chefs combined with their skill and expe ise helps us cater to all you catering needs. For us a aining the highest pedestal in customer satisfaction is of prime impo ance and we make sure to go the distance. Get in touch with our team and they will guide you through the entire process in a seamless manner"
        ]
      }
     
]

export default function OurServices() {
  const [activeService, setActiveService] = useState(services[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isListOpen, setIsListOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === activeService.galleryImages.length - 1 ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(timer)
  }, [activeService])

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-20 pt-8">
          <h2 className="text-5xl font-bold text-[#0e2a47] mb-4">Our Services</h2>
          <div className="w-24 h-1.5 bg-[#cc9e4b] mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive event solutions tailored to create unforgettable experiences
          </p>
        </div>

        {/* Mobile Dropdown */}
        <div className="lg:hidden relative mb-8">
          <button
            onClick={() => setIsListOpen(!isListOpen)}
            className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100"
          >
           <div className="flex items-center gap-3">
  <span className="text-[#cc9e4b]">{activeService.icon}</span>
  <span className="font-medium text-gray-900">{activeService.title}</span>
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
              {services.map((service) => (
                <button
                  key={service.title}
                  onClick={() => {
                    setActiveService(service)
                    setIsListOpen(false)
                  }}
                  className="w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className={activeService.title === service.title 
                    ? 'text-[#cc9e4b]' 
                    : 'text-gray-600'}>
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:block mb-16">
  <div className="flex flex-wrap gap-4">
    {services.map((service) => (
      <button
        key={service.title}
        onClick={() => setActiveService(service)}
        className={`
          px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300
          flex items-center gap-2
          ${activeService.title === service.title 
            ? 'bg-[#cc9e4b] text-white shadow-lg' 
            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'}
        `}
      >
        <span className={`${activeService.title === service.title ? 'text-white' : 'text-[#cc9e4b]'}`}>
          {service.icon}
        </span>
        {service.title}
      </button>
    ))}
  </div>
</div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Image Slideshow */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            {activeService.galleryImages.map((image, idx) => (
              <motion.div
                key={image}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentImageIndex === idx ? 1 : 0,
                  scale: currentImageIndex === idx ? 1 : 1.1
                }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={image}
                  alt={`${activeService.title} image ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {activeService.galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === idx ? 'w-6 bg-[#cc9e4b]' : 'bg-white/60'
                  }`}
                  onClick={() => setCurrentImageIndex(idx)}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-light text-gray-900 mb-3">
                {activeService.title}
              </h3>
              <div className="w-12 h-0.5 bg-[#cc9e4b]" />
            </div>

            <p className="text-xl text-gray-600 font-light">
              {activeService.shortDesc}
            </p>

            <div className="prose prose-lg">
              {activeService.description.map((para, idx) => (
                <p key={idx} className="text-gray-600">{para}</p>
              ))}
            </div>

            {/* <div className="grid grid-cols-2 gap-4">
              {activeService.highlights.map((highlight, idx) => (
                <div 
                  key={idx}
                  className="p-4 bg-white rounded-xl border border-gray-100 hover:border-[#cc9e4b]/30 
                           transition-colors duration-300"
                >
                  <span className="text-gray-600">{highlight}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
