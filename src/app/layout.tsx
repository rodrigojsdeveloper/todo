import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/contexts'
import { cn } from '@/utils/cn'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ToDo',
  description: 'ToDo streamlines task management with marking and deletion.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn('scroll-smooth font-inter antialiased', inter.className)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
