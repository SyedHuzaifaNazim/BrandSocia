import { notFound } from 'next/navigation'
import {Card} from '@/components/ui/Card'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ColorGradientBackground from '@/components/ColorGradientBackground'
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground'

// This would typically come from a CMS or database
const blogPosts = {
  'social-media-trends-2023': {
    title: '10 Social Media Trends for 2023',
    date: 'April 15, 2023',
    author: 'BrandSocia',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
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
    author: 'BrandSocia',
    image: 'https://img.freepik.com/premium-photo/low-angle-view-text-diary-table_1048944-11879979.jpg?w=1480',
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
  },
  'social-media-marketing-strategies': {
    id: 'social-media-marketing-strategies',
    title: 'Social Media Marketing Strategies for 2023',
    date: 'April 20, 2023',
    author: 'BrandSocia',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    content: `
      <p>Social media marketing continues to be a powerful tool for businesses looking to connect with their audience. Here are some effective strategies to consider for 2023:</p>
      
      <h2>1. Leverage Social Media Platforms</h2>
      <p>Not all social media platforms are created equal. Facebook, Instagram, Twitter, and LinkedIn each have unique features and audiences. Leverage each platform to reach your target audience effectively.</p>
      
      <h2>2. Use Engaging Content</h2>
      <p>Create content that resonates with your audience. Whether it's photos, videos, or interactive posts, make sure your content is engaging and shares your brand's values.</p>
      
      <h2>3. Engage with Your Audience</h2>
      <p>Build relationships with your followers by responding to comments, messages, and mentions. Show your appreciation and create a sense of community around your brand.</p>
      
      <h2>4. Leverage Social Media Analytics</h2>
      <p>Use social media analytics tools to track your performance and understand what works best for your brand. This data can help you optimize your marketing strategies.</p>
      
      <h2>5. Stay Ahead of the Trends</h2>
      <p>Stay updated on the latest social media trends and adjust your strategy accordingly. This will help you remain relevant and engaging with your audience.</p>
      
      <h2>6. Collaborate with Influencers</h2>
      <p>Partner with influencers who align with your brand values and reach your target audience. Collaborative campaigns can boost your brand visibility and engagement.</p>
      
      <h2>7. Measure and Analyze Results</h2>
      <p>Track the performance of your social media campaigns using analytics tools. Analyze the results to identify what works best and make data-driven decisions.</p>
      
      <p>By implementing these strategies, you can harness the power of social media to connect with your audience, build brand loyalty, and drive business growth.</p>
    `
  },
  'mobile-first-design': {
    id: 'mobile-first-design',
    title: 'Mobile-First Design: Why It Matters',
    date: 'April 10, 2023',
    author: 'BrandSocia',
    image: 'https://images.unsplash.com/photo-1641437741849-6805c3b7dcc4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
      <p>Mobile-first design has become a standard practice in web development. Here's why it matters:</p>
      
      <h2>1. Improved User Experience</h2>
      <p>Mobile users have limited screen space, so it's essential to optimize your website for mobile devices. A mobile-first design ensures that your website is accessible and user-friendly on all devices.</p>
      
      <h2>2. Better Search Engine Optimization</h2>
      <p>Mobile users rely on search engines to find information. A mobile-first design ensures that your website is optimized for mobile search, leading to higher visibility and more traffic.</p>
      
      <h2>3. Increased Engagement</h2>
      <p>Mobile users are more engaged with interactive elements like videos and social sharing. A mobile-first design allows you to leverage these features to increase user engagement.</p>
      
      <h2>4. Future-Proofing</h2>
      <p>As more people switch to mobile devices, a mobile-first design ensures that your website is future-proof and ready for the changing digital landscape.</p>
      
      <p>By prioritizing mobile-first design, you can provide a seamless and enjoyable experience for your users, regardless of the device they're using.</p>
    `
  },
  'ux-design-principles': {
    id: 'ux-design-principles',
    title: 'UX Design Principles: A Comprehensive Guide',
    date: 'April 25, 2023',
    author: 'BrandSocia',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    content: `
      <p>UX design principles are essential for creating user-centered and enjoyable digital experiences. Here's a comprehensive guide to some of the key principles:</p>
      
      <h2>1. Usability</h2>
      <p>Usability is the ease with which a product can be used. It's about creating interfaces that are intuitive, easy to navigate, and free of errors.</p>
      
      <h2>2. Accessibility</h2>
      <p>Accessibility ensures that your product is usable by everyone, regardless of their abilities. It's about creating inclusive designs that work for all users.</p>
      
      <h2>3. Efficiency</h2>
      <p>Efficiency refers to the speed and ease with which users can complete tasks. It's about creating interfaces that are optimized for performance.</p>
      
      <h2>4. Consistency</h2>
      <p>Consistency is about creating a unified look and feel across your product. It's about creating a cohesive user experience.</p>
      
      <h2>5. Feedback</h2>
      <p>Feedback is about providing users with information about their actions. It's about creating a sense of control and ownership.</p>
      
      <p>By following these UX design principles, you can create products that are user-centered, accessible, and efficient. This will help you build trust with your users and drive business growth.</p>
    `
  },
  'email-marketing-best-practices': {
    id: 'email-marketing-best-practices',
    title: 'Email Marketing Best Practices',
    date: 'May 1, 2023',
    author: 'BrandSocia',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
    content: `
      <p>Email marketing is a powerful tool for businesses to connect with their audience and drive engagement. Here are some best practices to follow:</p>
      
      <h2>1. Build a Subscriber List</h2>
      <p>Create a subscription form on your website and encourage visitors to sign up. This will help you build a loyal subscriber list and keep your audience engaged.</p>
      
      <h2>2. Create Engaging Content</h2>
      <p>Send regular emails that are relevant to your audience and provide value. Use compelling subject lines and include personal touches to make your emails engaging.</p>

      <h2>3. Optimize for Mobile</h2>
      <p>Email clients on mobile devices have limited screen space, so it's essential to optimize your emails for mobile devices. Use responsive design and avoid long lines of text.</p>
      
      <h2>4. Test and Analyze</h2>
      <p>Test your emails on different devices and email clients to ensure they display correctly. Use analytics tools to track the performance of your emails and make data-driven decisions.</p>
      
      <h2>5. Build Relationships</h2>
      <p>Email marketing is not just about sending emails. It's about building relationships with your audience. Use email marketing to nurture leads, build customer relationships, and drive sales.</p>
      
      <p>By following these best practices, you can create effective email campaigns that drive engagement, convert subscribers, and build brand loyalty.</p>
    `
  },
  'content-marketing-strategies': {
    id: 'content-marketing-strategies',
    title: 'Content Marketing Strategies: A Comprehensive Guide',
    date: 'May 10, 2023',
    author: 'BrandSocia',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    content: `
      <p>Content marketing is a powerful strategy for businesses to reach their target audience and drive engagement. Here's a comprehensive guide to some of the key strategies:</p>
      
      <h2>1. Blogging</h2>
      <p>Blogging is a great way to share your knowledge, insights, and experiences with your audience. It's also a great way to build a following and drive traffic to your website.</p>
      
      <h2>2. Social Media</h2>
      <p>Social media platforms like Facebook, Twitter, and Instagram are a great way to connect with your audience and drive engagement. Use social media to share your content, engage with your followers, and build a community.</p>
      
      <h2>3. Video Content</h2>
      <p>Video content is becoming increasingly popular and can be a powerful way to engage your audience. Create educational, entertaining, or promotional videos to share your message effectively.</p>

      <h2>4. Email Newsletters</h2>
      <p>Regular email newsletters help you stay connected with your audience and share valuable content directly to their inbox. Focus on providing value and maintaining consistent communication.</p>

      <h2>5. Infographics</h2>
      <p>Visual content like infographics can help explain complex information in an easy-to-understand format. They're highly shareable and can boost engagement across platforms.</p>

      <h2>6. Podcasting</h2>
      <p>Podcasting allows you to reach audiences who prefer audio content. It's an intimate medium that helps build strong connections with your listeners.</p>

      <p>Remember that successful content marketing requires consistency, quality, and a deep understanding of your target audience. Focus on creating valuable content that addresses your audience's needs and interests.</p>
    `
  }
}

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    notFound()
  }
  
  return (
    <>
    <Header />
    <ColorGradientBackground />
    <AnimatedGradientBackground />
    <div className="h-20"></div>
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
    <Footer />
  </>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}