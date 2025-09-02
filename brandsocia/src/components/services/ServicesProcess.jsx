export default function ServiceProcess({ title, steps }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold mb-2 text-black">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}