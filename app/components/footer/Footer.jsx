const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];
export default function Footer() {
  return (
    <footer className="w-full bg-[#1e1e1e] text-white px-8 md:px-16 pt-10 pb-6">
      {/* Top Row — Logo + Social */}
      <div className="flex items-center flex-wrap justify-center gap-5 sm-gap-0 sm:justify-between mb-6">
        {/* Logo */}
        <div
          className="text-[22px] font-normal tracking-wide"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Mandu <span className="text-[#D84315] font-bold">HUB</span>
        </div>
        <div className="space-y-2 flex-col">
          <p className="text-xs tracking-widest text-gray-400 flex justify-center">
            NOW AVAILABLE ON
          </p>
          <div className="flex justify-center gap-10 text-sm">
            <a
              href="https://food.pathao.com/restaurants/guzdcojt/mandu-hubs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order Himalayan Thakali from Pathao Foods"
            >
              <span>Pathao Foods</span>
            </a>

            <a
              href="https://foodmandu.com/Restaurant/Details/2686"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order Himalayan Thakali from Foodmandu"
            >
              <span>Foodmandu</span>
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/ManduHub"
            aria-label="Facebook"
            className="text-white hover:text-[#D84315] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/manduhub/"
            aria-label="Instagram"
            className="text-white hover:text-[#D84315] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          {/* tiktok */}
          <a
            href="https://www.tiktok.com/@mandu.hubs.newbaneshwor"
            aria-label="Instagram"
            className="text-white hover:text-[#D84315] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[#333] mb-6" />

      {/* Nav Links */}
      <ul className="flex flex-wrap gap-6 mb-6 list-none p-0 m-0">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={link.path}
              className="text-[13px] text-gray-300 hover:text-[#D84315] transition-colors duration-200 no-underline"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact Info Row */}
      <div className="flex flex-wrap gap-6 mb-8 items-center">
        {/* Location */}
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Mandu+Hubs/@27.6878857,85.3333724,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19a238d42a93:0x34d17ff74eaf44bd!8m2!3d27.687881!4d85.3359473!16s%2Fg%2F11njtg0j38?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
          className="flex items-center gap-2 text-[13px] text-gray-300 hover:text-[#D84315] transition-colors duration-200 underline underline-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21c-4.418-4.418-7-8.182-7-11A7 7 0 0119 10c0 2.818-2.582 6.582-7 11z"
            />
            <circle cx="12" cy="10" r="2.5" fill="currentColor" stroke="none" />
          </svg>
          Madan Bhandari Road, Kathmandu 44600
        </a>

        {/* Email */}
        <a
          href="mailto:info@hubmandu.com"
          className="flex items-center gap-2 text-[13px] text-gray-300 hover:text-[#D84315] transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          manduhubs@gmail.com
        </a>

        {/* Phone */}
        <div className="flex items-center gap-2 text-[13px] text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          9808444499
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[#333] mb-5" />

      {/* Bottom Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-[12px] text-gray-400">
        <p>
          © {new Date().getFullYear()} Hub Mandu. All rights reserved.{" "}
          <span className="mx-1">|</span>
          <a
            href="/terms-of-service"
            className="hover:text-[#D84315] transition-colors duration-200 underline underline-offset-2"
          >
            Terms of Services
          </a>
          <span className="mx-1">|</span>
          <a
            href="/privacy-policy"
            className="hover:text-[#D84315] transition-colors duration-200 underline underline-offset-2"
          >
            Privacy Policy
          </a>
        </p>
        <a href="https://gr8.com.np">
          <p className="flex items-center gap-1 text-gray-200">
            Developed by{" "}
            <span className="ml-1 text-[#D84315] font-semibold">
              <img
                src="/logo/GR8-Nepal-Private-Limited-Logo.png"
                alt="GR8 Nepal Private Limited"
                height={20}
                width={20}
              />
            </span>
          </p>
        </a>
      </div>
    </footer>
  );
}
