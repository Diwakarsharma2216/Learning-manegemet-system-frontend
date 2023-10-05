import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { orbitron } from "./font";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
