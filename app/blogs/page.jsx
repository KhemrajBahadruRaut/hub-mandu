import BlogsContent from "./BlogsContent";

export const metadata = {
  title: "Blogs | Fast Food & Street Food, New Baneshwor",
  description:
    "Read the latest blogs, stories, and updates from Mandu Hubs, your favourite fast food & street food restaurant in New Baneshwor, Kathmandu.",
  keywords: [
    "Mandu Hubs",
    "Restaurant in New Baneshwor",
    "Fast Food",
    "Street Food",
    "Nepali Street Food Restaurant",
    "Affordable Restaurant In New Baneshwor",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blogs | Mandu Hubs | Fast Food & Street Food, New Baneshwor",
    description:
      "Read the latest blogs, stories, and updates from Mandu Hubs, your favourite fast food & street food restaurant in New Baneshwor, Kathmandu.",
    url: "https://mandu.gr8.com.np/blogs",
    type: "website",
  },
};

export default function BlogsPage() {
  return <BlogsContent />;
}
