import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { TopHeader } from '@/components/top-header'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { AppointmentProvider } from '@/contexts/appointment-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dr. Sanjay Chaurey | Senior Consultant Surgeon - Laparoscopic & Robotic Surgery',
  description: 'Dr. Sanjay Chaurey - Senior Consultant Surgeon with 35+ years of experience in minimally invasive laparoscopic and robotic surgery, hernia repair, and anorectal treatment in Delhi.',
  keywords: [
    'Dr Sanjay Chaurey',
    'Senior Consultant Surgeon',
    'Laparoscopic Surgery',
    'Robotic Surgery',
    'Hernia Repair',
    'Minimally Invasive Surgery',
    'Anorectal Surgery',
    'Delhi Surgeon',
    'PSRI Hospital',
  ],
  authors: [{ name: 'Dr. Sanjay Chaurey' }],
  creator: 'Dr. Sanjay Chaurey',
  publisher: 'Dr. Sanjay Chaurey',
  category: 'Medical',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drsanjaychaurey.com',
    title: 'Dr. Sanjay Chaurey | Senior Consultant Surgeon',
    description: '35+ years of excellence in minimally invasive and robotic surgery',
    siteName: 'Dr. Sanjay Chaurey',
    images: [
      {
        url: '/images/dr3.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Sanjay Chaurey',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Sanjay Chaurey | Senior Consultant Surgeon',
    description: '35+ years of excellence in minimally invasive and robotic surgery',
    creator: '@DrSanjayChaurey',
    images: ['/images/dr3.png'],
  },
  alternates: {
    canonical: 'https://drsanjaychaurey.com',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Sanjay Chaurey",
    "description": "Senior Consultant Surgeon with 35+ years of experience in minimally invasive and robotic surgery",
    "url": "https://drsanjaychaurey.com",
    "telephone": "+91-9971145913",
    "email": "contact@drsanjaychaurey.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "PSRI Hospital, J Pocket, Sheikh Sarai",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110017",
      "addressCountry": "IN"
    },
    "image": "https://drsanjaychaurey.com/images/dr3.png",
    "priceRange": "$$",
    "medicalSpecialty": [
      "General Surgery",
      "Laparoscopic Surgery",
      "Robotic Surgery"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <AppointmentProvider>
          <TopHeader />
          {children}
          <WhatsAppButton />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </AppointmentProvider>
      </body>
    </html>
  )
}
