"use client";

import "./globals.css";
import { Space_Mono } from "next/font/google";
import { useStore } from "./store";
import { Navbar } from "./components";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  const darkMode = useStore((store) => store.darkMode);
  return (
    <html lang="en">
      <head>
        <title>GitHub User Search</title>
      </head>
      <body
        className={`${spaceMono.className} ${
          darkMode ? "bg-dark-blue text-light" : "bg-light text-black"
        } min-h-screen max-w-[950px] mx-auto py-10 px-4 md:px-8 transition-all`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
