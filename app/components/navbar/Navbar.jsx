"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="relative flex z-100 items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 bg-white shadow-sm">
      {/* Logo */}
      <Link
        href="/"
        className="text-lg sm:text-xl text-gray-900 tracking-wide z-20"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Mandu <span className="font-bold">HUB</span>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden lg:flex items-center gap-9 list-none m-0 p-0">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`relative text-sm pb-1 transition-colors duration-200 group no-underline ${
                isActive(link.href)
                  ? "text-[#D84315] font-semibold"
                  : "text-gray-600 hover:text-[#D84315]"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#D84315] transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Contact Button */}
      <Link
        href="/contact"
        className="hidden lg:block border border-[#D84315] text-[#D84315] text-sm font-medium px-5 py-2 rounded-md
          transition-all duration-200 hover:bg-[#D84315] hover:text-white hover:-translate-y-0.5 cursor-pointer bg-transparent no-underline"
      >
        Contact us
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden z-20 text-[#D84315]"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md border-t lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-5 list-none m-0 p-5 sm:p-6">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="w-full">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`relative inline-block text-sm pb-1 transition-colors duration-200 group no-underline ${
                  isActive(link.href)
                    ? "text-[#D84315] font-semibold"
                    : "text-gray-600 hover:text-[#D84315]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#D84315] transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}

          <li className="w-full pt-2">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center border border-[#D84315] text-[#D84315] text-sm font-medium px-5 py-2 rounded-md
                transition-all duration-200 hover:bg-[#D84315] hover:text-white cursor-pointer bg-transparent no-underline"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}