import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  // The title shown in browser tabs and Google
  title: "Nyio Corp | Premium Apparel Sourcing & Manufacturing",
  description: "Specialized apparel manufacturing based in Tiruppur. We bridge the gap between visionary design and global production scale with precision and care.",
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "Nyio Corp | Sourcing Excellence",
    description: "Bridging the gap between design and global manufacturing scale.",
    url: "https://nyiocorp.com", // Replace with your actual domain
    siteName: "Nyio Corp",
    images: [
      {
        url: "/og-image.jpg", // The image that shows up on social media
        width: 1200,
        height: 630,
        alt: "Nyio Corp Premium Manufacturing",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: '/favicon.ico', // Standard browser tab icon
    shortcut: '/favicon.ico', // Bookmark icon for older browsers
    apple: '/apple-touch-icon.png', // Home screen icon for iPhones
  },

  // Twitter (X) Card
  twitter: {
    card: "summary_large_image",
    title: "Nyio Corp | Apparel Sourcing",
    description: "Global manufacturing scale with a boutique precision.",
    images: ["/og-image.jpg"],
  },

};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-cream antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}