import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  
} from "lucide-react";

import {
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const company = ["About", "Careers", "Pricing", "Contact"];

const product = ["Accounting", "GST Billing", "Analytics", "Invoices"];

const resources = ["Blog", "Help Center", "Privacy", "Terms"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-[#020617]">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* CTA */}

        <div className="mb-20 rounded-4xl border border-slate-700 bg-slate-900/70 p-10 backdrop-blur-xl lg:flex lg:items-center lg:justify-between">
          <div>
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              Get Started
            </span>

            <h2 className="mt-6 text-4xl font-black text-white lg:text-5xl">
              Ready to grow your business?
            </h2>

            <p className="mt-4 max-w-xl text-slate-400">
              Start managing accounting, GST, invoices and analytics from one
              beautiful dashboard.
            </p>
          </div>

          <button className="mt-8 flex items-center gap-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105 lg:mt-0">
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Footer Grid */}

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-xl font-black text-white">
                B
              </div>

              <div>
                <h2 className="text-2xl font-black text-white">Budgetree</h2>

                <p className="text-sm text-slate-500">Smart Finance Platform</p>
              </div>
            </div>

            <p className="mt-8 max-w-md leading-8 text-slate-400">
              Modern finance software for startups and businesses. Manage
              accounting, GST, inventory and analytics in one place.
            </p>

            {/* Contact */}

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-blue-400" />
                hello@budgetree.com
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={18} className="text-blue-400" />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} className="text-blue-400" />
                New Delhi, India
              </div>
            </div>

            {/* Social */}

            <div className="mt-10 flex gap-4">
              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition hover:border-blue-500 hover:text-blue-400">
                <FaInstagram size={18} />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition hover:border-blue-500 hover:text-blue-400">
                <FaLinkedinIn size={18} />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition hover:border-blue-500 hover:text-blue-400">
                <FaEnvelope size={18} />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition hover:border-blue-500 hover:text-blue-400">
                <FaFacebook size={18} />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition hover:border-blue-500 hover:text-blue-400">
                <FaPhone size={18} />
              </button>
            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Company</h3>

            <div className="space-y-4">
              {company.map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="block text-slate-400 transition hover:text-blue-400"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Product</h3>

            <div className="space-y-4">
              {product.map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="block text-slate-400 transition hover:text-blue-400"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Resources</h3>

            <div className="space-y-4">
              {resources.map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="block text-slate-400 transition hover:text-blue-400"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Budgetree. All rights reserved.</p>

          <div className="flex gap-8">
            <Link href="/" className="hover:text-blue-400">
              Privacy
            </Link>

            <Link href="/" className="hover:text-blue-400">
              Terms
            </Link>

            <Link href="/" className="hover:text-blue-400">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
