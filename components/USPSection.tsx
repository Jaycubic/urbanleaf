import { Lightbulb, Users, BarChart3 } from 'lucide-react'

/**
 * USP Section Component
 * Displays three key value propositions in a responsive grid
 * Features:
 * - 3-column layout on desktop, stacked on mobile
 * - Icon + title + description for each USP
 * - Hover effects with subtle lift animation
 * - Consistent spacing and typography
 */
export function USPSection() {
  // USP data with icons and descriptions
  const usps = [
    {
      icon: Lightbulb,
      title: 'Design-led Solutions',
      description:
        'From concept to build: green roofs, pocket parks, & bioswales.',
    },
    {
      icon: Users,
      title: 'Community-driven',
      description:
        'Workshops, local gardening kits, and volunteer programs.',
    },
    {
      icon: BarChart3,
      title: 'Data-backed Impact',
      description:
        'Air-quality monitoring, KPIs, and measurable outcomes.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why UrbanLeaf
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine design expertise, community engagement, and data-driven
            insights to create lasting urban transformation.
          </p>
        </div>

        {/* USP Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-3">
                  {usp.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {usp.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
