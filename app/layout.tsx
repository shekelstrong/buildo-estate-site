import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI-подбор недвижимости — Buildo Estate",
  description: "AI-аналитика рынка + персональный shortlist объявлений",
  themeColor: "#EF4444",
  openGraph: {
    title: "Buildo Estate",
    description: "AI-аналитика рынка + персональный shortlist объявлений",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="dark">
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  )
}
