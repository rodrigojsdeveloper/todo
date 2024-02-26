import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Providers from '@/contexts'
import { cn } from '@/utils/cn'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ToDo',
  description: 'ToDo streamlines task management with marking and deletion.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn('font-inter antialiased', inter.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
