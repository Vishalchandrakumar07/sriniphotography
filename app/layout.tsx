import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Srini Photography - Portfolio',
  description: 'Photographer Portfolio showcasing stunning photography work',
  generator: 'V7 Tech',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* You can also use PNG or SVG formats like below:
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> 
        */}
      </head>
      <body>{children}</body>
    </html>
  )
}

