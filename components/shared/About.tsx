import Image from 'next/image'

const About = () => {
  return (
    <section className="py-16 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
          <Image
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80"
              alt="Sukaryam Events"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#0e2a47]">
              About Sukaryam
            </h2>
            
            <div className="w-20 h-1 bg-[#cc9e4b]" />
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Sukaryam is a full-service event management firm. We are strategic event management partners. Be it a medical conference or a corporate event, a sports event or a social event, we approach every project with meticulous attention to detail and obsessive precision.
              </p>
              
              <p>
                We understand that a properly executed event can be leveraged to support an organization's strategic vision, incorporated into a company's marketing plan, or used to build networks and client loyalty.
              </p>
              
              <p>
                At Sukaryam, we put your organization first. We learn about your business, we focus on your challenges, and we plan events to support your goals. Our laser sharp focus, unparalleled professionalism and exceptional service means clients can trust that their event is in capable hands.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-2xl font-bold text-[#cc9e4b]">100%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#cc9e4b]">Full-Service</h3>
                <p className="text-gray-600">Event Management</p>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
