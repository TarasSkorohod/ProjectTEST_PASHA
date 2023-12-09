import React from "react";
import "./globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
// import { Inter } from "next/font/google";
import { Jockey_One } from "next/font/google";
import { Bungee_Inline } from "next/font/google";
import { Rowdies } from "next/font/google";
import { Rubik_Wet_Paint } from "next/font/google";
import { Baskervville } from "next/font/google";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { ButtonUpScroll } from "@/components/buttonUpScroll/ButtonUpScroll";
import MyChat from "@/components/chatGpt/MyChat";

// const jok = Jockey_One({ weight: "400", subsets: ["latin"] });
// const jok = Bungee_Inline({ weight: "400", subsets: ["latin"] });
// const jok = Rubik_Wet_Paint({ weight: "400", subsets: ["latin"] });
// const jok = Baskervville({ weight: "400", subsets: ["latin"] });
const jok = Rowdies({ weight: "400", subsets: ["latin"] });
// const inter = Inter({ subsets: ["latin"] });
// const jok = localFont({ src: "./Ash.ttf" });

export const metadata: Metadata = {
  title: "Capital Upfitters",
  description:
    "Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="180x180" href="../public/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/logo.png" />
        <title></title>
      </head>
      <body>
        {/* <body className={`${myFont.className} relative`}> */}
        <Header />
        <main>{children}</main>
        <Toaster position="top-center" reverseOrder={false} />
        <MyChat />
        <Footer />
      </body>
    </html>
  );
}
