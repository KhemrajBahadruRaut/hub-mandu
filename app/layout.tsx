import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";
import { ToastProvider } from "./components/providers/ToastProvider";

const SITE_URL = "https://mandu.gr8.com.np";

export const metadata: Metadata = {
  title: {
    default: "Mandu Hubs | Best Fast Food Restaurant in New Baneshwor",
    template: "%s | Mandu Hubs",
  },
  description:
    "Craving fast food in New Baneshwor? Mandu Hubs serves fresh street food & local favourites. Takeaway & delivery across Kathmandu Valley. Visit us or order now!",
  keywords: [
    "Mandu Hubs",
    "Restaurant in New Baneshwor",
    "Fast Food",
    "Street Food",
    "Nepali Street Food Restaurant",
    "Affordable Restaurant In New Baneshwor",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mandu Hubs | Best Fast Food Restaurant in New Baneshwor",
    description:
      "Craving fast food in New Baneshwor? Mandu Hubs serves fresh street food & local favourites. Takeaway & delivery across Kathmandu Valley. Visit us or order now!",
    url: SITE_URL,
    siteName: "Mandu Hubs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/logo/logo.png`,
        width: 800,
        height: 600,
        alt: "Mandu Hubs - Fast Food Restaurant in New Baneshwor, Kathmandu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandu Hubs | Best Fast Food Restaurant in New Baneshwor",
    description:
      "Craving fast food in New Baneshwor? Mandu Hubs serves fresh street food & local favourites. Takeaway & delivery across Kathmandu Valley. Visit us or order now!",
    images: [`${SITE_URL}/logo/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
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