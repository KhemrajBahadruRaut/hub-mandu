import CareersContent from "./CareersContent";

export const metadata = {
  title: "Careers | Fast Food & Street Food, New Baneshwor",
  description:
    "Looking for a job in Kathmandu? Be part of the growing Mandu Hubs family in New Baneshwor. Exciting opportunities await at our fast food restaurant!",
  keywords: [
    "Mandu Hubs",
    "Restaurant in New Baneshwor",
    "Fast Food",
    "Street Food",
    "Nepali Street Food Restaurant",
    "Affordable Restaurant In New Baneshwor",
  ],
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers | Mandu Hubs - Fast Food & Street Food, New Baneshwor",
    description:
      "Looking for a job in Kathmandu? Be part of the growing Mandu Hubs family in New Baneshwor. Exciting opportunities await at our fast food restaurant!",
    url: "https://mandu.gr8.com.np/careers",
    type: "website",
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
