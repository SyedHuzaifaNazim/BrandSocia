import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const services = [
  {
    title: 'Web Design & Development',
    description: 'Custom websites that convert visitors into customers with beautiful design and seamless functionality.',
    icon: '💻',
    color: 'bg-primary-100 text-primary-700'
  },
  {
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns that build brand awareness and engage your target audience.',
    icon: '📱',
    color: 'bg-secondary-100 text-dark'
  },
  {
    title: 'Content Strategy',
    description: 'Compelling content that tells your brand story and drives meaningful engagement.',
    icon: '📝',
    color: 'bg-primary-100 text-primary-700'
  },
  {
    title: 'Brand Identity',
    description: 'Distinct visual identity that communicates your brand values and differentiates you from competitors.',
    icon: '🎨',
    color: 'bg-secondary-100 text-dark'
  },
  {
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies that improve your visibility and drive organic traffic.',
    icon: '🔍',
    color: 'bg-primary-100 text-primary-700'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce solutions that streamline the shopping experience and boost sales.',
    icon: '🛒',
    color: 'bg-secondary-100 text-dark'
  }
]

export default function ServiceGrid() {
  return (
    <section className="py-16 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-dark">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We offer a comprehensive range of digital marketing and design services to help your business thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow group border border-gray-100">
              <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <Button href="/services" variant="ghost" className="px-0 text-primary-600 hover:text-primary-700">
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