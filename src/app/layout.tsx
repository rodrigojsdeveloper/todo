import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Providers from '@/contexts'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ToDo',
  description: 'ToDo streamlines task management with marking and deletion.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
