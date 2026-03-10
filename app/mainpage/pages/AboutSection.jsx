export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">

      {/* LEFT — Image Grid */}
      <div className="flex-1 min-w-[240px] max-w-[480px] grid grid-cols-1 md:grid-cols-2 gap-3 relative">

        {/* Top Left — Fried Rice */}
        <div className="rounded-tr-[50px] rounded-bl-[50px] overflow-hidden h-[200px] bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
          {/* Replace with: <img src="/images/fried-rice.jpg" alt="Fried Rice" className="w-full h-full object-cover" /> */}
          <div className="text-center text-gray-400 pointer-events-none select-none">
            <span className="text-4xl block mb-1">🍜</span>
            <p className="text-xs">Image 1</p>
            <p className="text-[10px] opacity-60">Top Left</p>
          </div>
        </div>

        {/* Top Right — Momo with accent border */}
        <div className="relative rounded-tl-[50px] rounded-br-[50px] overflow-hidden h-[200px] bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
          {/* Replace with: <img src="/images/momo.jpg" alt="Momo" className="w-full h-full object-cover relative z-10" /> */}
          <div className="text-center text-gray-400 pointer-events-none select-none relative z-10">
            <span className="text-4xl block mb-1">🥟</span>
            <p className="text-xs">Image 2</p>
            <p className="text-[10px] opacity-60">Top Right</p>
          </div>
        </div>

        {/* Bottom Left — Burger with accent border */}
        <div className="relative rounded-tl-[50px] rounded-br-[50px] overflow-hidden h-[200px] bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
          {/* Replace with: <img src="/images/burger.jpg" alt="Burger" className="w-full h-full object-cover relative z-10" /> */}
          <div className="text-center text-gray-400 pointer-events-none select-none relative z-10">
            <span className="text-4xl block mb-1">🍔</span>
            <p className="text-xs">Image 3</p>
            <p className="text-[10px] opacity-60">Bottom Left</p>
          </div>
        </div>

        {/* Bottom Right — Thukpa/Noodle Soup */}
        <div className="rounded-tr-[50px] rounded-bl-[50px] overflow-hidden h-[200px] bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
          {/* Replace with: <img src="/images/thukpa.jpg" alt="Thukpa" className="w-full h-full object-cover" /> */}
          <div className="text-center text-gray-400 pointer-events-none select-none">
            <span className="text-4xl block mb-1">🍲</span>
            <p className="text-xs">Image 4</p>
            <p className="text-[10px] opacity-60">Bottom Right</p>
          </div>
        </div>

      </div>

      {/* RIGHT — Text Content */}
      <div className="flex-1 min-w-[260px] max-w-[440px]">

        {/* Tag */}
        <p className="text-[#D84315] text-sm font-semibold tracking-wide mb-3">
          About Us
        </p>

        {/* Heading */}
        <h2
          className="text-[36px] md:text-[40px] font-bold text-[#1a1a1a] leading-[1.2] mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Your{" "}
          <span className="text-[#D84315]">Go-To</span>{" "}
          for Great{" "}
          <span className="text-[#D84315]">Taste</span>
        </h2>

        {/* Paragraph 1 */}
        <p className="text-[14px] text-[#555] leading-[1.8] mb-5">
          Our restaurant brings the true taste of Nepal to your plate. From
          traditional Dal Bhat to authentic Newari and Thakali dishes, every
          meal is prepared using local ingredients, traditional recipes, and
          heartfelt Nepali hospitality.
        </p>

        {/* Paragraph 2 */}
        <p className="text-[14px] text-[#555] leading-[1.8] mb-8">
          We serve fresh, tasty meals that hit the spot when you're hungry
          and in a hurry. Satisfaction guaranteed, no compromises.
        </p>

        {/* CTA Button */}
        <button className="border border-[#D84315] text-[#D84315] bg-transparent px-6 py-3 rounded-tl-2xl rounded-br-2xl text-sm font-medium flex items-center gap-2 cursor-pointer hover:bg-[#D84315] hover:text-white transition-all duration-200 hover:-translate-y-0.5">
          View Our Story <span>→</span>
        </button>

      </div>
    </section>
  );
}