import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import MoneyMapLogo from "../components/MoneyMapLogo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoneyMap",
  description: "Map how today's money decisions could change your next 90 days",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-white/10 bg-[#07110f]">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 font-semibold text-slate-300">
              <MoneyMapLogo size="sm" />
              MoneyMap
            </div>
            <p>Forecast your path, then test your next move.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
