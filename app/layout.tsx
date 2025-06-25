import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "AI Quiz Generator",
  description: "AI Quiz Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter" className="bg-primary/10">
      <body className="">
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
