import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Providers from '@/contexts'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'ToDo',
  description: 'ToDo streamlines task management with marking and deletion.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${inter.variable} font-inter`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
