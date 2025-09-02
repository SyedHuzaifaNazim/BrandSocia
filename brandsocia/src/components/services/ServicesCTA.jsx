export default function ServiceCTA({ title, description, buttonText }) {
  return (
    <section className="py-16 bg-primary-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">{title}</h2>
        <p className="text-lg mb-8 text-gray-800">{description}</p>
        <button className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          {buttonText}
        </button>
      </div>
    </section>
  )
}