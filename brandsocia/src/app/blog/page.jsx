import BlogGrid from '@/components/blog/BlogGrid'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Blog() {
  return (
    <>
    <Header />
    <div className='h-20'></div>
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest insights and trends in digital marketing, design, and technology.
          </p>
        </div>
        
        <BlogGrid />
      </div>
    </div>
    <Footer />
    </>
  )
}