import Image from "next/image";
import React from "react";
import { restaurants } from "@/assets/assets";
import Link from "next/link";

const Restaurants = () => {
  const tileStyles = [
    "bg-[#d61f26]",
    "bg-[#0f7a35]",
    "bg-[#ed3324]",
    "bg-[#ffbf3b]",
    "bg-[#ff8f1f]",
    "bg-[#f3f3f3]",
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-10 px-3 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Popular Restaurants
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Best Places To Order Now
          </p>
        </div>
        <Link href="/restaurants" className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6 lg:gap-3">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="group overflow-hidden rounded-xl border border-black/5 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className='relative aspect-square bg-gray-100'
              >
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-white/10 bg-[#ff9800] px-2 py-2 text-center">
                <h2 className="truncate text-[12px] sm:text-xs font-semibold text-white">
                  {restaurant.name}
                </h2>
              </div>
            </div>
          ))}
        </Link>
      </div>
    </section>
  );
};

export default Restaurants;
