import {Card} from '@/components/ui/Card'
import {Button} from '@/components/ui/Button'

const posts = [
  {
    title: '10 Social Media Trends for 2023',
    excerpt: 'Discover the latest social media trends that will shape your marketing strategy this year.',
    date: 'April 15, 2023',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80'
  },
  {
    title: 'How to Build a Strong Brand Identity',
    excerpt: 'Learn the key elements of a compelling brand identity that resonates with your audience.',
    date: 'March 28, 2023',
    image: 'https://images.unsplash.com/photo-1567446537738-74804ee3a9bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80'
  },
  {
    title: 'The Importance of Mobile-First Design',
    excerpt: 'Why mobile optimization should be a priority for every business in the digital age.',
    date: 'March 10, 2023',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80'
  }
]

export default function BlogPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">From Our Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights and trends in digital marketing and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button href="/blog" variant="ghost" className="px-0">
                  Read more →
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/blog" variant="primary">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}