import { Mail } from "lucide-react";
import React from "react";

const Newsletter = () => {
    return (
        <section className="px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
            <div className="mx-auto max-w-6xl rounded-[28px] bg-[#fdfcf9] px-4 py-12 shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:px-8 sm:py-16 lg:px-16 lg:py-20">
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_2px_8px_rgba(15,23,42,0.08)] ring-1 ring-black/5">
                        <Mail className="h-7 w-7 text-[#243b28]" strokeWidth={1.8} />
                    </div>

                    <h2 className="mt-7 text-2xl font-semibold tracking-tight text-[#18322c] sm:text-3xl lg:text-[2rem]">
                        Subscribe to our Newsletter
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-[#6d7a82] sm:text-base">
                        Get weekly updates on fresh produce, seasonal offers, and exclusive discounts right to your inbox.
                    </p>

                    <form className="mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="h-14 w-full rounded-xl border border-[#d9e0e6] bg-white px-5 text-sm text-[#1f2937] outline-none transition focus:border-[#203824] focus:ring-2 focus:ring-[#203824]/10"
                        />
                        <button
                            type="submit"
                            className="h-14 rounded-xl bg-[#203824] px-8 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(32,56,36,0.18)] transition-transform duration-300 hover:-translate-y-0.5 sm:min-w-36"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;