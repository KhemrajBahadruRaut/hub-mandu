import React, { useState, useEffect } from 'react'

// const API_BASE = 'http://localhost/manduhub_backend/specialsection'
const API_BASE = 'https://mandu.gr8.com.np/specialsection'

const SpecialSection = () => {
  const [imageSrc, setImageSrc] = useState('/specialsection/i1.jpg')

  useEffect(() => {
    fetch(`${API_BASE}/get_image.php`)
      .then(r => r.json())
      .then(data => {
        if (data.status === 'success') {
          setImageSrc(`${API_BASE}/${data.image}`)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <section className="w-full bg-white px-8 py-12 flex items-center justify-between gap-10 flex-wrap md:flex-nowrap">
      {/* LEFT CONTENT — unchanged */}
      <div className="flex-1 min-w-50 max-w-180">
        <p className="text-[#D84315] text-sm font-semibold mb-3 tracking-wide">
          Hub Mandu Specials
        </p>
        <h2 className="text-[23px] md:text-[50px] font-normal leading-[1.2] text-[#1a1a1a] mb-4">
          Discover{" "}
          <span className="text-[#D84315] font-semibold">great value</span>. Explore our
          current{" "}
          <span className="text-[#D84315] font-semibold">deals</span> and{" "}
          <span className="text-[#D84315] font-semibold">specials</span>.
        </h2>
        <p className="text-sm font-medium text-[#1a1a1a] mb-3">
          <span className="text-[#D84315] font-semibold">25% Off</span>{" "}
          during Happy Hours{" "}
          <span className="text-[#D84315]">(11am-2pm everyday)</span>
        </p>
        <p className="text-sm text-[#555] leading-[1.75] mb-6 max-w-105 text-justify">
          Hungry between meals? Visit Mandu Hubs — one of the most affordable
          restaurants in Kathmandu and enjoy 25% off your favourite dishes every
          day from 11am to 2pm. Whether you&apos;re craving hot chicken momo, a
          hearty rice bowl, or a warming bowl of thukpa, our Happy Hour deal
          gives you authentic Nepali fast food at unbeatable prices. Dine in or
          order via Pathao Foods and Foodmandu.
        </p>
        <div className="flex items-center gap-2 text-[#D84315] text-sm font-medium cursor-pointer hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418-4.418-7-8.182-7-11A7 7 0 0119 10c0 2.818-2.582 6.582-7 11z" />
            <circle cx="12" cy="10" r="2.5" fill="currentColor" stroke="none" />
          </svg>
          New Baneshwor, Kathmandu
        </div>
      </div>

      {/* RIGHT - Image fetched from API */}
      <div className="flex-1 min-w-50 max-w-140 rounded-tl-[40px] rounded-br-[40px] h-50 sm:h-60 md:h-90 overflow-hidden bg-gray-100 flex items-center justify-center relative">
        <img
          src={imageSrc}
          alt="Burger and Fries"
          className="w-full h-full md:object-cover object-fit"
        />
      </div>
    </section>
  )
}

export default SpecialSection