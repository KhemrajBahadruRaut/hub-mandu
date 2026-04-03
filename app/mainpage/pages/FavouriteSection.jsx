import { useState } from "react";

const DISHES = [
  {
    id: 1,
    name: "Veg Fried Rice",
    description:
      "Lorem amet, new check cons ectetur adipi scing alit mod ut labore.",
    price: "Rs. 170",
    emoji: "🍜",
  },
  {
    id: 2,
    name: "Chicken Rice Bowl",
    description:
      "Lorem amet, new check cons ectetur adipi scing alit mod ut labore.",
    price: "Rs. 220",
    emoji: "🍚",
  },
  {
    id: 3,
    name: "Vegetable Stir-fry",
    description:
      "Lorem amet, new check cons ectetur adipi scing alit mod ut labore.",
    price: "Rs. 150",
    emoji: "🥦",
  },
  {
    id: 4,
    name: "Chicken Momo",
    description:
      "Lorem amet, new check cons ectetur adipi scing alit mod ut labore.",
    price: "Rs. 190",
    emoji: "🥟",
  },
  {
    id: 5,
    name: "Beef Burger",
    description:
      "Lorem amet, new check cons ectetur adipi scing alit mod ut labore.",
    price: "Rs. 280",
    emoji: "🍔",
  },
  {
    id: 6,
    name: "Crispy Fries",
    description:
      "Lorem amet, new check cons ectetur adipi scing alit mod ut labore.",
    price: "Rs. 120",
    emoji: "🍟",
  },
];

const VISIBLE = 4;

export default function FavouritesSection() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setStartIndex((i) => Math.min(DISHES.length - VISIBLE, i + 1));

  const visible = DISHES.slice(startIndex, startIndex + VISIBLE);

  return (
    <section className="w-full bg-[#FDF6F0] py-14 px-6 md:px-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-[32px] md:text-[36px] font-normal text-[#1a1a1a]">
          Customer{" "}
          <span className="text-[#D84315] font-semibold ">Favourites</span>
        </h2>
        <p className="text-sm text-[#777] mt-2 max-w-[420px] mx-auto leading-relaxed">
          Featuring thoughtfully curated dishes that highlight the season's
          finest offerings.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center gap-4 max-w-[1100px] mx-auto">
        {/* Prev Button */}
        <button
          onClick={prev}
          disabled={startIndex === 0}
          className="hidden lg:flex flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600
            hover:bg-[#D84315] hover:text-white hover:border-[#D84315] transition-all duration-200
            disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ‹
        </button>

        {/* Cards */}
        <div className="flex max-lg:flex-wrap w-full justify-center">
          {visible.map((dish) => (
            <div key={dish.id} className=" flex flex-col items-center  px-5 ">
              {/* Circular image slot */}
              <div className="w-[220px] h-[220px] z-100 rounded-full border-[3px] border-[#D84315] overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0 ">
                {/* Replace with your image:
                <img src={`/images/${dish.id}.png`} alt={dish.name} className="w-full h-full object-cover" />
                */}
                <span className="text-4xl">{dish.emoji}</span>
              </div>

              <div className="bg-white rounded-tr-[50px] rounded-bl-[50px] pb-4 px-6 flex flex-col items-center relative -top-12 pt-16 flex-shrink-0 shadow-lg hover:shadow-md transition-shadow duration-200">
                {/* Dish Name */}
                <h3
                  className="text-[15px] font-semibold text-[#1a1a1a] text-center mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {dish.name}
                </h3>

                {/* Description */}
                <p className="text-[12px] text-[#888] text-center leading-[1.6] mb-4">
                  {dish.description}
                </p>

                {/* Price */}
                <p className="text-[#D84315] font-bold text-[15px]">
                  {dish.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          disabled={startIndex >= DISHES.length - VISIBLE}
          className="hidden lg:flex flex-shrink-0 w-10 h-10 rounded-full bg-[#D84315] text-white shadow-md flex items-center justify-center
            hover:bg-[#bf360c] transition-all duration-200
            disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ›
        </button>
      </div>

      {/* View Our Menu Button */}
      <div className="flex justify-center">
        <button className="border border-[#D84315] text-[#D84315] bg-transparent px-12 py-3 rounded-tl-2xl rounded-br-2xl text-sm font-medium flex items-center gap-2 hover:bg-[#D84315] hover:text-white transition-all duration-200 cursor-pointer">
          View Our Menu <span>→</span>
        </button>
      </div>
    </section>
  );
}
