import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import ActiveCatagoryContextProvider from "@/context/activeCatagoryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BillBuy E-commerce",
  description: "BillBuy E-commerce Next.js 14 Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-800`}>
        <ActiveCatagoryContextProvider>
          <Navbar />
          {children}
          <Footer />
          <ThemeToggle />
        </ActiveCatagoryContextProvider>
      </body>
    </html>
  );
}
