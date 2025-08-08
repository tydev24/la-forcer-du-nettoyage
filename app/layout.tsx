import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Force du Nettoyage - Nettoyage à la vapeur écologique | Snejana Dinusiuc',
  description: 'Service professionnel de nettoyage à la vapeur écologique à Brunoy (91800). Snejana Dinusiuc, 36 ans, fondatrice moldave. Résultats garantis, méthode 100% écologique sans produits chimiques.',
  keywords: 'nettoyage vapeur, écologique, Brunoy, 91800, Essonne, désinfection, calcaire, moisissures, fin de chantier, Snejana Dinusiuc',
  authors: [{ name: 'Snejana Dinusiuc' }],
  creator: 'La Force du Nettoyage',
  publisher: 'La Force du Nettoyage',
  robots: 'index, follow',
  openGraph: {
    title: 'La Force du Nettoyage - Nettoyage à la vapeur écologique',
    description: 'Pour une maison propre et une santé pure. Service professionnel de nettoyage à la vapeur à Brunoy.',
    url: 'https://laforcedunettoyage.fr',
    siteName: 'La Force du Nettoyage',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Force du Nettoyage - Nettoyage à la vapeur écologique',
    description: 'Pour une maison propre et une santé pure. Service professionnel de nettoyage à la vapeur à Brunoy.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1D6246',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
