import {Card }from '@/components/ui/Card'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ColorGradientBackground from '@/components/ColorGradientBackground'
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground'

export default function About() {
  // const teamMembers = [
  //   {
  //     name: "Sheikh Azmat Ali",
  //     position: "Creative Director",
  //     image: "/WhatsApp_Image_2025-07-01_at_17.12.44_ca3aba3a-removebg-preview.png",
  //     social: {
  //       twitter: "#",
  //       linkedin: "#"
  //     }
  //   },
  //   {
  //     name: "Syed Huzaifa Nazim",
  //     position: "Lead Developer",
  //     image: "/WhatsApp-Image-2024-03-02-at-1.43.27-AM.png",
  //     social: {
  //       twitter: "#",
  //       linkedin: "#"
  //     }
  //   },
  //   {
  //     name: "Subbyil Fahim",
  //     position: "Marketing Strategist",
  //     image: "/IMG-20250322-WA0004-e1742639040613.png",
  //     social: {
  //       twitter: "#",
  //       linkedin: "#"
  //     }
  //   },
  //   {
  //     name: "Hoor Ul Ain",
  //     position: "Digital Marketing Manager",
  //     image: "/WhatsApp-Image-2025-04-25-at-11.26.43_a76c1810.png",
  //     social: {
  //       twitter: "#",
  //       linkedin: "#"
  //     }
  //   }
  // ]

  return (
  <>
    <ColorGradientBackground />
    <AnimatedGradientBackground />
    <Header/>
    <div className='h-20'></div>
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About BrandSocia</h1>
          <p className="text-lg text-gray-600">
            We are a digital marketing and design agency dedicated to helping brands thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, BrandSocia started as a small team of passionate designers and marketers with a shared vision: to create meaningful digital experiences that drive business growth.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've grown into a full-service agency, but our core philosophy remains the same: blend creative design with data-driven strategy to deliver exceptional results for our clients.
            </p>
            <p className="text-gray-600">
              Today, we work with businesses of all sizes, from startups to established brands, helping them navigate the complex digital landscape and achieve their goals.
            </p>
          </div>
          
          <div className="relative h-80 md:h-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Our team at work"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🌱
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-600">
                We're committed to helping our clients grow their businesses through effective digital strategies.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💡
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of industry trends and leverage the latest technologies to deliver cutting-edge solutions.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-semibold mb-2">Partnership</h3>
              <p className="text-gray-600">
                We view ourselves as an extension of your team, working closely with you to achieve your goals.
              </p>
            </Card>
          </div>
        </div>
        
        {/* <div>
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center group hover:shadow-lg transition-all duration-300">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.social.twitter} 
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300 transform hover:scale-110"
                    aria-label={`${member.name} Twitter`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300 transform hover:scale-110"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </div>
    <Footer />
  </>
  )
}