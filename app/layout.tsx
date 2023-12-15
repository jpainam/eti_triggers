import "bootstrap/dist/css/bootstrap.min.css"; 
import './globals.css'
import { Inter } from 'next/font/google'

export const dynamic = 'force-dynamic';
export const revalidate = 0
export const metadata = {
  metadataBase: new URL('https://eti-triggers.vercel.app'),
  title: 'ETI Triggers',
  description:
    'ETI Triggers',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
