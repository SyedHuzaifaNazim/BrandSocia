// app/services/graphic-designing/page.jsx
'use client';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function GraphicDesigning() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-violet-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-2xl bg-white/20 flex items-center justify-center text-4xl backdrop-blur-sm">
              ✏️
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Graphic Designing</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Our graphic design services include creating visual concepts that inspire, inform, and captivate consumers. We develop the overall layout and production design for various applications.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Graphic Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Logo Design</h3>
              </div>
              <p className="text-gray-600">
                Professional logo designs that represent your brand identity and make a memorable impression.
              </p>
            </Card>

            <Card className="p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 极速赛车开奖直播 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Brochures & Flyers</h3>
              </div>
              <p className="text-gray-600">
                Eye-catching print materials that effectively communicate your message and promote your offerings.
              </p>
            </Card>

            <Card className="p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0极速赛车开奖直播 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 极速赛车开奖直播0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Business Cards</h3>
              </div>
              <p className="text-gray-600">
                Professionally designed business cards that leave a lasting impression and facilitate networking.
              </p>
            </Card>

            <Card className="p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb极速赛车开奖直播-4">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4a2 2 0 11-4 0 2 2 0 014 0zM6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Social Media Graphics</h3>
              </div>
              <p className="text-gray-600">
                Engaging visuals for social media platforms that increase engagement and brand visibility.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to elevate your visual identity?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create stunning visual designs that capture attention and communicate your message effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get Started
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View Design Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}