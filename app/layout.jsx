import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Alpha Store : The True Genuineness',
  description: 'Premium e-commerce platform for India',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-alpha-light font-alpha-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}