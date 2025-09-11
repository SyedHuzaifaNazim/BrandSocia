import BlogCard from './BlogCard'

const posts = [
  {
    title: '10 Social Media Trends for 2023',
    excerpt: 'Discover the latest social media trends that will shape your marketing strategy this year.',
    date: 'April 15, 2023',
    slug: 'social-media-trends-2023',
    image: 'https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg'
  },
  {
    title: 'How to Build a Strong Brand Identity',
    excerpt: 'Learn the key elements of a compelling brand identity that resonates with your audience.',
    date: 'March 28, 2023',
    slug: 'building-brand-identity',
    image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg'
  },
  {
    title: 'The Importance of Mobile-First Design',
    excerpt: 'Why mobile optimization should be a priority for every business in the digital age.',
    date: 'March 10, 2023',
    slug: 'mobile-first-design',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg'
  },
  {
    title: 'Content Marketing Strategies That Convert',
    excerpt: 'Effective content marketing approaches that drive engagement and conversions.',
    date: 'February 22, 2023',
    slug: 'content-marketing-strategies',
    image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg'
  },
  {
    title: 'UX Design Principles for Better Conversion',
    excerpt: 'How thoughtful UX design can significantly improve your conversion rates.',
    date: 'February 15, 2023',
    slug: 'ux-design-principles',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg'
  },
  {
    title: 'Email Marketing Best Practices',
    excerpt: 'Tips and strategies for creating effective email marketing campaigns.',
    date: 'January 30, 2023',
    slug: 'email-marketing-best-practices',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
  }
]

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </div>
  )
}