import React from 'react'

const SpecialSection = () => {
  return (
     <section className="w-full bg-white px-8 py-12 flex items-center justify-between gap-10 flex-wrap md:flex-nowrap">

      {/* LEFT CONTENT */}
      <div className="flex-1 min-w-70 max-w-180">

        {/* Tag */}
        <p className="text-[#D84315] text-sm font-semibold mb-3 tracking-wide">
          Hub Mandu Specials
        </p>

        {/* Heading */}
        <h2 className="text-[38px] md:text-[50px] font-normal leading-[1.2] text-[#1a1a1a] mb-4" >
          Discover{" "}
          <span className="text-[#D84315] font-semibold">great value</span>. Explore our
          current{" "}
          <span className="text-[#D84315] font-semibold">deals</span> and{" "}
          <span className="text-[#D84315] font-semibold">specials</span>.
        </h2>

        {/* Offer line */}
        <p className="text-sm font-medium text-[#1a1a1a] mb-3">
          <span className="text-[#D84315] font-semibold">25% Off</span>{" "}
          during Happy Hours{" "}
          <span className="text-[#D84315]">(11am-2pm everyday)</span>
        </p>

        {/* Description */}
        <p className="text-sm text-[#555] leading-[1.75] mb-6 max-w-105">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-[#D84315] text-sm font-medium cursor-pointer hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418-4.418-7-8.182-7-11A7 7 0 0119 10c0 2.818-2.582 6.582-7 11z" />
            <circle cx="12" cy="10" r="2.5" fill="currentColor" stroke="none" />
          </svg>
          Location name, Address
        </div>
      </div>

      {/* RIGHT - Image Slot */}
      <div className="flex-1 min-w-40 max-w-140 rounded-tl-[40px] rounded-br-[40px] h-70 md:h-90 overflow-hidden bg-gray-100 flex items-center justify-center relative">
        <img src="/specialsection/i1.jpg" alt="Burger and Fries" className="w-full h-full md:object-cover object-fit" />
      </div>

    </section>
  )
}

export default SpecialSection