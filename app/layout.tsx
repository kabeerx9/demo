import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({weight : ["400", "500", "600", "700"  , "800", "900"]})

export const metadata: Metadata = {
  title: "Kabeer Demo",
  description: "Kabeer's Demo Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={` ${inter.className} antialiased h-full bg-neutral-100 dark:bg-neutral-700`}
      >
        {children}
      </body>
    </html>
  );
}
