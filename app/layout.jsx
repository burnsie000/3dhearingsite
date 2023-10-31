import { OrangeBar } from './components'
import './globals.css'
import { Red_Hat_Display } from 'next/font/google'

const redhatdisplay = Red_Hat_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-red-hat-display',
 })

export const metadata = {
  title: '3D Hearing - Premium Hearing Aids at Discount in Maryland',
  description: 'Hearing Aids at Affordable Prices in Maryland, Pasadena, and More!',
  keywords: ['Hearing Aid', 'Hearing Aids', '3D Hearing', 'Oticon', 'Phonak', 'Widex', 'Resound', 'Signia', 'Starkey'],
  referrer: 'origin-when-crossorigin',
  locale: 'en_US',
  type: 'website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={redhatdisplay.className}>
        {children}
      </body>
    </html>
  )
}
