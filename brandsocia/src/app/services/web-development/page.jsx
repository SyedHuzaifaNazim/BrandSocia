import ServiceHero from '@/components/services/ServicesHero'
import ServiceFeatures from '@/components/services/ServicesFeatures'
import ServiceProcess from '@/components/services/ServicesProcess'
import ServicePortfolio from '@/components/services/ServicesPortfolio'
import ServiceCTA from '@/components/services/ServicesCTA'

export default function WebDevelopment() {
  const heroData = {
    title: "Web Development Services",
    description: "Custom websites and web applications built with modern technologies to drive your business growth and online presence.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  }

  const featuresData = {
    title: "Our Web Development Solutions",
    features: [
      {
        title: "WordPress Development",
        description: "Custom WordPress themes and plugins tailored to your specific business needs.",
        icon: "💻"
      },
      {
        title: "Full-Stack Applications",
        description: "Complete web applications with modern frontend and backend technologies.",
        icon: "🚀"
      },
      {
        title: "E-Commerce Solutions",
        description: "Online stores with secure payment gateways and inventory management.",
        icon: "🛒"
      },
      {
        title: "Responsive Design",
        description: "Websites that look great on all devices from desktop to mobile.",
        icon: "📱"
      },
      {
        title: "API Integration",
        description: "Seamless integration with third-party services and platforms.",
        icon: "🔌"
      },
      {
        title: "Performance Optimization",
        description: "Fast-loading websites with optimized code and assets.",
        icon: "⚡"
      }
    ]
  }

  const processData = {
    title: "Our Development Process",
    steps: [
      {
        title: "Discovery & Planning",
        description: "We analyze your requirements and create a detailed project plan."
      },
      {
        title: "Design & Prototyping",
        description: "We create wireframes and designs for your approval."
      },
      {
        title: "Development",
        description: "Our developers bring your website to life with clean code."
      },
      {
        title: "Testing & Quality Assurance",
        description: "We thoroughly test your website across all devices and browsers."
      },
      {
        title: "Deployment & Launch",
        description: "We deploy your website and ensure everything works perfectly."
      },
      {
        title: "Maintenance & Support",
        description: "We provide ongoing support and maintenance services."
      }
    ]
  }

  return (
    <div className="bg-white text-black">
      <ServiceHero {...heroData} />
      <ServiceFeatures {...featuresData} />
      <ServiceProcess {...processData} />
      <ServicePortfolio serviceType="web-development" />
      <ServiceCTA 
        title="Ready to Build Your Website?"
        description="Let's discuss your project and create a custom solution that drives results."
        buttonText="Start Your Project"
      />
    </div>
  )
}