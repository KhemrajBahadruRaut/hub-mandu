import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";
import { ToastProvider } from "./components/providers/ToastProvider";

export const metadata: Metadata = {
  title: "Best Restaurants in New Baneshwor for Lunch | Mandu Hubs",
  description: "Looking for the best restaurants in New Baneshwor for lunch? Enjoy delicious momo, rice bowls, burgers, and more at Mandu Hubs, a local favorite in Kathmandu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ToastProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ToastProvider>
      </body>
    </html>
  );
}