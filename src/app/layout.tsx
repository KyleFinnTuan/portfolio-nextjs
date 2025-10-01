import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyle's Portfolio",
  description: "A showcase of my work and skills.",
  icons: {
    icon: "boxuline.svg",
    shortcut: "boxuline.svg",
    apple: "boxuline.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
