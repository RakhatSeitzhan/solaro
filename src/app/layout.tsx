'use client'

import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { motion } from "framer-motion";

import "./globals.css";
import "./customStyles.css"
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300','400','500', '600', '700','800','900'],  // Add desired weights
  display: 'swap'
})


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body
        className={montserrat.className}
      >
        <motion.div
          key="sidebar"
          initial={{ x: "-350px" }}
          animate={{ x: sidebarOpen ? 0 : "-350px" }}
          transition={{ duration: 0.4, type: "tween"}}
        >
          <Sidebar isOpen = {sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </motion.div>
        <Navbar onHamburgerClick={() => setSidebarOpen(true)} />
        {children}
      </body>
    </html>
  );
}
