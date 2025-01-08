import type { Metadata } from "next";
import { Geist, Geist_Mono, Odor_Mean_Chey } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google"; // You can change the font to anything you want.
import Navbar from "./components/navbar";


const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({ subsets: ["latin"] });  // Example usage of Geist font
const geistMono = Geist_Mono({ subsets: ["latin"] });  // Example usage of Geist_Mono font

export const metadata: Metadata = {
  title: "Vinayak's Personal Website",
  description: "A personal website for Vinayak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
		// returns boilerplate
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
      {children}
    </body>
    </html>
  );
}