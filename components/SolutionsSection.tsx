import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

/**
 * Solutions Section Component
 * Showcases featured case studies with impact metrics
 * Features:
 * - 2-column grid layout (responsive)
 * - Case study cards with image, title, location, and impact metrics
 * - Hover effects with image zoom
 * - Impact statistics displayed prominently
 */
export function SolutionsSection() {
  // Case study data
  const caseStudies = [
    {
      title: 'Riverside Green Corridor',
      location: 'Lyon, France',
      impact: {
        label1: 'Trees Planted',
        value1: '1,250',
        label2: 'PM2.5 Reduction',
        value2: '18%',
      },
      image: '/images/hero-bg.png', // Using hero bg as placeholder
    },
    {
      title: 'Rooftop Network',
      location: 'Barcelona, Spain',
      impact: {
        label1: 'Community Gardens',
        value1: '26',
        label2: 'Hours Volunteered',
        value2: '4,220',
      },
      image: '/images/hero-bg.png', // Using hero bg as placeholder
    },
  ]

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Real-world impact from our design-led, community-driven approach to
            urban sustainability.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-gray-200">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-8">
                {/* Location Badge */}
                <span className="inline-block text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-4">
                  {study.location}
                </span>

                {/* Title */}
                <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
                  {study.title}
                </h3>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      {study.impact.label1}
                    </p>
                    <p className="font-poppins text-3xl font-bold text-green-600">
                      {study.impact.value1}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      {study.impact.label2}
                    </p>
                    <p className="font-poppins text-3xl font-bold text-teal-600">
                      {study.impact.value2}
                    </p>
                  </div>
                </div>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
