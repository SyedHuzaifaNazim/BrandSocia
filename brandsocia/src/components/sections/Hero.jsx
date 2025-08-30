import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Creative Digital Solutions for Your Brand
          </h1>
          <p className="text-xl mb-8">
            We help brands grow with innovative digital strategies and stunning design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/services" variant="secondary">
              Our Services
            </Button>
            <Button href="/contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}