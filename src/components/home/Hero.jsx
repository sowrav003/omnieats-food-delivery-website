import Image from "next/image";
import { Pizza, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-[#1a1a1a] pt-32 pb-20 text-white lg:pt-36 lg:pb-28">
      <Image
        src="/food.png"
        alt="Hero Image"
        fill
        priority
        className="z-0 object-cover object-right"
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a] via-[#1a1a1a]/85 to-transparent" />

      <div className="absolute left-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-2 text-xs font-semibold text-orange-400 backdrop-blur">
            <Pizza className="size-4" />
            Fast Food Delivered To Your Doorstep
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight">
            Fast Delivery
            <br />& Fresh Food
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-300">
            Order your favorite meals from top restaurants with fast delivery
            and premium quality.
          </p>

          <div className="mt-8 flex flex-wrap  gap-4">
            <Button className="h-12 rounded-2xl bg-orange-500 px-8 text-base font-bold hover:bg-orange-600">
              Order Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="h-12 rounded-2xl border-zinc-700 bg-transparent px-8 text-base font-bold text-white hover:bg-zinc-900 hover:text-white"
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
