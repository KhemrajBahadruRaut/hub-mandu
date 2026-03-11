"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Check if current path starts with /admin
  const isAdminPath = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminPath && <Navbar />}
      {children}
      {!isAdminPath && <Footer />}
    </>
  );
}
