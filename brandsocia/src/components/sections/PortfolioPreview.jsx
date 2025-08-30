import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const projects = [
  {
    title: 'E-commerce Redesign',
    category: 'Web Design',
    image: 'https://via.placeholder.com/400/300'
  },
  {
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://via.placeholder.com/400/300'
  },
  {
    title: 'Social Campaign',
    category: 'Social Media',
    image: 'https://via.placeholder.com/400/300'
  }
]

export default function PortfolioPreview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
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
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/portfolio" variant="primary">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}