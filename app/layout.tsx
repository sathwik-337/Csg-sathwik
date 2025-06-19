import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth-context"
import { ProgressProvider } from "@/lib/progress-context"
import { ChatButton } from "@/components/chat/chat-button"
import { AuthPersistence } from "@/components/auth-persistence"
import { SessionInitializer } from "@/components/session-initializer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cyber Safe Girl - Beti Bachao, Cyber Crime Se.",
  description: "Cyber Safe Girl awareness initiative for digital safety.",
}

export const viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="theme-color" content="#000000" /> */}
        <meta
          name="description"
          content="Cyber Safe Girl awareness initiative for digital safety."
        />
        <link
          rel="icon"
          href="https://cybersafegirl.com/CSG-7.0-Banner.png"
        />
        {/* <link
          rel="apple-touch-icon"
          href="https://cybersafegirl.com/CSG-7.0-Banner.png"
        />
        <link
          rel="manifest"
          href="https://cybersafegirl.com/CSG-7.0-Banner.png"
        /> */}
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <ProgressProvider>
              <SessionInitializer />
              <AuthPersistence />
              {children}
            </ProgressProvider>
          </AuthProvider>
        </ThemeProvider>
        <ChatButton />
      </body>
    </html>
  )
}
