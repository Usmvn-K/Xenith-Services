import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Premium Web App",
  description: "A beautiful, dynamic, and state-of-the-art web application.",
  keywords: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "Web Design"],
  authors: [{ name: "You" }],
};

import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <div className="flex-grow pb-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
