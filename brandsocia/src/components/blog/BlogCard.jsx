import {Card} from '@/components/ui/Card'
import Link from 'next/link'

export default function BlogCard({ post }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        <h3 className="text-xl font-semibold mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link 
          href={`/blog/${post.slug}`}
          className="text-primary font-semibold hover:underline"
        >
          Read more →
        </Link>
      </div>
    </Card>
  )
}