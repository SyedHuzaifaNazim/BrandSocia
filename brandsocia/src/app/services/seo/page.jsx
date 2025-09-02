import ServiceHero from '@/components/services/ServicesHero'
import ServiceFeatures from '@/components/services/ServicesFeatures'
import ServiceProcess from '@/components/services/ServicesProcess'
import ServicePortfolio from '@/components/services/ServicesPortfolio'
import ServiceCTA from '@/components/services/ServicesCTA'

export default function SEO() {
  const heroData = {
    title: "SEO Services",
    description: "Increase your visibility in search engines and drive qualified traffic to your website with our comprehensive SEO strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  }

  const featuresData = {
    title: "Our SEO Solutions",
    features: [
      {
        title: "Keyword Research",
        description: "Identify the most valuable keywords for your business and audience.",
        icon: "🔍"
      },
      {
        title: "On-Page Optimization",
        description: "Optimize your website content and structure for better rankings.",
        icon: "📝"
      },
      {
        title: "Technical SEO",
        description: "Improve website performance, speed, and technical aspects.",
        icon: "⚙️"
      },
      {
        title: "Content Strategy",
        description: "Create valuable content that ranks well and engages visitors.",
        icon: "📊"
      },
      {
        title: "Local SEO",
        description: "Optimize for local search results and Google My Business.",
        icon: "📍"
      },
      {
        title: "Analytics & Reporting",
        description: "Track performance and measure ROI with detailed reports.",
        icon: "📈"
      }
    ]
  }

  return (
    <div className="bg-white text-black">
      <ServiceHero {...heroData} />
      <ServiceFeatures {...featuresData} />
      <ServiceProcess 
        title="Our SEO Process"
        steps={[
          { title: "SEO Audit", description: "Comprehensive analysis of your current SEO performance." },
          { title: "Strategy Development", description: "Custom SEO strategy tailored to your business goals." },
          { title: "Implementation", description: "Execution of technical and on-page SEO improvements." },
          { title: "Content Optimization", description: "Enhance existing content and create new optimized content." },
          { title: "Link Building", description: "Acquire high-quality backlinks from authoritative sites." },
          { title: "Monitoring & Reporting", description: "Continuous monitoring and monthly performance reports." }
        ]}
      />
      <ServicePortfolio serviceType="seo" />
      <ServiceCTA 
        title="Ready to Improve Your Search Rankings?"
        description="Let's develop an SEO strategy that drives organic traffic and conversions."
        buttonText="Get SEO Audit"
      />
    </div>
  )
}