import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pranjal Shukla | Portfolio",
  description:
    "A cinematic portfolio for Pranjal Shukla featuring AI-inspired motion, featured projects, experience, and contact details.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#06101d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-background font-sans text-foreground antialiased"
      >
        {children}
      </body>
    </html>
  );
}
