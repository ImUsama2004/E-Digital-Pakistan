import "./globals.css";
import React from "react"; 
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "E-Digital Pakistan",
  description: "Next.js App with Responsive Header",
  icons: {
    icon: "/images/EDP-icon.png",
    shortcut: "/images/EDP-icon.png",
    apple: "/images/EDP-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}