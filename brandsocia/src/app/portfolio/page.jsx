import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const projects = [
  {
    title: 'E-commerce Redesign',
    category: 'Web Design',
    description: 'Complete redesign of an online store with improved user experience and increased conversion rates.',
    image: '/api/placeholder/600/400',
    link: '#'
  },
  {
    title: 'Brand Identity',
    category: 'Branding',
    description: 'Development of a comprehensive brand identity system for a tech startup.',
    image: '/api/placeholder/600/400',
    link: '#'
  },
  {
    title: 'Social Media Campaign',
    category: 'Social Media',
    description: 'Multi-platform social media campaign that increased engagement by 150%.',
    image: '/api/placeholder/600/400',
    link: '#'
  },
  {
    title: 'Content Strategy',
    category: 'Content Marketing',
    description: 'Development and implementation of a content strategy that boosted organic traffic.',
    image: '/api/placeholder/600/400',
    link: '#'
  },
  {
    title: 'SEO Optimization',
    category: 'SEO',
    description: 'Technical SEO overhaul that improved search rankings for key terms.',
    image: '/api/placeholder/600/400',
    link: '#'
  },
  {
    title: 'Mobile App Design',
    category: 'UI/UX Design',
    description: 'User-centered design for a mobile application with intuitive navigation.',
    image: '/api/placeholder/600/400',
    link: '#'
  }
]

export default function Portfolio() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg text-gray-600">
            Explore our work and see how we've helped businesses achieve their goals through innovative digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <Button variant="outline" className="border-white text-white">
                    View Project
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button href="/contact" variant="primary">
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  )
}