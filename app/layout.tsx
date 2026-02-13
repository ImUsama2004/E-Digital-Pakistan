import "./globals.css";
import Header from "../components/Header";
import React from "react"; 
import Footer from "@/components/Footer";

export const metadata = {
  title: "My Next App",
  description: "Next.js App with Responsive Header",
};

// We define the type for the props here
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}