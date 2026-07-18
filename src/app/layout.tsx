import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bhanu Sri | Full Stack Developer & Shopify Engineer",
  description: "Portfolio of Bhanu Sri, a results-driven Full Stack Developer with 2+ years of experience. Specializing in React, Next.js, Node.js, Express, MongoDB, and custom Shopify store development.",
  keywords: [
    "Bhanu Sri",
    "Anangi Bhanu Sri",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Shopify Developer",
    "Liquid",
    "Shopify CLI",
    "Aptronix",
    "Bake Beauty",
    "G-1 Nutrition",
    "MERN Stack",
    "Web Developer Hyderabad",
  ],
  authors: [{ name: "Bhanu Sri" }],
  creator: "Bhanu Sri",
  robots: "index, follow",
  icons: {
    icon: "/b-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhanusri.dev", // Fallback URL
    title: "Bhanu Sri | Full Stack Developer & Shopify Engineer",
    description: "2+ years of experience building high-performance web applications and custom Shopify storefronts. Explore projects like Aptronix, G-1 Nutrition, and custom MERN apps.",
    siteName: "Bhanu Sri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhanu Sri | Full Stack Developer & Shopify Engineer",
    description: "2+ years of experience building high-performance web applications and custom Shopify storefronts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
