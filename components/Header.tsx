'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

/**
 * Header Component
 * Sticky navigation bar with logo, menu items, and CTA button
 * Features:
 * - Sticky positioning with backdrop blur on scroll
 * - Mobile hamburger menu with slide-over
 * - Smooth scroll navigation to sections
 * - Responsive design (mobile/tablet/desktop)
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll position to add backdrop blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation menu items
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Get Involved', href: '#get-involved' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ]

  // Handle smooth scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex-shrink-0 flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="UrbanLeaf - Where Nature Meets Progress"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="hidden sm:inline font-poppins font-semibold text-lg text-gray-900">
              UrbanLeaf
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50"
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
