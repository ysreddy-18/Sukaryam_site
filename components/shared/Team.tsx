import Image from 'next/image'

const teamMembers = [
  {
    name: 'Anurag',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80',
    description: "Anurag is a product of the some of the most prestigious Indian institutions like The Scindia School, Gwalior and Welcomgroup graduate school of hotel administration, Manipal. He worked with best of international hotel brands like IHG, Carlson hotels, Starwood hotels and resorts and Marriot hotels for over 25 years. Well travelled all through, he learnt the niceties of event management through his experience with various hotel chains. He believes in the saying that concepts do not bring transformation, it's the experience. At Sukaryam he wants to ensure that every client's event experience is memorable.",
    strengths: [
      {
        title: 'Operations',
        items: ['Conference operations', 'Venue planning', 'Menu planning', 'Seating planning', 'Meal planning', 'Audio/video/light/sound planning', 'Décor planning and delivery']
      },
      {
        title: 'Sales and Marketing',
        items: ['Conference planning', 'Mapping customer requirements', 'Business sector understanding', 'Pricing finalization', 'Artist management', 'Celebrity management']
      },
      {
        title: 'Revenue and E-Distribution',
        items: ['Fund raising', 'Digital strategy', 'Social media planning', 'Website planning', 'Technology planning']
      },
      {
        title: 'Travel and Accommodation',
        items: ['Venue finalization', 'Hotel negotiations', 'Flight ticketing', 'Logistics management']
      }
    ]
  },
  {
    name: 'Bhavna',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80',
    description: "Bhavna is veteran from the hospitality industry. She spent most of her career managing convention operations and sales working with the best convention brands like Carlson, Grand Hyatt and Metropolitan hotels. After hotels she went on to work with travel brands like Thomas Cook and SOTC where she picked the best of the travel trade and MICE travel planning and operation. In 23 years of her extensive career she picked up the best concepts and hands on knowledge of the trade. Today she adds tremendous value to our operations and concept designing.",
    strengths: [
      {
        title: 'Convention sales and operation',
        items: ['Convention planning', 'Décor planning', 'Flow of events', 'Budget planning', 'Team building activities', 'Entertainment management']
      },
      {
        title: 'Food and beverage management',
        items: ['Menu selection', 'Food and beverage planning and delivery']
      },
      {
        title: 'Travel management',
        items: ['Travel planning', 'Logistics planning', 'Visa formalities', 'Sightseeing planning', 'Guided tours', 'Incentive travel']
      }
    ]
  }
]

const Team = () => {
    return (
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#0e2a47] mb-4">Leadership Team</h2>
            <div className="w-24 h-1.5 bg-[#cc9e4b] mx-auto rounded-full" />
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the visionaries behind Sukaryam who bring decades of expertise in event management and hospitality
            </p>
          </div>
  
          <div className="space-y-24">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2 flex flex-col items-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -inset-4 bg-[#cc9e4b]/10 rounded-2xl transform -rotate-6" />
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-3xl font-bold text-[#0e2a47]">{member.name}</h3>
                    <div className="w-12 h-1 bg-[#cc9e4b] mx-auto mt-3 rounded-full" />
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg italic mt-6">
                    {member.description}
                  </p>
                </div>
  
                <div className="md:w-1/2 space-y-6">
  <h4 className="text-2xl font-semibold text-[#cc9e4b] flex items-center gap-3 mb-8">
    <span className="w-12 h-[2px] bg-[#cc9e4b]"></span>
    Key Expertise
  </h4>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {member.strengths.map((strength) => (
      <div 
        key={strength.title} 
        className="group bg-white/50 backdrop-blur-sm p-6 
        border-l-2 border-transparent hover:border-[#cc9e4b]
        transition-all duration-300"
      >
        <h5 className="font-medium text-lg text-[#0e2a47] mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#cc9e4b]"></span>
          {strength.title}
        </h5>
        
        <ul className="space-y-2 pl-4">
          {strength.items.map((item) => (
            <li key={item} 
              className="text-gray-600 text-sm flex items-center gap-2 before:content-[''] 
              before:w-1 before:h-1 before:rounded-full before:bg-[#cc9e4b]/50"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  
  
  export default Team
