export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">

      {/* LEFT — Image Grid */}
      <div className="flex-1 min-w-60 max-w-120 grid grid-cols-1 md:grid-cols-2 gap-3 relative">

        {/* Top Left — Fried Rice */}
        <div className="rounded-tr-[50px] rounded-bl-[50px] overflow-hidden h-50 flex items-center justify-center">
          <img src="/aboutus/i4.jpg" alt="Fried Rice" className="w-full h-full object-cover" /> 
        </div>

        {/* Top Right — Momo with accent border */}
        <div className="relative rounded-tl-[50px] bg-[#D8431599] pt-4 pr-4 md:top-10 rounded-br-[50px] overflow-hidden h-50 flex items-center justify-center">
           <img src="/aboutus/o2.jpg" alt="Momo" className="w-full rounded-tl-[50px]  rounded-br-[50px] h-full relative z-10" /> 
        </div>

        {/* Bottom Left — Burger with accent border */}
        <div className="relative rounded-tl-[50px] bg-[#D8431599] pb-4 pl-4 rounded-br-[50px] overflow-hidden  h-50 flex items-center justify-center">
           <img src="/aboutus/i3.jpg" alt="Burger" className="w-full rounded-tl-[50px]  rounded-br-[50px] h-full object-cover relative z-10" /> 
        </div>

        {/* Bottom Right — Thukpa/Noodle Soup */}
        <div className="rounded-tr-[50px] md:top-10 relative rounded-bl-[50px] overflow-hidden h-50 flex items-center justify-center">
          <img src="/aboutus/i1.png" alt="Thukpa" className="w-full h-full object-cover" />
        </div>

      </div>

      {/* RIGHT — Text Content */}
      <div className="flex-1 min-w-65 max-w-110">

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
        <button className="border border-[#D84315] text-[#D84315] bg-transparent px-6 py-2 rounded-tl-2xl rounded-br-2xl text-sm font-medium flex items-center gap-2 cursor-pointer hover:bg-[#D84315] hover:text-white transition-all duration-200 hover:-translate-y-0.5">
          View Our Story <span>→</span>
        </button>

      </div>
    </section>
  );
}