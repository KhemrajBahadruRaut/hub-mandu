"use client";
import SpecialSection from "./pages/SpecialSection.jsx";
import FavouritesSection from "./pages/FavouriteSection.jsx";
import WhyChooseUs from "./pages/WhyChooseUs.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import AboutUs from "./pages/AboutSection.jsx";
import Image from "next/image.js";
import Link from "next/link.js";

export default function MandhuHub() {
  return (
    <div className="font-sans m-0 p-0 box-border overflow-x-hidden container mx-auto">
      {/* HERO */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:pl-12 bg-white relative overflow-hidden">
        {/* LEFT */}
        <div className="flex-1 max-w-170 z-10 text-center lg:text-left py-10 lg:py-0">
          <h1 className="text-[46px] sm:text-[46px] md:text-[56px] lg:text-[80px] leading-[1.15] text-[#1a1a1a]">
            Craving Something
            <br />
            <span className="text-[#D84315]">Delicious ?</span>
          </h1>

          <p className="mt-4.5 text-[15px] sm:text-[16px] md:text-[20px] text-[#333]">
            <span className="text-[#D84315] font-semibold">Fresh</span>,{" "}
            <span className="text-[#D84315] font-semibold">Hot</span>, and Ready
            When <span className="text-[#D84315] font-semibold">You</span> Are
          </p>

          <p className="mt-5 text-[14px] sm:text-[18px] text-[#555] max-w-135 mx-auto lg:mx-0">
            Get your favorite meals faster than ever. We serve up delicious
            burgers, crispy fries, and refreshing drinks made with quality
            ingredients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-9 items-center lg:items-start justify-center lg:justify-start">
            <button className="bg-[#D84315] text-white border-none px-7 py-2.5 rounded-tl-[14px] rounded-br-[14px] text-[15px] font-semibold cursor-pointer transition-all duration-200 hover:bg-[#bf360c] hover:-translate-y-0.5">
              Explore Now
            </button>

            <Link href="/menu">
            <button className="bg-transparent text-[#333] border border-[#ccc] px-6 py-2.5 rounded-tl-[14px] rounded-br-[14px] text-[15px] cursor-pointer flex items-center gap-2 transition-all duration-200 hover:border-[#D84315] hover:text-[#D84315]">
              View Menu <span>→</span>
            </button>
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:flex flex-1 hidden relative min-h-95 sm:min-h-120 md:min-h-140 lg:min-h-162.5 w-full items-stretch justify-end">
          {/* Orange background blob */}
          <div className="absolute right-0 top-0 w-45 sm:w-60 md:w-70 lg:w-87.5 h-full bg-[#D84315] rounded-tr-[70px] sm:rounded-tr-[100px] lg:rounded-tr-[140px] rounded-bl-[70px] sm:rounded-bl-[100px] lg:rounded-bl-[140px] z-0" />

          {/* Image Slots */}
          <div className="relative z-10 w-full h-full">
            {/* Main circular image slot */}
            <div className="absolute top-40 sm:top-50 md:top-60 lg:top-75 right-1/2 lg:-right-5 xl:right-10 translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-55 h-55 sm:w-75 sm:h-75 md:w-90 md:h-90 lg:w-130 lg:h-130 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/main-png/main.png"
                loading="eager"
                alt="Burger and Fries"
                width={500}
                height={500}
                className="w-[105%] h-[105%] object-contain"
              />
            </div>

            {/* Tomato slot */}
            <div className="absolute top-6 sm:top-10 sm:left-7.5  w-19 h-19 sm:w-23 sm:h-23 md:w-28 md:h-28 lg:w-36 lg:h-36 md:top-11.25 xl:top-1 md:left-10 lg:-left-8 lg:top-5 xl:left-20 2xl:left-60 rounded-full">
              <Image
                src="/main-png/4.png"
                alt="Tomato"
                width={500}
                height={500}
                className=" object-contain"
              />
            </div>

            {/* Chili slot */}
            <div className="absolute top-12 right-5 sm:top-11.25 sm:right-6.25 md:top-11 md:right-7.5 lg:top-3 xl:top-3 xl:right-20 w-11.5 h-11.5 sm:w-13 sm:h-13 lg:w-38 lg:h-38  rounded-full rotate-30">
              <Image
                src="/main-png/1.png"
                alt="Chili"
                width={500}
                height={500}
                className=" object-contain"
              />
            </div>

            {/* Basil slot */}
            <div className="absolute top-57.5 rotate-80 left-3 sm:top-80 sm:left-7.5 md:top-95 md:left-8.75 lg:top-104 lg:-left-20 xl:top-95 xl:left-7 2xl:left-50 w-20 h-15 sm:w-23.75 sm:h-17.5 lg:w-58 lg:h-58 flex  overflow-hidden">
              <Image
                src="/main-png/2.png"
                alt="Basil"
                width={500}
                height={500}
                className=" object-contain"
              />
            </div>

            {/* Herb slot */}
            <div className="absolute top-57.5 right-5 sm:top-72.5 sm:right-6.25 md:top-85 md:right-7.5 lg:top-114 xl:top-114 xl:right-20 w-18 h-15.5 sm:w-20.5 sm:h-18 lg:w-28 lg:h-28 flex items-center justify-center overflow-hidden">
              <Image
                src="/main-png/3.png"
                alt="Herb"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <SpecialSection />
      <FavouritesSection />
      <AboutUs />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
