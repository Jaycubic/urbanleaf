import { Button } from '@/components/ui/button'
import { Sprout, Users, BookOpen, Leaf } from 'lucide-react'

/**
 * Get Involved Section Component
 * Showcases community programs and engagement opportunities
 * Features:
 * - 4-column grid of program cards
 * - Icon + title + description for each program
 * - CTA button for each program
 * - Responsive layout (stacked on mobile)
 */
export function GetInvolvedSection() {
  // Community programs data
  const programs = [
    {
      icon: Sprout,
      title: 'Community Gardens',
      description:
        'Join local gardening initiatives and grow fresh produce while building community connections.',
      cta: 'Start Gardening',
    },
    {
      icon: Users,
      title: 'Volunteer Days',
      description:
        'Participate in hands-on environmental projects and make a direct impact in your city.',
      cta: 'Volunteer Now',
    },
    {
      icon: BookOpen,
      title: 'Workshops',
      description:
        'Learn about sustainable urban design, green infrastructure, and environmental science.',
      cta: 'Explore Workshops',
    },
    {
      icon: Leaf,
      title: 'Gardening Kits',
      description:
        'Get everything you need to start your own green space at home or in your neighborhood.',
      cta: 'Order Kit',
    },
  ]

  return (
    <section id="get-involved" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community of designers, planners, and environmental
            advocates. Together, we're building greener cities.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-2">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* CTA Button */}
                <Button
                  size="sm"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  {program.cta}
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
