import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Triple Lions Expeditions - Explore Tanzania & Beyond',
  description: 'Unforgettable safaris, cultural expeditions, and mountain adventures in East Africa\'s most spectacular destinations. Expert local guides, premium accommodations, and all-inclusive packages.',
  keywords: 'Tanzania safari, Serengeti, Kilimanjaro, Zanzibar, Ngorongoro, wildlife tours, African adventure',
  authors: [{ name: 'Triple Lions Expeditions' }],
  creator: 'Triple Lions Expeditions',
  publisher: 'Triple Lions Expeditions',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://triplelions.com',
    siteName: 'Triple Lions Expeditions',
    title: 'Triple Lions Expeditions - Explore Tanzania & Beyond',
    description: 'Unforgettable safaris, cultural expeditions, and mountain adventures in East Africa\'s most spectacular destinations.',
    images: [
      {
        url: '/TES logo HD.png',
        width: 1200,
        height: 630,
        alt: 'Triple Lions Expeditions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triple Lions Expeditions - Explore Tanzania & Beyond',
    description: 'Unforgettable safaris, cultural expeditions, and mountain adventures in East Africa\'s most spectacular destinations.',
    images: ['/TES logo HD.png'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/TES logo HD.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <WhatsAppWidget />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}