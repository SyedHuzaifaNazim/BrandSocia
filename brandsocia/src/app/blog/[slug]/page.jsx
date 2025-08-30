import { notFound } from 'next/navigation'
import Card from '@/components/ui/Card'

// This would typically come from a CMS or database
const blogPosts = {
  'social-media-trends-2023': {
    title: '10 Social Media Trends for 2023',
    date: 'April 15, 2023',
    author: 'Jane Smith',
    image: 'https://via.placeholder.com/800x400',
    content: `
      <p>Social media continues to evolve at a rapid pace, and staying ahead of the trends is crucial for brands looking to maintain a strong online presence. Here are the top 10 social media trends to watch in 2023:</p>
      
      <h2>1. The Rise of Short-Form Video</h2>
      <p>Short-form video content continues to dominate social media platforms. With the popularity of TikTok and Instagram Reels, brands need to incorporate engaging, bite-sized video content into their strategies.</p>
      
      <h2>2. Authenticity and Transparency</h2>
      <p>Users are increasingly valuing authenticity from brands. Showing behind-the-scenes content, being transparent about business practices, and showcasing real customer stories can help build trust.</p>
      
      <h2>3. Social Commerce Expansion</h2>
      <p>Social platforms are making it easier than ever to shop directly through their apps. Integrating e-commerce capabilities into social media strategies will be essential for retail brands.</p>
      
      <h2>4. Niche Community Building</h2>
      <p>Rather than trying to appeal to everyone, brands are finding success by building dedicated communities around specific interests or values.</p>
      
      <h2>5. Augmented Reality Experiences</h2>
      <p>AR filters and experiences are becoming more sophisticated and accessible, offering new ways for brands to engage with their audience.</p>
      
      <p>These are just a few of the trends shaping the social media landscape in 2023. By staying informed and adapting your strategy, you can ensure your brand remains relevant and engaging.</p>
    `
  },
  'building-brand-identity': {
    title: 'How to Build a Strong Brand Identity',
    date: 'March 28, 2023',
    author: 'John Doe',
    image: 'https://via.placeholder.com/800x400',
    content: `
      <p>A strong brand identity is crucial for standing out in today's competitive market. It's more than just a logo—it's the entire experience your customers have with your company. Here's how to build a compelling brand identity:</p>
      
      <h2>1. Define Your Brand Strategy</h2>
      <p>Before you design anything, you need to define your brand's purpose, values, target audience, and positioning. This strategic foundation will guide all your branding decisions.</p>
      
      <h2>2. Develop Your Visual Identity</h2>
      <p>Your visual identity includes your logo, color palette, typography, imagery style, and other visual elements. These should work together to create a cohesive and recognizable look.</p>
      
      <h2>3. Establish Your Brand Voice</h2>
      <p>How does your brand communicate? Your brand voice should reflect your personality and resonate with your target audience across all touchpoints.</p>
      
      <h2>4. Create Brand Guidelines</h2>
      <p>Document your brand elements in a style guide to ensure consistency across all applications, from your website to packaging to social media.</p>
      
      <h2>5. Implement Consistently</h2>
      <p>Consistency is key to building brand recognition. Ensure your brand identity is applied consistently across all customer touchpoints.</p>
      
      <p>Building a strong brand identity takes time and effort, but the investment pays off in increased recognition, customer loyalty, and business value.</p>
    `
  }
}

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-gray-600 mb-8">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>By {post.author}</span>
          </div>
          
          <div className="h-96 bg-gray-200 rounded-lg mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([slug]) => slug !== params.slug)
              .map(([slug, post]) => (
                <Card key={slug} className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    <a href={`/blog/${slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}