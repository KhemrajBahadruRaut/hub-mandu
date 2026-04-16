"use client";
import Image from "next/image";

const ORANGE = "#D97634";
const BG_CREAM = "#FDF6F0";

// Image components
const ImgWineGlasses = () => (
  <div className="w-full h-full">
    <Image
      src="/aboutpage/1.jpg"
      alt="Wine glasses"
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
      alt="Barista"
      width={500}
      height={500}
      className="h-full w-full object-cover"
    />
  </div>
);

// ✅ FIXED founder images (clean + responsive)
const ImgFounder1 = () => (
  <div className="relative w-full h-full">
    <Image
      src="/aboutpage/founders/f1.jpg"
      alt="Founder 1"
      fill
      className="object-cover object-center"
      sizes="(max-width: 768px) 100vw, 200px"
      priority
    />
  </div>
);

const ImgFounder2 = () => (
  <div className="relative w-full h-full">
    <Image
      src="/aboutpage/founders/f2.jpg"
      alt="Founder 2"
      fill
      className="object-cover object-center"
      sizes="(max-width: 768px) 100vw, 200px"
    />
  </div>
);

// Gallery placeholders
const ImgGallery1 = () =>  (
  <div className="w-full h-full">
    <Image
      src="/aboutpage/2.jpg"
      alt="Barista"
      width={500}
      height={500}
      className="h-full w-full object-cover"
    />
  </div>
);
const ImgGallery2 = () =>  (
  <div className="w-full h-full">
    <Image
      src="/aboutpage/2.jpg"
      alt="Barista"
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
      alt="Barista"
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
      alt="Barista"
      width={500}
      height={500}
      className="h-full w-full object-cover"
    />
  </div>
);

export default function page() {
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
            <h2 className="text-2xl sm:text-4xl font-bold text-stone-800 mb-4">
              Welcome to <span className="text-[#D84315]">HUB Mandu</span>
            </h2>
            <p className="text-base font-semibold text-stone-700 mb-3">
              A powerful opening paragraph that captures your essence
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </div>
        </div>
      </section>

      {/*  SECTION 2: TEAM */}
      <section className="md:py-16 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm text-[#D84315] font-sans font-semibold tracking-widest uppercase mb-2">
            Behind Hub Mandu
          </p>

          <h2 className=" text-2xl sm:text-4xl font-bold text-stone-800 text-center sm:mb-12 mb-4">
            Meet <span className="text-[#D84315]">Our Team</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <TeamCard
              img={<ImgFounder1 />}
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              name="Mr. Lorem ipsum"
              role="Founder"
            />

            <TeamCard
              img={<ImgFounder2 />}
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              name="Mr. Lorem ipsum"
              role="Founder"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-16 px-6 md:px-16 bg-white">
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
              Step inside and feel the warm glow of reclaimed wood, the buzz of
              conversation, and the open view of our bustling kitchen. Our
              dining room is designed for connection—whether it’s an intimate
              date at our cozy corner booths or a lively celebration at our
              communal chef’s table. <br />
              <br />
              We are proud to be a part of the vibrant [Neighborhood] community.
              Beyond our doors, we support [Local Charity/School/Initiative] and
              believe in giving back to the place that has given us so much."
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
function TeamCard({ img, quote, name, role }) {
  return (
    <div className="flex relative flex-col sm:flex-row items-center sm:items-start md:gap-5">
      {/* Image */}
      <div className="w-48 h-60 sm:w-42 sm:h-50 md:w-46 md:h-60 z-10 relative rounded-tr-4xl rounded-bl-4xl overflow-hidden shadow-md">
        {img}
      </div>
      <div className="md:flex hidden absolute w-40 h-40 -top-4 -left-3 rounded-tr-4xl rounded-bl-4xl bg-[#D8431599]"></div>

      {/* Content */}
      <div className="flex-1 text-center sm:text-left md:mt-8 pl-3">
        <span className="text-4xl text-stone-300 font-serif">"</span>

        <p className="text-sm text-stone-700 leading-relaxed -mt-3 mb-4">
          {quote}
        </p>

        <span className="hidden sm:block text-4xl text-stone-300 font-serif float-right">
          "
        </span>

        <div className="clear-both">
          <p className="text-sm font-semibold text-stone-800">{name}</p>
          <p className="text-sm font-semibold text-[#D84315]">{role}</p>
        </div>
      </div>
    </div>
  );
}
