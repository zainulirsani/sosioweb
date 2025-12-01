import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Web Sosiologi - Konsep Sosiologi",
  description: "Platform pembelajaran tentang konsep-konsep sosiologi",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico", // Ganti file favicon.ico di folder public/
    apple: "/apple-icon.png", // Untuk Apple devices (opsional)
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen" style={{ backgroundColor: "var(--bg-100)" }}>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
