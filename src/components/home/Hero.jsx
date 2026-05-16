import { Pizza } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative mt-6 overflow-hidden rounded-[40px] bg-[#f8f4ee] lg:mt-8">
      
      <div className="grid min-h-140 items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:px-14">
        
        {/* Left Content */}
        <div className="relative z-10 max-w-xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold text-orange-500">
            <Pizza className="size-4" />
            Delicious Food Delivered To Your Doorstep
          </span>

          <h1 className="text-5xl font-bold leading-tight text-zinc-900 lg:text-7xl">
            Fast Delivery <br />
            & Fresh Food
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-500">
            Order your favorite meals from the best restaurants near you with fast delivery and fresh ingredients.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="rounded-full bg-orange-500 px-7 py-4 font-medium text-white transition hover:bg-orange-600">
              Order Now
            </button>

            <button className="rounded-full border border-zinc-300 px-7 py-4 font-medium text-zinc-700 transition hover:border-orange-500 hover:text-orange-500">
              View Menu
            </button>
          </div>
        </div>

        {/* Right Image */}
<div className="relative">
  <div className="absolute inset-0 bg-orange-200/40 blur-3xl" />

  <Image
    src="/hero.jpeg"
    alt="Hero Food"
    width={900}
    height={900}
    className="relative z-10 object-contain"
  />
</div>
      </div>
    </section>
  );
};

export default Hero;