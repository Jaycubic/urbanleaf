'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Phone, MapPin } from 'lucide-react'

/**
 * Contact Section Component
 * Features:
 * - Contact information display
 * - Newsletter signup form
 * - Contact details (email, phone, address)
 * - Responsive layout
 */
export function ContactSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Handle newsletter signup
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal-600 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    2088 Graphic Road
                    <br />
                    Lyon, France 11425
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-teal-600 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:hello@urbanleaf.com"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    hello@urbanleaf.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-teal-600 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a
                    href="tel:+33123456789"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Newsletter Signup */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest updates on urban
              sustainability projects and community initiatives.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border-gray-300"
              />
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
              >
                Subscribe
              </Button>
            </form>

            {/* Success Message */}
            {submitted && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 text-sm font-medium">
                  Thanks — we'll be in touch!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
