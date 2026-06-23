import MenuContent from "./MenuContent";

export const metadata = {
  title: "Our Menu | Fast Food & Street Food, New Baneshwor",
  description:
    "Explore Mandu Hubs' menu of delicious fast food & street food in New Baneshwor, Kathmandu. Order online via Pathao or Foodmandu, or visit us today!",
  keywords: [
    "Mandu Hubs",
    "Restaurant in New Baneshwor",
    "Fast Food",
    "Street Food",
    "Nepali Street Food Restaurant",
    "Affordable Restaurant In New Baneshwor",
  ],
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Our Menu | Mandu Hubs | Fast Food & Street Food, New Baneshwor",
    description:
      "Explore Mandu Hubs' menu of delicious fast food & street food in New Baneshwor, Kathmandu. Order online via Pathao or Foodmandu, or visit us today!",
    url: "https://mandu.gr8.com.np/menu",
    type: "website",
  },
};

export default function MenuPage() {
  return <MenuContent />;
}