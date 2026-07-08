"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-1/2 -translate-x-1/2 z-50 w-full h-20 max-w-full">

      <div className="rounded-2xl border border-slate-700/60 bg-slate-900/70 backdrop-blur-2xl shadow-[0_10px_60px_rgba(0,0,0,0.45)]">

        <div className="flex h-20 items-center justify-between px-8">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 font-black text-white shadow-lg shadow-blue-500/30">

              B

            </div>

            <div>

              <h2 className="text-2xl font-black tracking-wide text-white">

                Budgetree

              </h2>

              <p className="-mt-1 text-xs text-slate-400">

                Finance OS

              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8 text-[15px]">

            <Link
              href="/"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Home
            </Link>

            <button className="flex items-center gap-1 text-slate-300 hover:text-blue-400 transition">

              Products

              <ChevronDown size={16} />

            </button>

            <button className="flex items-center gap-1 text-slate-300 hover:text-blue-400 transition">

              Solutions

              <ChevronDown size={16} />

            </button>

            <Link
              href="/"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Pricing
            </Link>

            <Link
              href="/"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Resources
            </Link>

            <Link
              href="/"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Contact
            </Link>

          </nav>

          {/* Right Buttons */}

          <div className="hidden lg:flex items-center gap-4">

            <button className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-medium text-slate-300 transition hover:border-blue-500 hover:text-white">

              Login

            </button>

            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,.45)] transition duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,.6)]">

              Book Demo

            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {open && (

          <div className="border-t border-slate-700 bg-slate-900 lg:hidden">

            <div className="flex flex-col gap-6 p-8">

              <Link href="/" className="text-slate-300">
                Home
              </Link>

              <Link href="/" className="text-slate-300">
                Products
              </Link>

              <Link href="/" className="text-slate-300">
                Solutions
              </Link>

              <Link href="/" className="text-slate-300">
                Pricing
              </Link>

              <Link href="/" className="text-slate-300">
                Contact
              </Link>

              <button className="mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white">

                Book Demo

              </button>

            </div>

          </div>

        )}

      </div>

    </header>
  );
}