import Image from 'next/image'

export default function ServicePortfolio({ serviceType }) {
  const portfolioItems = {
    'web-development': [
      {
        title: 'E-Commerce Store',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
        description: 'Complete online store with payment integration'
      },
      {
        title: 'Corporate Website',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
        description: 'Professional website for business representation'
      }
    ],
    'seo': [
      {
        title: 'SEO Campaign',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
        description: 'Increased organic traffic by 200% in 6 months'
      }
    ]
    // Add more portfolio items for other services
  }

  const items = portfolioItems[serviceType] || []

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}