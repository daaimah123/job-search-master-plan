import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { DataProvider } from "@/components/providers/data-provider"
import Footer from "@/components/footer"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <DataProvider>
            <div className="min-h-screen flex flex-col">
              <div className="flex-grow">{children}</div>
              <Footer />
            </div>
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}