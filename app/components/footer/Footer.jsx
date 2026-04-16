const NAV_LINKS = ["Home", "Menu", "Careers", "Contact", "Blogs"];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e1e1e] text-white px-8 md:px-16 pt-10 pb-6">

      {/* Top Row — Logo + Social */}
      <div className="flex items-center justify-between mb-6">
        {/* Logo */}
        <div
          className="text-[22px] font-normal tracking-wide"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Mandu{" "}
          <span className="text-[#D84315] font-bold">HUB</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="text-white hover:text-[#D84315] transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="text-white hover:text-[#D84315] transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[#333] mb-6" />

      {/* Nav Links */}
      <ul className="flex flex-wrap gap-6 mb-6 list-none p-0 m-0">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[13px] text-gray-300 hover:text-[#D84315] transition-colors duration-200 no-underline"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact Info Row */}
      <div className="flex flex-wrap gap-6 mb-8 items-center">
        {/* Location */}
        <a
          href="#"
          className="flex items-center gap-2 text-[13px] text-gray-300 hover:text-[#D84315] transition-colors duration-200 underline underline-offset-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418-4.418-7-8.182-7-11A7 7 0 0119 10c0 2.818-2.582 6.582-7 11z" />
            <circle cx="12" cy="10" r="2.5" fill="currentColor" stroke="none" />
          </svg>
          Location, Address Name
        </a>

        {/* Email */}
        <a
          href="mailto:info@hubmandu.com"
          className="flex items-center gap-2 text-[13px] text-gray-300 hover:text-[#D84315] transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          info@hubmandu.com
        </a>

        {/* Phone */}
        <div className="flex items-center gap-2 text-[13px] text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          9811111111 | 01-1000000
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[#333] mb-5" />

      {/* Bottom Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-[12px] text-gray-500">
        <p>
          © {new Date().getFullYear()} Hub Mandu. All rights reserved.{" "}
          <span className="mx-1">|</span>
          <a href="#" className="hover:text-[#D84315] transition-colors duration-200 underline underline-offset-2">
            Terms of Services
          </a>
          <span className="mx-1">|</span>
          <a href="#" className="hover:text-[#D84315] transition-colors duration-200 underline underline-offset-2">
            Privacy Policy
          </a>
        </p>

        <p className="flex items-center gap-1 text-gray-500">
          Developed by{" "}
          <span className="ml-1 text-[#D84315] font-semibold">◈</span>
        </p>
      </div>

    </footer>
  );
}