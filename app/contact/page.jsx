// ── FIND US & PLAN YOUR VISIT SECTION ──
// Drop this above your existing ContactUs section

import Image from "next/image";
import ContactSection from "./Contact-form";

const ORANGE = "#D97634";
const BG_CREAM = "#FDF6F0";

export default function page() {
  const ImgWineGlasses = () => (
    <div className="w-full h-full bg-stone-300 flex items-center justify-center text-stone-500 text-sm">
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
    <div className="w-full h-full bg-amber-100 flex items-center justify-center text-stone-500 text-sm">
      <Image
        src="/aboutpage/2.jpg"
        alt="Barista"
        width={500}
        height={500}
        className="h-full w-full object-cover"
      />
    </div>
  );
  return (

    <>
    <section
      style={{ backgroundColor: BG_CREAM }}
      className="py-14 px-6 md:px-16"
      >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-10 justify-center">
        {/* ── LEFT: Text content ── */}
        <div className="flex-1 max-w-xs">
          {/* Eyebrow */}
          <p
            className="text-xs font-sans font-semibold tracking-widest uppercase mb-2"
            style={{ color: ORANGE }}
            >
            Visit Our Restaurant
          </p>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-stone-800 mb-4 leading-tight">
            Find <span style={{ color: ORANGE }}>Us</span> &amp; Plan{" "}
            <span style={{ color: ORANGE }}>Your Visit</span>
          </h2>

          {/* Description */}
          <p className="text-xs text-stone-500 leading-relaxed mb-6">
            Enchanting ambiance, flavorful dishes, and attentive service. A true
            delight for plant lovers. Customer favorites include the chicken
            sandwich and tea.
          </p>

          {/* Info rows */}
          <div className="flex flex-col gap-3 mb-6">
            {/* Location */}
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <span style={{ color: ORANGE }}>
                {/* Map pin icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </span>
              Location, Address Name
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <span style={{ color: ORANGE }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </span>
              info@hubmandu.com
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <span style={{ color: ORANGE }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z" />
                </svg>
              </span>
              981111111 | 01- 1000000
            </div>
          </div>

          {/* Get Directions link */}
          <a
            href="#"
            className="text-xs font-sans font-semibold flex items-center gap-1 hover:underline"
            style={{ color: ORANGE }}
            >
            Get Directions
            <span className="text-base leading-none">→</span>
          </a>
        </div>

        {/* ── RIGHT: Image collage ── */}
        <div className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[320px] h-[260px]">
          <div className="relative flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] h-[280px]">
            {/* Top-left: wine glasses */}
            <div className="absolute top-0 left-0 w-[140px] sm:w-[160px] md:w-[175px] h-[200px] sm:h-[220px] md:h-[235px] rounded-tr-[30px] rounded-bl-[30px] overflow-hidden shadow-md z-10">
              <ImgWineGlasses />
            </div>
            {/* Bottom-right: barista */}
            <div className="absolute -bottom-5 right-0 w-[155px] sm:w-[180px] md:w-[200px] h-[200px] sm:h-[220px] md:h-[235px] rounded-br-[30px] rounded-tl-[30px] overflow-hidden shadow-md z-10">
              <ImgBarista />
            </div>
            {/* Decorative orange squares */}
            <div className="absolute top-1 right-[110px] sm:right-[125px] md:right-[142px] w-[40px] sm:w-[46px] md:w-[52px] h-[40px] sm:h-[46px] md:h-[52px] rounded-tl-2xl rounded-br-2xl z-0 bg-[#D84315]" />
            <div className="absolute -bottom-4 left-[95px] sm:left-[105px] md:left-[118px] w-[40px] sm:w-[46px] md:w-[52px] h-[40px] sm:h-[46px] md:h-[52px] z-0 bg-[#D84315] rounded-tl-2xl rounded-br-2xl" />
          </div>
        </div>
      </div>

    </section>

    <ContactSection/>
              </>
  );
}
