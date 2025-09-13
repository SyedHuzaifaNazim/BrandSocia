'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [activeService, setActiveService] = useState('website');
  const [activePlan, setActivePlan] = useState({
    website: 'elite',
    ecommerce: 'kickstarter',
    logo: 'professional',
    seo: 'venture',
    branding: 'poster'
  });

  const services = [
    { id: 'website', name: 'Website', icon: '🌐' },
    { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
    { id: 'logo', name: 'Logo Design', icon: '🎨' },
    { id: 'seo', name: 'SEO', icon: '📈' },
    { id: 'branding', name: 'Branding', icon: '🏢' }
  ];

  const plans = {
    website: [
      { 
        id: 'basic', 
        name: 'Basic', 
        price: '$199', 
        originalPrice: '$666',
        popular: false,
        features: [
          '3 Page Website',
          '2 Stock Images',
          '1 jQuery Slider Banner',
          'Contact/Query Form',
          '48 to 72 hours TAT',
          'Complete Development',
          '100% Satisfaction Guarantee',
          '100% Unique Design Guarantee',
          '100% Ownership Rights *',
          { text: 'Conceptual and Dynamic Website', disabled: true },
          { text: 'Mobile Responsive', disabled: true },
          { text: 'Online Reservation/Appointment Tool (Optional)', disabled: true },
          { text: 'Online Payment Integration (Optional)', disabled: true },
          { text: 'Custom Forms', disabled: true },
          { text: 'Lead Capturing Forms (Optional)', disabled: true },
          { text: 'Newsletter Subscription (Optional)', disabled: true },
          { text: 'Newsfeed Integration', disabled: true },
          { text: 'CMS / Admin Panel Support', disabled: true },
          { text: 'Social Media Integration', disabled: true }
        ]
      },
      { 
        id: 'professional', 
        name: 'Professional', 
        price: '$699', 
        originalPrice: '$1900',
        popular: false,
        features: [
          '10 Unique Pages Website',
          'CMS / Admin Panel Support',
          '12 Stock images',
          '5 Banner Designs',
          '1 jQuery Slider Banner',
          'FREE Google Friendly Sitemap',
          '48 to 72 hours TAT',
          'Complete Deployment',
          '100% Satisfaction Guarantee',
          '100% Unique Design Guarantee',
          '100% Ownership Rights',
          { text: 'Conceptual and Dynamic Website', disabled: true },
          { text: 'Mobile Responsive', disabled: true },
          { text: 'Online Reservation/Appointment Tool (Optional)', disabled: true },
          { text: 'Online Payment Integration (Optional)', disabled: true },
          { text: 'Custom Forms', disabled: true },
          { text: 'Lead Capturing Forms (Optional)', disabled: true },
          { text: 'Striking Hover Effects', disabled: true },
          { text: 'Newsletter Subscription (Optional)', disabled: true },
          { text: 'Newsfeed Integration', disabled: true }
        ]
      },
      { 
        id: 'elite', 
        name: 'Elite', 
        price: '$1299', 
        originalPrice: '$4400',
        popular: true,
        features: [
          'Upto 15 Unique Pages Website',
          'Conceptual and Dynamic Website',
          'Mobile Responsive',
          'Online Reservation/Appointment Tool (Optional)',
          'Online Payment Integration (Optional)',
          'Custom Forms',
          'Lead Capturing Forms (Optional)',
          'Striking Hover Effects',
          'Newsletter Subscription (Optional)',
          'Newsfeed Integration',
          'Social Media Integration',
          'Search Engine Submission',
          '5 Stock Photos',
          '3 Unique Banner Design',
          '1 jQuery Slider Banner',
          '48 to 72 hours TAT',
          'Complete Deployment',
          '100% Satisfaction Guarantee',
          '100% Unique Design Guarantee',
          '100% Ownership Rights *'
        ]
      }
    ],
    ecommerce: [
      { 
        id: 'kickstarter', 
        name: 'Kickstarter', 
        price: '$600', 
        originalPrice: '$1200',
        popular: false,
        features: [
          'Up-to 100 Products',
          'Content Management System (CMS)',
          'Mini Shopping Cart Integration',
          'Payment Module Integration',
          'Easy Product Search',
          'Dedicated designer & developer',
          'Unlimited Revisions',
          '100% Satisfaction Guarantee',
          '100% Unique Design Guarantee',
          '100% Ownership Rights',
          { text: 'Customized Design', disabled: true },
          { text: 'Full Shopping Cart Integration', disabled: true },
          { text: 'Product Reviews', disabled: true },
          { text: '5 Promotional Banners', disabled: true },
          { text: 'Team of Expert Designers & Developers', disabled: true },
          { text: 'Unlimited Pages Website with Unique Design', disabled: true }
        ]
      },
      { 
        id: 'dynamic', 
        name: 'Dynamic', 
        price: '$1394', 
        originalPrice: '$2788',
        popular: true,
        features: [
          'Customized Design',
          'Up-to 500 Products',
          'Content Management System (CMS)',
          'Full Shopping Cart Integration',
          'Payment Module Integration',
          'Easy Product Search',
          'Product Reviews',
          '5 Promotional Banners',
          'Team of Expert Designers & Developers',
          'Unlimited Revisions',
          '100% Satisfaction Guarantee',
          '100% Unique Design Guarantee',
          '100% Ownership Rights *',
          { text: 'Unlimited Pages Website with Unique Design', disabled: true },
          { text: 'UNLIMITED Logo Design Concepts', disabled: true },
          { text: 'By 6 Award Winning Designers', disabled: true }
        ]
      },
      { 
        id: 'highend', 
        name: 'High-End', 
        price: '$3694', 
        originalPrice: '$7388',
        popular: false,
        features: [
          'Unlimited Pages Website with Unique Design',
          'UNLIMITED Logo Design Concepts',
          'By 6 Award Winning Designers',
          'Icon Design',
          'UNLIMITED Revisions',
          'Print Media',
          'Stationary Design',
          'Invoice Design, Email Signature',
          'Bi-Fold Brochure (OR) 2 Sided Flyer Design',
          'Product Catalog Design',
          'Sign age Design (OR) Label Design',
          'T-Shirt Design (OR) Car Wrap Design',
          'Website',
          'E-Commerce Store Design',
          'Product Detail Page Design',
          'Unique Banner Slider',
          'Featured Products Showcase',
          'Full Shopping Cart Integration'
        ]
      }
    ],
    logo: [
      { 
        id: 'basic', 
        name: 'Basic', 
        price: '$39', 
        originalPrice: '$120',
        popular: false,
        features: [
          '2 Custom Logo Design Concepts',
          '1 Dedicated Designer',
          '4 REVISIONS',
          '48 to 72 hours TAT',
          '100% Unique Design Guarantee',
          '100% Satisfaction Guarantee',
          '100% Ownership Rights *',
          { text: 'Stationary Design (Business Card, Letterhead, Envelope)', disabled: true },
          { text: 'FREE MS Word Letterhead', disabled: true },
          { text: 'All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)', disabled: true }
        ]
      },
      { 
        id: 'startup', 
        name: 'Startup', 
        price: '$79', 
        originalPrice: '$250',
        popular: false,
        features: [
          '5 Custom Logo Design Concepts',
          'By 2 Designers',
          'UNLIMITED Revisions',
          '48 to 72 hours TAT',
          '100% Satisfaction Guarantee',
          '100% Unique Design Guarantee',
          '100% Ownership Rights *',
          { text: 'Stationary Design (Business Card, Letterhead, Envelope)', disabled: true },
          { text: 'FREE MS Word Letterhead', disabled: true },
          { text: 'All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)', disabled: true }
        ]
      },
      { 
        id: 'professional', 
        name: 'Professional', 
        price: '$129', 
        originalPrice: '$410',
        popular: true,
        features: [
          'UNLIMITED Logo Design Concepts',
          'By 4 Designers',
          'UNLIMITED Revisions',
          'Stationary Design (Business Card, Letterhead, Envelope)',
          '48 to 72 hours TAT',
          'FREE MS Word Letterhead',
          'All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)',
          '100% Satisfaction Guarantee',
          '100% Unique Design Guarantee',
          '100% Ownership Rights *'
        ]
      }
    ],
    seo: [
      { 
        id: 'startup', 
        name: 'Startup Plan', 
        price: '$350', 
        originalPrice: '$700',
        popular: false,
        features: [
          'Campaign Setup And Optimization',
          'Website Audit',
          'Pages Optimized (10 pages)',
          'Keyword Research',
          'Keyword Grouping',
          'Keyword Mapping',
          'On-Page Optimization',
          'SEO Road Map',
          'Blog Creation',
          'Webpage Copywriting (3 pages , 350 words per page)',
          'Meta Description Optimization (10 meta description)',
          'Meta Keyword Optimization (10 meta keywords)',
          'Domain Redirect Optimization (10 domain redirects)',
          'xml Sitemap Optimization',
          'Robots.txt Check',
          'URL Rewrites (10 URL rewrites)',
          'Broken Link Report',
          'Rich Snippet Recommendations'
        ]
      },
      { 
        id: 'scaling', 
        name: 'Scaling Plan', 
        price: '$700', 
        originalPrice: '$1400',
        popular: false,
        features: [
          'Business Analysis',
          'Consumer Analysis',
          'Competitor Analysis',
          '15 Pages Keyword Targeted',
          'Webpage Optimization',
          'Meta Tags Creation',
          'Keyword Optimization',
          'Image Optimization',
          'Inclusion of anchors',
          'Tracking & Analysis',
          'Google Analytics Installation',
          'Google Webmaster Installation',
          'Call To Action Plan',
          'Creation of Sitemaps',
          'Reporting',
          'Monthly Reporting',
          'Recommendation',
          'Email Support',
          'Phone Support'
        ]
      },
      { 
        id: 'venture', 
        name: 'Venture Plan', 
        price: '$1200', 
        originalPrice: '$2400',
        popular: true,
        features: [
          'Prior Analysis',
          'Business Analysis',
          'Consumer Analysis',
          'Competitor Analysis',
          '30 Pages Keyword Targeted',
          'Webpage Optimization',
          'Meta Tags Creation',
          'Keyword Optimization',
          'Image Optimization',
          'Inclusion of anchors Tags',
          'Inclusion of anchors Indexing Modifications',
          'Tracking & Analysis',
          'Google Places Inclusions',
          'Google Analytics Installation',
          'Google Webmaster Installation',
          'Call To Action Plan',
          'Creation of Sitemaps',
          'Reporting',
          'Monthly Reporting'
        ]
      }
    ],
    branding: [
      { 
        id: 'stationary', 
        name: 'Stationary', 
        price: '$99', 
        originalPrice: '$370',
        popular: false,
        features: [
          '1 Business Card Design',
          '1 Letterhead Design',
          '1 Envelope Design',
          'Dedicated Designer',
          '3 Design Revisions',
          'Turnaround Time 24 - 48 Hours',
          'Features:',
          '100% Satisfaction Guaranteed',
          '100% Unique Design Guarantee',
          '100% Ownership Rights',
          'All Final File Formats'
        ]
      },
      { 
        id: 'brochure', 
        name: 'Brochure/Flyer', 
        price: '$149', 
        originalPrice: '$979',
        popular: false,
        features: [
          '2 Design Concepts (Trifold / Bi-fold)',
          'Dedicated Designer',
          'Dedicated Account Manager',
          'Unlimited Revisions',
          'Turnaround Time - 48 - 72 Hours',
          '100% Satisfaction Guaranteed',
          '100% Unique Design Guarantee',
          '100% Ownership Rights',
          'All Final File Formats'
        ]
      },
      { 
        id: 'poster', 
        name: 'Poster Design', 
        price: '$299', 
        originalPrice: '$700',
        popular: true,
        features: [
          '1 Unique Design',
          '3 Design Concepts',
          'Dedicated Designer',
          '2 Design Revisions',
          'Turnaround Time - 48 - 72 Hours',
          'Features:',
          '100% Satisfaction Guaranteed',
          '100% Unique Design Guarantee',
          '100% Ownership Rights',
          'All Final File Formats'
        ]
      }
    ]
  };

  const handlePlanChange = (service, planId) => {
    setActivePlan(prev => ({
      ...prev,
      [service]: planId
    }));
  };

  return (
    <section className="relative py-16 bg-cover bg-center bg-no-repeat  rounded-md" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149007169.jpg?t=st=1757746781~exp=1757750381~hmac=cd57f99ccb1240cf00f2ffe16cf7b3455856f95c423a982e58f0f2a6df5a7618&w=1480')" }}>
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-black">Better Packages, Better Prices</h3>
          <p className="text-black-100 mt-2 max-w-2xl mx-auto">
            Choose from our premium service packages designed to meet your business needs and budget
          </p>
        </div>

        {/* Service Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {services.map(service => (
              <button
                key={service.id}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeService === service.id
                    ? 'bg-gradient-to-r from-orange-600 to-yellow-600 text-black shadow-lg'
                    : 'bg-transparent text-gray-700 shadow-md hover:shadow-lg hover:bg-blue-50'
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <span className="text-lg">{service.icon}</span>
                {service.name}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Content */}
        <div className="bg-transparent rounded-xl shadow-2xl overflow-hidden border border-blue-100">
          <div className="flex flex-col lg:flex-row">
            {/* Plan Selection Sidebar */}
            <div className="lg:w-1/3 bg-transparent p-6 border-r border-gray-200">
              <h4 className="font-bold text-gray-800 text-lg mb-4">Select a Plan</h4>
              <div className="space-y-4">
                {plans[activeService]?.map(plan => (
                  <button
                    key={plan.id}
                    className={`w-full text-left p-4 rounded-lg transition-all relative ${
                      activePlan[activeService] === plan.id
                        ? 'bg-gradient-to-r from-orange-600 to-yellow-600 text-white shadow-md transform scale-[1.02]'
                        : 'bg-transparent text-gray-700 hover:shadow-md border border-orange-100'
                    }`}
                    onClick={() => handlePlanChange(activeService, plan.id)}
                  >
                    {plan.popular && (
                      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{plan.name}</span>
                      <span className="text-sm">
                        {plan.price}
                        <sub className="ml-1 text-xs">
                          /<del>{plan.originalPrice}</del>
                        </sub>
                      </span>
                    </div>
                    <div className="text-xs mt-1">
                      {plan.popular ? 'Most popular choice' : 'Great value'}
                    </div>
                  </button>
                ))}
                <div className="text-center p-3 rounded-lg bg-blue-100 text-blue-800 border border-blue-200 text-sm">
                  * Rush Delivery available for all plans
                </div>
              </div>
            </div>

            {/* Plan Details */}
            <div className="lg:w-2/3 p-6">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Exceptional services with unbeatable prices!
                </h4>
                <p className="text-gray-600">
                  Check out our services for your next product & choose what suits you best.
                </p>
              </div>

              {plans[activeService]?.map(plan => (
                <div
                  key={plan.id}
                  className={activePlan[activeService] === plan.id ? 'block' : 'hidden'}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-gray-800">{plan.name}</h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{plan.price}</div>
                      <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h5 className="font-semibold text-gray-700 mb-3">What's included:</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className={`flex items-start text-sm ${
                            typeof feature === 'object' && feature.disabled
                              ? 'text-gray-400 line-through'
                              : 'text-gray-700'
                          }`}
                        >
                          <span className="mr-2 mt-0.5 flex-shrink-0">
                            {typeof feature === 'object' && feature.disabled ? (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          <span>{typeof feature === 'object' ? feature.text : feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex-1 flex items-center justify-center shadow-md">
                      Order Now
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition-all flex-1">
                      Request Custom Quote
                    </button>
                  </div>
                  
                  <div className="mt-4 text-sm text-gray-500 text-center">
                    All plans include 30-day money-back guarantee
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-black">
          <p className="font-medium">All packages come with a 30-day money-back guarantee</p>
          <p className="text-sm mt-2">Need a custom solution? <a href="#" className="underline font-medium">Contact our team</a></p>
        </div>
      </div>
    </section>
  );
}