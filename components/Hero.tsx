'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Users, TrendingUp } from 'lucide-react'

/**
 * Hero Section Component
 * Features:
 * - Vanta Birds animated background (with fallback to static image)
 * - Overlay gradient for text legibility
 * - Left column: Headline, subheadline, CTAs
 * - Right column: Feature cards
 * - Responsive layout (stacked on mobile)
 * - WCAG AA contrast compliance
 */
interface VantaInstance {
  destroy: () => void
}

interface VantaWindow extends Window {
  VANTA?: {
    BIRDS: (config: Record<string, unknown>) => VantaInstance
  }
  THREE?: unknown
}

export function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaInstanceRef = useRef<VantaInstance | null>(null)

  // Initialize Vanta Birds animation
  useEffect(() => {
    // Check if Vanta is available (loaded from CDN)
    const vantaWindow = window as unknown as VantaWindow
    if (typeof window !== 'undefined' && vantaWindow.VANTA) {
      const VANTA = vantaWindow.VANTA

      // Only initialize if Three.js is also available
      if (vantaWindow.THREE) {
        // Destroy previous instance if it exists
        if (vantaInstanceRef.current) {
          vantaInstanceRef.current.destroy()
        }

        // Create new Vanta Birds instance
        vantaInstanceRef.current = VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 300,
          minWidth: 200,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundAlpha: 0.0, // Transparent background so we can see the gradient
          color1: 0x03a2c9, // Teal
          color2: 0x2d7e35, // Green
          wingSpan: 20.0,
          separation: 20.0,
          alignment: 50.0,
          cohesion: 50.0,
          quantity: 3, // Low quantity for subtle effect
          showLines: false,
        })
      }
    }

    // Cleanup on unmount
    return () => {
      if (vantaInstanceRef.current) {
        vantaInstanceRef.current.destroy()
      }
    }
  }, [])

  // Feature cards for right column
  const features = [
    {
      icon: TrendingUp,
      title: 'Air Quality Projects',
      description: 'Smart monitoring + green corridors',
    },
    {
      icon: Users,
      title: 'Community Gardens',
      description: 'Local action for global impact',
    },
  ]

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Vanta Birds Background Container */}
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Fallback static background image (if Vanta fails to load) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-bg.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Overlay gradient for text legibility - subtle white fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="space-y-6">
            {/* Eyebrow text */}
            <div className="inline-block">
              <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                Urban Design • Clean Air • Community
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-poppins text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Green Growth, Urban Future
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-700 max-w-md leading-relaxed">
              Designing city life that protects people and nature.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Get Involved
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50"
              >
                Explore Solutions
              </Button>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
