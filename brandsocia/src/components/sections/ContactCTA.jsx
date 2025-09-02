import {Button} from '@/components/ui/Button'

export default function ContactCTA() {
  return (
    <section className="py-16 gradient-bg text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help you achieve your digital marketing goals.
        </p>
        <Button href="/contact" variant="secondary" className="text-dark bg-secondary-500 hover:bg-secondary-600">
          Get Started Today
        </Button>
      </div>
    </section>
  )
}