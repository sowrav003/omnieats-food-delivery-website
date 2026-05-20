import { categories } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-10 px-3 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Categories
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Find your favorites fast
          </p>
        </div>

        <div className="flex items-center mt-4 overflow-x-scroll scrollbar-none gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.name.toLowerCase()}`}
              className="group flex flex-col items-center gap-2 p-4"
            >
              <div className="size-24 sm:32 sm:p-2 rounded-full overflow-hidden bg-orange-100 group-hover:ring-2 group-hover:ring-orange-300 transition-all duration-300">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="w-full h-full rounded-full object-contain transform-all "
                />
              </div>
              <span className="text-xs font-medium leading-tight text-gray-800 text-center">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
