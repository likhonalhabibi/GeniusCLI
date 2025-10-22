import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GeniusCLI",
  description: "A web interface for GeniusCLI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <main className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">GeniusCLI</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
