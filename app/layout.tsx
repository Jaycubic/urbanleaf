import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

// Primary font: Inter for body text
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Display font: Poppins for headings
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'UrbanLeaf - Green Growth, Urban Future',
    template: '%s | UrbanLeaf',
  },
  description: 'Designing city life that protects people and nature. UrbanLeaf brings together designers, planners, and communities to co-create green infrastructure that improves air quality and quality of life.',
  keywords: ['urban design', 'sustainability', 'green infrastructure', 'community engagement', 'air quality'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://urbanleaf.com',
    siteName: 'UrbanLeaf',
    title: 'UrbanLeaf - Green Growth, Urban Future',
    description: 'Designing city life that protects people and nature.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UrbanLeaf - Where Nature Meets Progress',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UrbanLeaf - Green Growth, Urban Future',
    description: 'Designing city life that protects people and nature.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Vanta.js dependencies for animated birds background */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.birds.min.js"></script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
