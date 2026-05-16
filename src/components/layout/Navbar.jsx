"use client";

import Link from "next/link";
import { Bike, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Restaurants", href: "/restaurants" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/10 backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Bike size={24} className="text-[#0f3b1f]" />
          <h1 className="text-[22px] font-semibold tracking-tight text-[#0f3b1f]">
            OmniEats
          </h1>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-[15px] transition-colors ${
                pathname === item.href
                  ? "text-[#ff6b1a]"
                  : "text-[#1f2937] hover:text-[#ff6b1a]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <form className="hidden flex-1 justify-end lg:flex" role="search">
          <label className="relative w-full max-w-2xl">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7a7a7a]"
            />
            <input
              type="search"
              aria-label="Search groceries"
              placeholder="Search for groceries..."
              className="h-11 w-full rounded-full border border-[#eadfd5] bg-[#fff8f1] pl-11 pr-4 text-[15px] text-[#1f2937] outline-none transition placeholder:text-[#9d958c] focus:border-[#d8b99b] focus:ring-4 focus:ring-[#f6d7bf]/40"
            />
          </label>
        </form>

        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            aria-label="View cart"
            className="rounded-full p-2 text-[#111111] transition-colors hover:text-[#ff6b1a] focus:outline-none focus:ring-2 focus:ring-[#0f3b1f]/20"
          >
            <ShoppingCart size={24} />
          </button>
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full bg-[#0f3b1f] px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#124725] focus:outline-none focus:ring-2 focus:ring-[#0f3b1f]/25 sm:inline-flex"
          >
            <User size={18} />
            Sign In
          </button>
            <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 transition hover:bg-orange-50 lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-full z-50 border-t border-[#e8dfd5] bg-white px-4 py-4 shadow-lg lg:hidden"
          >
            <form className="mb-4" role="search">
              <label className="relative block">
                <Search
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7a7a7a]"
                />
                <input
                  type="search"
                  aria-label="Search groceries"
                  placeholder="Search for groceries..."
                  className="h-11 w-full rounded-full border border-[#eadfd5] bg-[#fff8f1] pl-11 pr-4 text-[15px] text-[#1f2937] outline-none placeholder:text-[#9d958c] focus:border-[#d8b99b] focus:ring-4 focus:ring-[#f6d7bf]/40"
                />
              </label>
            </form>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-[#fff3e8] text-[#ff6b1a]"
                    : "text-[#1f2937] hover:bg-[#faf7f3] hover:text-[#ff6b1a]"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f3b1f] px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#124725]"
            >
              <User size={18} />
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;