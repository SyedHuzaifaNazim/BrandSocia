import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            BrandSocia
          </Link>
          
          <Navigation />
        </div>
      </div>
    </header>
  )
} 