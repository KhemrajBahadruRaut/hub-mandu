"use client";
import Image from "next/image";

const ORANGE = "#D97634";
const BG_CREAM = "#FDF6F0";

// Image components
const ImgWineGlasses = () => (
  <div className="w-full h-full">
    <Image
      src="/aboutpage/1.jpg"
      alt="Mandu Hubs restaurant interior with cozy ambiance"
      width={500}
      height={500}
      className="h-full w-full object-cover"
    />
  </div>
);

const ImgBarista = () => (
  <div className="w-full h-full">
    <Image
      src="/aboutpage/2.jpg"
      alt="Mandu Hubs kitchen staff preparing fresh meals"
      width={500}
      height={500}
      className="h-full w-full object-cover"
    />
  </div>
);

//  FIXED founder images (clean + responsive)
const ImgCoFounder2 = () => (
  <div className="relative w-full h-full">
    <Image
      src="/team/cf2.webp"
      alt="Mr. Prazwal Limbu - Founder and Managing Director of Mandu Hubs"
      fill
      className="object-cover object-center"
      sizes="(max-width: 768px) 100vw, 200px"
    />
  </div>
);

// Gallery placeholders
const ImgGallery1 = () => (
  <div className="w-full h-full">
    <Image
      src="/aboutpage/2.jpg"
      alt="Mandu Hubs dining experience"
      width={500}
      height={500}
      className="h-full w-full object-cover"
    />
  </div>
);
const ImgGallery2 = () => (
  <div className="w-full h-full">
    <Image
      src="/aboutpage/2.jpg"
      alt="Mandu Hubs food preparation"
      width={500}
      height={500}
      className="h-full w-full object-cover"
    />
  </div>
);
const ImgGallery3 = () => (
  <div className="w-full h-full">
    <Image
      src="/aboutpage/2.jpg"
      alt="Mandu Hubs restaurant ambiance"
      width={500}
      height={500}
      className="h-full w-full object-cover"
    />
  </div>
);
const ImgGallery4 = () => (
  <div className="w-full h-full">
    <Image
      src="/aboutpage/2.jpg"
      alt="Mandu Hubs customer experience"
      width={500}
      height={500}
      className="h-full w-full object-cover"
    />
  </div>
);

export default function AboutContent() {
  return (
    <div className="font-serif bg-white min-h-screen">
      {/* SECTION 1 */}
      <section className="md:py-16 py-4 px-6 md:px-16 bg-[#FDF6F0]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:gap-10">
          <div className="relative flex gap-3 sm:gap-10 justify-center shrink-0 w-full md:w-95 h-70">
            <div className="sm:flex hidden md:absolute top-0 -left-8 w-52 h-56 rounded-tr-[30px] rounded-bl-[30px] overflow-hidden shadow-md z-10">
              <ImgWineGlasses />
            </div>
            <div className="md:absolute -bottom-2 -right-4 w-52 h-56 rounded-br-[30px] rounded-tl-[30px] overflow-hidden shadow-md z-10">
              <ImgBarista />
            </div>
            <div className="absolute top-1 hidden md:flex right-36 w-12 h-12 bg-[#D84315] rounded-tl-2xl rounded-br-2xl" />
            <div className="absolute -bottom-1 left-32 w-12 hidden md:flex h-12 bg-[#D84315] rounded-tl-2xl rounded-br-2xl" />
          </div>

          <div className="px-8">
            <p className="text-sm text-[#D84315] font-sans font-semibold tracking-widest uppercase mb-2">
              Our Story
            </p>
            <h1 className="text-2xl sm:text-4xl font-bold text-stone-800 mb-4">
              About <span className="text-[#D84315]">Mandu Hubs</span>
            </h1>
            <p className="text-base font-semibold text-stone-700 mb-3">
              Kathmandu runs on good food — and we are here to make sure you
              never go hungry.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Mandu Hubs started as a simple idea in the busy streets of New
              Baneshwor, Kathmandu — that everyday people deserve really good
              food without spending a lot. We keep things simple. Fresh
              ingredients, real recipes, affordable prices that do not
              compromise on quality. We do not cut corners because we know you
              can taste the difference. Behind every meal is a team that
              genuinely cares to make sure you leave satisfied.
            </p>
          </div>
        </div>
      </section>

      {/*  SECTION 2: TEAM */}
      {/* TEAM SECTION */}
      <section className="py-16 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-[#D84315] font-semibold tracking-[0.25em] uppercase mb-3">
            Behind Hub Mandu
          </p>

          <h2 className="text-center text-3xl md:text-5xl font-bold text-stone-800 mb-4">
            Meet Our <span className="text-[#D84315]">Founder</span>
          </h2>

          <p className="max-w-2xl mx-auto text-center text-stone-600 text-sm md:text-base mb-14"></p>

          {/* Founder */}
          <div className="flex justify-center mb-16">
            <TeamCard
              img={<ImgCoFounder2 />}
              name="Mr. Prazwal Limbu"
              role="Founder / Managing Director"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="pb-10 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <p className="text-sm text-[#D84315] font-semibold uppercase mb-2">
              The Space & Ambiance
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-stone-800 mb-6">
              Rooted in the <span className="text-[#D84315]">Heart</span> of{" "}
              <span className="text-[#D84315]">Kathmandu</span>
            </h2>
            <p className="text-sm text-stone-600 mb-5 text-justify">
              Step inside Mandu Hubs and you will feel it straight away — warm,
              lively, and completely unpretentious. It is the kind of place
              where the smell of fresh food hits you at the door and the noise
              of a busy, happy kitchen reminds you that everything is made
              fresh.
              <br />
              <br />
              We are proud to be part of New Baneshwor, a neighbourhood that
              moves fast, works hard, and deserves good food at every corner. If
              you are looking for an affordable restaurant in Kathmandu, you
              have found it. Mandu Hubs is not just a place to eat. It is a
              place to take a breath, recharge, and get back out there.
            </p>
          </div>

          <div className="w-full md:w-85 h-70 rounded-br-[40px] rounded-tl-[40px] overflow-hidden shadow-md">
            <ImgBarista />
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="sm:py-16 px-6 md:px-16 bg-[#FDF6F0] pb-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10">
            The <span className="text-[#D84315]">Hub Mandu</span> Experience
          </h2>

          <div className="grid sm:grid-cols-2 grid-rows-1 lg:grid-cols-3 gap-3 ">
            <div className="row-span-2 rounded-2xl overflow-hidden shadow">
              <ImgGallery1 />
            </div>
            <div className="rounded-2xl overflow-hidden shadow">
              <ImgGallery2 />
            </div>
            <div className="row-span-2 rounded-2xl overflow-hidden shadow">
              <ImgGallery3 />
            </div>
            <div className="rounded-2xl overflow-hidden shadow">
              <ImgGallery4 />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// RESPONSIVE TEAM CARD
function TeamCard({ img, name, role, featured = false }) {
  return (
    <div className="group flex flex-col items-center text-center">
      {/* Image Container */}
      <div className="relative">
        {/* Decorative Background */}
        <div
          className={`absolute -top-5 -left-5 rounded-tr-4xl rounded-bl-4xl bg-[#D84315]/20
          ${featured ? "w-50 h-62" : "w-42 h-54"}`}
        />

        {/* Image */}
        <div
          className={`relative z-10 overflow-hidden shadow-lg rounded-tr-4xl rounded-bl-4xl
          transition-transform duration-300 group-hover:scale-[1.02]
          ${featured ? "w-60 h-72" : "w-52 h-64"}`}
        >
          {img}
        </div>
      </div>

      {/* Details */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-stone-800">{name}</h3>

        <div className="w-12 h-0.5 bg-[#D84315] mx-auto my-3"></div>

        <p className="text-[#D84315] font-semibold tracking-wide uppercase text-sm">
          {role}
        </p>
      </div>
    </div>
  );
}
