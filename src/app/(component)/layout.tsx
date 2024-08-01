import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner/sonner'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A-Peak Project',
  description: 'Test project for A-Peak',
  openGraph: {
    images: ['/favicon.ico'],
    url: 'https://example.com',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  viewportFit: 'contain',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'w-screen h-screen flex')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
