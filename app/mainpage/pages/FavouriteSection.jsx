"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const API = "https://mandu.gr8.com.np/menu";

// Fallback static data (shown if API fails or returns nothing)
const STATIC_DISHES = [
  {
    id: 1,
    name: "Veg Fried Rice",
    description:
      "Hot fried rice with fresh vegetables and spices. Quick, easy, and always good.",
    price: "Rs. 170",
    image: null,
  },
  {
    id: 2,
    name: "Chicken Rice Bowl",
    description:
      "Juicy chicken over warm rice with a rich sauce. A filling meal that hits the spot.",
    price: "Rs. 220",
    image: null,
  },
  {
    id: 3,
    name: "Vegetable Stir-fry",
    description:
      "Fresh veggies cooked with garlic and ginger. Simple, healthy, and tasty.",
    price: "Rs. 150",
    image: null,
  },
  {
    id: 4,
    name: "Chicken Momo",
    description:
      "Soft chicken dumplings, freshly steamed and served with our homemade tomato chutney.",
    price: "Rs. 190",
    image: null,
  },
  {
    id: 5,
    name: "Chicken Nugget",
    description:
      "Crispy on the outside, juicy on the inside. A quick bite that never gets old.",
    price: "Rs. 280",
    image: null,
  },
  {
    id: 6,
    name: "Buff Sekuwa",
    description:
      "Tender buffalo meat grilled over open flame with Nepali spices. Bold, smoky, and full of flavour.",
    price: "Rs. 120",
    image: null,
  },
];

const VISIBLE = 4;

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function FavouritesSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [dishes, setDishes] = useState(STATIC_DISHES);
  const [isStatic, setIsStatic] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchRandomDishes = async () => {
      try {
        // Step 1: get all categories
        const catRes = await fetch(`${API}/get_categories.php`);
        const categories = await catRes.json();
        if (!categories?.length) return;

        // Step 2: pick up to 3 random categories to pull items from
        const picked = shuffle(categories).slice(0, 3);

        // Step 3: fetch items for each picked category in parallel
        const results = await Promise.all(
          picked.map((cat) =>
            fetch(`${API}/get_items.php?category_id=${cat.id}`)
              .then((r) => r.json())
              .catch(() => []),
          ),
        );

        const allItems = results.flat();
        if (!allItems.length || cancelled) return;

        // Step 4: shuffle and take 6
        const randomSix = shuffle(allItems)
          .slice(0, 6)
          .map((item) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            price: `Rs. ${item.price}`,
            image: item.image || null,
          }));

        if (!cancelled) {
          setDishes(randomSix);
          setIsStatic(false);
          setStartIndex(0);
        }
      } catch (err) {
        // silently fall back to static
        console.error("Favourites fetch failed, using static data:", err);
      }
    };

    fetchRandomDishes();
    return () => {
      cancelled = true;
    };
  }, []);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setStartIndex((i) => Math.min(dishes.length - VISIBLE, i + 1));

  const visible = dishes.slice(startIndex, startIndex + VISIBLE);

  return (
    <section className="w-full bg-[#FDF6F0] sm:py-14 px-6 md:px-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-[32px] md:text-[36px] font-normal text-[#1a1a1a]">
          Customer{" "}
          <span className="text-[#D84315] font-semibold">Favourites</span>
        </h2>
        <p className="text-sm text-[#777] mt-2 max-w-105 mx-auto leading-relaxed">
          Featuring thoughtfully curated dishes that highlight the season's
          finest offerings.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center gap-4 max-w-275 mx-auto">
        {/* Prev Button */}
        <button
          onClick={prev}
          disabled={startIndex === 0}
          className="hidden z-100 sm:flex shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-gray-600
            hover:bg-[#D84315] hover:text-white hover:border-[#D84315] transition-all duration-200
            disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ‹
        </button>

        {/* Cards */}
        <div className="flex max-lg:flex-wrap w-full justify-center">
          {visible.map((dish) => (
            <div key={dish.id} className="flex flex-col items-center px-5">
              {/* Circular image */}
              <div className="w-55 h-55 z-100 rounded-full border-[3px] border-[#D84315] overflow-hidden bg-gray-100 flex items-center justify-center shrink-0">
                {dish.image ? (
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Static fallback uses local images
                  <img
                    src={`/customer-favourites/${dish.id}.png`}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="bg-white rounded-tr-[50px] rounded-bl-[50px] pb-4 px-6 flex flex-col items-center relative -top-12 pt-16 shrink-0 shadow-lg hover:shadow-md transition-shadow duration-200 h740 w-full">
                {" "}
                <h3
                  className="text-[15px] font-semibold text-[#1a1a1a] text-center mb-2 w-full truncate"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {dish.name}
                </h3>
                <p className="text-[12px] text-[#888] text-center leading-[1.6] mb-4 flex-1 w-full overflow-hidden line-clamp-3">
                  {dish.description}
                </p>
                <p className="text-[#D84315] font-bold text-[15px] mt-auto">
                  {dish.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          disabled={startIndex >= dishes.length - VISIBLE}
          className="hidden z-100 shrink-0 w-10 h-10 rounded-full bg-[#D84315] text-white shadow-md sm:flex items-center justify-center
            hover:bg-[#bf360c] transition-all duration-200
            disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ›
        </button>
      </div>

      {/* View Our Menu Button */}
      <div className="flex justify-center pb-5">
        <Link href="/menu">
          <button className="border border-[#D84315] text-[#D84315] bg-transparent px-12 py-3 rounded-tl-2xl rounded-br-2xl text-sm font-medium flex items-center gap-2 hover:bg-[#D84315] hover:text-white transition-all duration-200 cursor-pointer">
            View Our Menu <span>→</span>
          </button>
        </Link>
      </div>
    </section>
  );
}
