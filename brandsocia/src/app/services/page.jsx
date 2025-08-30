import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const services = [
  {
    title: 'Web Design & Development',
    description: 'We create responsive, user-friendly websites that reflect your brand and drive conversions.',
    features: ['Custom Design', 'Responsive Development', 'CMS Integration', 'E-commerce Solutions'],
    icon: '💻'
  },
  {
    title: 'Social Media Marketing',
    description: 'We develop and execute social media strategies that increase engagement and grow your audience.',
    features: ['Strategy Development', 'Content Creation', 'Community Management', 'Performance Analytics'],
    icon: '📱'
  },
  {
    title: 'Content Strategy',
    description: 'We create compelling content that tells your brand story and drives meaningful engagement.',
    features: ['Content Planning', 'Copywriting', 'Blog Management', 'Content Promotion'],
    icon: '📝'
  },
  {
    title: 'Brand Identity',
    description: 'We develop distinctive visual identities that communicate your brand values and differentiate you.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Assets', 'Brand Applications'],
    icon: '🎨'
  },
  {
    title: 'SEO Optimization',
    description: 'We implement data-driven SEO strategies that improve visibility and drive organic traffic.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Performance Reporting'],
    icon: '🔍'
  },
  {
    title: 'E-commerce Solutions',
    description: 'We build seamless e-commerce experiences that streamline shopping and boost sales.',
    features: ['Store Setup', 'Product Management', 'Payment Integration', 'Conversion Optimization'],
    icon: '🛒'
  }
]

export default function Services() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of digital marketing and design services to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button href="/contact" variant="primary" className="w-full">
                Get Started
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how we can help you achieve your business goals with our digital marketing and design services.
          </p>
          <Button href="/contact" variant="primary">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  )
}