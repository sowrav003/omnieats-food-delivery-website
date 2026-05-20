import Image from "next/image";
import Link from "next/link";
import React from "react";
import { assets } from "@/assets/assets";

export const Banner = () => {
  return (
    <section className="px-3 py-6 sm:px-4 sm:py-8 lg:px-6 lg:py-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#eceff3] shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <div className="grid items-center lg:grid-cols-2">
          <div className="relative h-64 sm:h-100 lg:h-120">
            <Image
              src={assets.banner}
              alt="Happy couple ordering food on their phones"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top sm:object-center"
            />
          </div>

          <div className="px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
            <div className="max-w-xl">
              <h2 className="max-w-[12ch] text-3xl font-black leading-[0.95] tracking-tight text-[#0b1220] sm:text-5xl lg:text-6xl">
                Hungry? We&apos;ve Got You Covered!
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-[#475467] sm:text-base">
                Discover delicious meals from your favorite restaurants, delivered fast to your door.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="#"
                  aria-label="Download on the App Store"
                  className="inline-flex min-w-44 items-center gap-3 rounded-md bg-black px-4 py-3 text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Image
                    src={assets.appstore}
                    alt="App Store"
                    width={34}
                    height={34}
                    className="shrink-0"
                  />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-white/70">
                      Download on
                    </span>
                    <span className="block text-sm font-semibold sm:text-base">
                      App Store
                    </span>
                  </span>
                </Link>

                <Link
                  href="#"
                  aria-label="Get it on Google Play"
                  className="inline-flex min-w-44 items-center gap-3 rounded-md bg-black px-4 py-3 text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Image
                    src={assets.playstore}
                    alt="Google Play"
                    width={34}
                    height={34}
                    className="shrink-0"
                  />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-white/70">
                      Get it on
                    </span>
                    <span className="block text-sm font-semibold sm:text-base">
                      Google Play
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
