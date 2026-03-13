"use client"
import Image from "next/image";
import { useState } from "react";

const ORANGE = "#D97634";
const BG_CREAM = "#FDF6F0";

// Placeholder image components using colored divs with aspect ratios
const ImgWineGlasses = () => (
  <div className="w-full h-full bg-stone-300 flex items-center justify-center text-stone-500 text-sm">
    <Image src="/aboutpage/1.jpg" alt="Wine glasses" width={500} height={500} className="h-full w-full object-cover" />
  </div>
);
const ImgBarista = () => (
  <div className="w-full h-full bg-amber-100 flex items-center justify-center text-stone-500 text-sm">
    <Image src="/aboutpage/2.jpg" alt="Barista" width={500} height={500} className="h-full w-full object-cover" />
  </div>
);
const ImgFounder1 = () => (
  <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-500 text-sm">
    <Image src="/aboutpage/founders/f1.jpg" alt="Barista" width={500} height={500} className="h-full w-full object-cover " />
  </div>
);
const ImgFounder2 = () => (
  <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-500 text-sm">
    <Image src="/aboutpage/founders/f2.jpg" alt="Barista" width={500} height={500} className="h-full w-full object-cover" />
  </div>
);
const ImgGallery1 = () => (
  <div className="w-full h-full bg-amber-100 flex items-center justify-center text-stone-500 text-sm">
    [Barista station]
  </div>
);
const ImgGallery2 = () => (
  <div className="w-full h-full bg-orange-100 flex items-center justify-center text-stone-500 text-sm">
    [Fries dish]
  </div>
);
const ImgGallery3 = () => (
  <div className="w-full h-full bg-green-100 flex items-center justify-center text-stone-500 text-sm">
    [Restaurant interior]
  </div>
);
const ImgGallery4 = () => (
  <div className="w-full h-full bg-yellow-100 flex items-center justify-center text-stone-500 text-sm">
    [Dal bhat set]
  </div>
);

export default function page() {
  return (
    <div className="font-serif bg-white min-h-screen">
      {/* ── SECTION 1: Our Story ── */}
      <section className="py-16 px-6 md:px-16 bg-[#FDF6F0]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: image collage */}
          <div className="relative flex-shrink-0 w-full md:w-[380px] h-[280px]">
            {/* Top-left: wine glasses */}
            <div className="absolute top-0 left-0 w-[175px] h-[235px] rounded-tr-[30px] rounded-bl-[30px] overflow-hidden shadow-md z-10">
              <ImgWineGlasses />
            </div>
            {/* Bottom-right: barista */}
            <div className="absolute  -bottom-5 right-0 w-[200px] h-[235px] rounded-br-[30px] rounded-tl-[30px] overflow-hidden shadow-md z-10">
              <ImgBarista />
            </div>
            {/* Decorative orange squares */}
            <div
              className="absolute top-1 right-[142px] w-[52px] h-[52px] rounded-tl-2xl rounded-br-2xl z-0 bg-[#D84315]"
            />
            <div
              className="absolute -bottom-4 left-[118px] w-[52px] h-[52px] z-0 bg-[#D84315] rounded-tl-2xl rounded-br-2xl"
            />
          </div>

          {/* Right: text */}
          <div className="flex-1">
            <p
              className="text-sm text-[#D84315] font-sans font-semibold tracking-widest uppercase mb-2"
            >
              Our Story
            </p>
            <h2 className="text-4xl font-bold text-stone-800 mb-4 leading-tight">
              Welcome to{" "}
              <span className="text-[#D84315]">HUB Mandu</span>
            </h2>
            <p className="text-base font-semibold text-stone-700 mb-3">
              A powerful opening paragraph that captures your essence
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Meet Our Team ── */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-center text-sm text-[#D84315] font-sans font-semibold tracking-widest uppercase mb-2"
          >
            Behind Hub Mandu
          </p>
          <h2 className="text-4xl font-bold text-stone-800 text-center mb-12">
            Meet <span className="text-[#D84315]">Our Team</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team Card 1 */}
            <TeamCard
              img={<ImgFounder1/>}
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              name="Mr. Lorem ipsum"
              role="Founder"
            />
            {/* Team Card 2 */}
            <TeamCard
              img={<ImgFounder2 />}
              quote="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              name="Mr. Lorem ipsum"
              role="Founder"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Space & Ambiance ── */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* Left: text */}
          <div className="flex-1">
            <p
              className="text-sm text-[#D84315] font-sans font-semibold tracking-widest uppercase mb-2"
            >
              The Space &amp; Ambiance
            </p>
            <h2 className="text-4xl font-bold text-stone-800 mb-6 leading-tight">
              Rooted in the{" "}
              <span className="text-[#D84315]">Heart</span>{" "}
              of{" "}
              <span className="text-[#D84315]">Kathmandu</span>
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed mb-5">
              Step inside and feel the warm glow of reclaimed wood, the buzz of conversation, and
              the open view of our bustling kitchen. Our dining room is designed for
              connection—whether it's an intimate date at our cozy corner booths or a lively
              celebration at our communal chef's table.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              We are proud to be a part of the vibrant [Neighborhood] community. Beyond our doors,
              we support [Local Charity/School/Initiative] and believe in giving back to the place
              that has given us so much."
            </p>
          </div>

          {/* Right: image */}
          <div className="flex-shrink-0 w-full md:w-[340px] h-[280px] rounded-br-[40px] rounded-tl-[40px] overflow-hidden shadow-md">
            <ImgBarista />
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Gallery ── */}
      <section className="py-16  px-6 md:px-16 bg-[#FDF6F0]">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-center text-sm font-sans text-[#D84315] font-semibold tracking-widest uppercase mb-2"
          >
            Our Gallery
          </p>
          <h2 className="text-4xl font-bold text-stone-800 text-[#D84315] text-center mb-3">
            The <span className="text-[#D84315]">Hub Mandu</span> Experience
          </h2>
          <p className="text-center text-stone-500 text-sm mb-10 max-w-lg mx-auto">
            Step inside and see what awaits. A visual journey through our ambiance, culinary
            creations, and memorable moments.
          </p>

          {/* Masonry-style gallery grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[400px]">
            {/* Large left image spanning 2 rows */}
            <div className="row-span-2 rounded-2xl overflow-hidden shadow">
              <ImgGallery1 />
            </div>
            {/* Top middle */}
            <div className="rounded-2xl overflow-hidden shadow">
              <ImgGallery2 />
            </div>
            {/* Right: spans 2 rows */}
            <div className="row-span-2 rounded-2xl overflow-hidden shadow">
              <ImgGallery3 />
            </div>
            {/* Bottom middle */}
            <div className="rounded-2xl overflow-hidden shadow">
              <ImgGallery4 />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamCard({ img, quote, name, role }) {
  return (
    <div className="flex items-start gap-4">
      {/* Portrait */}
      <div className="flex-shrink-0 w-[140px] h-[160px] rounded-2xl overflow-hidden shadow-md">
        {img}
      </div>
      {/* Quote + name */}
      <div className="flex-1 pt-2">
        <span className="text-4xl leading-none text-stone-300 font-serif select-none">"</span>
        <p className="text-sm text-stone-700 leading-relaxed -mt-3 mb-4">{quote}</p>
        <span className="text-4xl leading-none text-stone-300 font-serif float-right select-none">"</span>
        <div className="clear-both">
          <p className="text-sm font-semibold text-stone-800">{name}</p>
          <p className="text-sm font-sans font-semibold text-[#D84315]" >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}