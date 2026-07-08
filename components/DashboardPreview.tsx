
import { ArrowUpRight, TrendingUp, Wallet, BarChart3 } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-32 px-20">
      {/* Background Glow */}

      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-\[420px] w-\[420px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="container relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
              Smart Dashboard
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
              Control Every
              <br />
              <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Business Metric
              </span>
              <br />
              From One Place
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              Track revenue, invoices, expenses, customers and real-time
              analytics with one beautiful dashboard.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,.4)] transition hover:scale-105">
                Explore Dashboard
              </button>

              <button className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-4 text-slate-300 transition hover:border-blue-500">
                Live Demo
              </button>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            {/* Bottom Card */}

            <div className="rounded-[34px] border border-slate-700 bg-slate-900/70 p-8 backdrop-blur-xl shadow-[0_20px_90px_rgba(0,0,0,.6)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Business Overview</p>

                  <h2 className="text-2xl font-bold text-white">Dashboard</h2>
                </div>

                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
                  Live
                </button>
              </div>

              <div className="mt-10 flex h-56 items-end gap-4">
                {[45, 70, 55, 92, 68, 82, 100].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 rounded-t-xl bg-linear-to-t from-blue-600 to-cyan-400"
                  />
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-slate-800 p-5">
                  <p className="text-slate-400">Customers</p>

                  <h3 className="mt-2 text-3xl font-black text-white">
                    12,846
                  </h3>
                </div>

                <div className="rounded-2xl bg-slate-800 p-5">
                  <p className="text-slate-400">Invoices</p>

                  <h3 className="mt-2 text-3xl font-black text-white">2,481</h3>
                </div>
              </div>
            </div>

            <div className="absolute -left-25 top-25 rounded-2xl border border-slate-700 bg-slate-900/80 p-5 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-500/20 p-3">
                  <TrendingUp className="text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Monthly Growth</p>

                  <h3 className="text-2xl font-bold text-white">+28%</h3>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 top-120 rounded-2xl border border-slate-700 bg-slate-900/90 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/20 p-3">
                  <Wallet className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Revenue</p>

                  <h3 className="text-3xl font-black text-white">₹14.8L</h3>
                </div>
              </div>
            </div>

            {/* Small Analytics */}

            <div className="absolute right-30 bottom-120 rounded-2xl border border-slate-700 bg-slate-900/90 p-5">
              <div className="flex items-center gap-3">
                <BarChart3 className="text-blue-400" />

                <div>
                  <p className="text-xs text-slate-400">Conversion</p>

                  <h4 className="font-bold text-white">94.6%</h4>
                </div>

                <ArrowUpRight className="text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
