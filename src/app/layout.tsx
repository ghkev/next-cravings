import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { navHeight } from "./lib/const";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Cravings App",
    default: "Cravings App",
  },
  description: "Satisfy your cravings with cravings app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-400`}
      >
        <Navbar />
        <main
          className="container mx-auto px-4"
          style={{
            paddingTop: `calc(${navHeight} + 1rem)`,
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
