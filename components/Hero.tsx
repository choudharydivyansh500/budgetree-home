

"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030712] pt-40 pb-28">

      {/* Background Glow */}

      <div className="absolute -top-40 left-0 h-105 w-105 rounded-full bg-blue-600/20 blur-[170px]" />

      <div className="absolute right-0 top-20 h-112.5 w-112.5 rounded-full bg-cyan-500/15 blur-[180px]" />

      <div className="absolute left-1/2 bottom-0 h-87.5 w-87.5 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[170px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        {/* Badge */}

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 backdrop-blur-xl">

          <Sparkles className="text-blue-400" size={18} />

          <span className="text-sm font-medium text-blue-300">

            Trusted by 50,000+ Businesses Worldwide

          </span>

        </div>

        {/* Heading */}

        <h1 className="mt-10 max-w-6xl text-5xl font-black leading-[1.05] tracking-[-2px] text-white md:text-6xl lg:text-8xl">

          Power modern growth
          <br />

          <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">

            with Loyalty

          </span>

        </h1>

        {/* Paragraph */}

        <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-400 md:text-xl">

          Streamline accounting, GST, invoicing, inventory and business
          analytics in one modern platform built for ambitious startups
          and growing enterprises.

        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

          <button className="group rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_45px_rgba(59,130,246,.35)] transition duration-300 hover:scale-105">

            <span className="flex items-center gap-3">

              Start Free

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />

            </span>

          </button>

          <button className="rounded-xl border border-slate-700 bg-slate-900/60 px-8 py-4 text-lg text-slate-300 backdrop-blur-xl transition hover:border-blue-500 hover:text-white">

            <span className="flex items-center gap-3">

              <Play size={18} />

              Watch Demo

            </span>

          </button>

        </div>

        {/* Rating */}

        <div className="mt-12 flex items-center gap-3">

          <div className="flex text-yellow-400 text-xl">

            ★★★★★

          </div>

          <span className="text-slate-400">

            4.9/5 from 12,000+ reviews

          </span>

        </div>

        {/* Stats */}

        <div className="mt-20 grid w-full max-w-5xl gap-6 rounded-4xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl md:grid-cols-3">

          <div>

            <h2 className="text-5xl font-black text-white">

              50K+

            </h2>

            <p className="mt-3 text-slate-400">

              Active Businesses

            </p>

          </div>

          <div>

            <h2 className="text-5xl font-black text-white">

              ₹250Cr+

            </h2>

            <p className="mt-3 text-slate-400">

              Transactions Managed

            </p>

          </div>

          <div>

            <h2 className="text-5xl font-black text-white">

              99.99%

            </h2>

            <p className="mt-3 text-slate-400">

              Platform Uptime

            </p>

          </div>

        </div>

        {/* Trusted Companies */}

        {/* <div className="mt-20 w-full">

          <p className="mb-10 text-sm uppercase tracking-[8px] text-slate-500">

            Trusted By

          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

            {[
              "Microsoft",
              "Google",
              "Amazon",
              "Stripe",
              "Slack",
              "Notion",
            ].map((company) => (

              <div
                key={company}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 py-5 text-center text-lg font-semibold text-slate-500 transition hover:border-blue-500 hover:text-white"
              >
                {company}
              </div>

            ))}

          </div>

        </div> */}

      </div>

    </section>
  );
}