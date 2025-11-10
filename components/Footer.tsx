import Image from 'next/image'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

/**
 * Footer Component
 * Features:
 * - Multi-column layout with links
 * - Social media links
 * - Copyright information
 * - Responsive design
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  // Footer column data
  const footerColumns = [
    {
      title: 'UrbanLeaf',
      links: [
        { text: 'About', href: '#about' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
      ],
    },
    {
      title: 'Programs',
      links: [
        { text: 'Community Gardens', href: '#get-involved' },
        { text: 'Workshops', href: '#' },
        { text: 'Volunteer', href: '#' },
      ],
    },
  ]

  // Social media links
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="UrbanLeaf"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-poppins font-semibold text-lg text-white">
                UrbanLeaf
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Designing cities that breathe. Building green infrastructure for a
              sustainable urban future.
            </p>
          </div>

          {/* Footer Links Columns */}
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h3 className="font-poppins font-semibold text-white mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          {/* Social Links and Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {currentYear} UrbanLeaf. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
