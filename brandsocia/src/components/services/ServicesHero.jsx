import Image from 'next/image'

export default function ServiceHero({ title, description, image }) {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">{title}</h1>
            <p className="text-lg text-gray-800 mb-8">{description}</p>
            <button className="px-8 py-3 bg-primary-500 text-black rounded-lg font-semibold hover:bg-primary-600 transition-colors">
              Get Started
            </button>
          </div>
          <div className="relative h-80 md:h-96">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}