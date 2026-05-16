import { assets,deals } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const Deals = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-10 px-3 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Special Deals
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Check out our latest offers and discounts!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="group relative overflow-hidden rounded-2xl h-64 sm:h-72 lg:h-80 cursor-pointer"
            >
              <Image
                src={deal.image}
                alt={deal.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60" />
                <div className="absolute top-0 right-4 h-12 w-16 bg-orange-400 rounded-b-2xl px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-sm">
                  <span className="text-black font-bold text-base sm:text-md">
                    -{deal.offer}
                  </span>
                </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                <span className="text-orange-500 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1">
                  {deal.restaurant}
                </span>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white line-clamp-2">
                  {deal.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals