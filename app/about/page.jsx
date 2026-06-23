import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Us | Fast Food Restaurant, New Baneshwor",
  description:
    "Discover the story behind Mandu Hubs, New Baneshwor's favourite fast food & street food restaurant. Fresh ingredients, amazing taste & great service every day!",
  keywords: [
    "Mandu Hubs",
    "Restaurant in New Baneshwor",
    "Fast Food",
    "Street Food",
    "Nepali Street Food Restaurant",
    "Affordable Restaurant In New Baneshwor",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Mandu Hubs | Fast Food Restaurant, New Baneshwor",
    description:
      "Discover the story behind Mandu Hubs, New Baneshwor's favourite fast food & street food restaurant. Fresh ingredients, amazing taste & great service every day!",
    url: "https://mandu.gr8.com.np/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
