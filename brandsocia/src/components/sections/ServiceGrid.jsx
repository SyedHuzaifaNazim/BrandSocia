import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const services = [
  {
    title: 'Web Design & Development',
    description: 'Custom websites that convert visitors into customers with beautiful design and seamless functionality.',
    icon: '💻'
  },
  {
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns that build brand awareness and engage your target audience.',
    icon: '📱'
  },
  {
    title: 'Content Strategy',
    description: 'Compelling content that tells your brand story and drives meaningful engagement.',
    icon: '📝'
  },
  {
    title: 'Brand Identity',
    description: 'Distinct visual identity that communicates your brand values and differentiates you from competitors.',
    icon: '🎨'
  },
  {
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies that improve your visibility and drive organic traffic.',
    icon: '🔍'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce solutions that streamline the shopping experience and boost sales.',
    icon: '🛒'
  }
]

export default function ServiceGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital marketing and design services to help your business thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button href="/services" variant="ghost" className="px-0">
                Learn more →
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}