import { cn } from '@/lib/utils'
import './globals.css'
import { Poppins } from 'next/font/google'
import Script from 'next/script'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300','400','500','600','700','800'],
 })

export const metadata = {
  title: 'Mohsen Emami',
  description: 'Front end developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" strategy='beforeInteractive'></Script>
      <Script src="https://raw.githubusercontent.com/aptorres27/Random-constellations-particle.js-stars-background/master/particle.min.js" strategy='beforeInteractive'></Script>
      <body className={cn(poppins.className, 'container mx-auto px-20 lg:px-60')}>
        {children}
      </body>
    </html>
  )
}
