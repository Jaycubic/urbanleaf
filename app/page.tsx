import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { USPSection } from '@/components/USPSection'
import { SolutionsSection } from '@/components/SolutionsSection'
import { GetInvolvedSection } from '@/components/GetInvolvedSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

/**
 * Home Page
 * Main landing page for UrbanLeaf website
 * Includes all major sections:
 * - Header with navigation
 * - Hero section with Vanta Birds animation
 * - USP section (Why UrbanLeaf)
 * - Solutions/Case Studies
 * - Get Involved programs
 * - Contact section
 * - Footer
 */
export default function Home() {
  return (
    <main className="w-full">
      {/* Fixed Header */}
      <Header />

      {/* Hero Section with Vanta Birds */}
      <Hero />

      {/* USP Section */}
      <USPSection />

      {/* Solutions/Case Studies */}
      <SolutionsSection />

      {/* Get Involved Programs */}
      <GetInvolvedSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
