import type React from "react"
import "./globals.css"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import type { Metadata } from "next"
import CursorAura from "@/components/cursorAura"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "SoftSell - The Easiest Way to Sell Your Software Licenses",
  description:
    "SoftSell helps businesses sell their unused software licenses quickly and at the best price. Get an instant valuation today.",
  keywords: "software resale, license resale, sell software licenses, software marketplace",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <CursorAura />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
