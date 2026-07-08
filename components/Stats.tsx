import {
  TrendingUp,
  Users,
  Wallet,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    number: "50K+",
    title: "Businesses",
    desc: "Growing companies trust our platform.",
    icon: Users,
  },
  {
    number: "₹850Cr+",
    title: "Transactions",
    desc: "Processed securely every year.",
    icon: Wallet,
  },
  {
    number: "99.9%",
    title: "Uptime",
    desc: "Reliable cloud infrastructure.",
    icon: BadgeCheck,
  },
  {
    number: "35%",
    title: "Average Growth",
    desc: "Increase in business efficiency.",
    icon: TrendingUp,
  },
];

export default function Stats() {
  return (
    <section className="py-28 px-20 bg-[#030712] text-white">

      <div className="container">

        <div className="text-center">

          <span className="inline-block rounded-full bg-blue-500/20 px-5 py-2 text-blue-300 font-semibold">

            Business Growth

          </span>

          <h2 className="text-5xl font-black mt-8">

            Numbers That Speak

          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-lg">

            Thousands of businesses manage finance,
            inventory and accounting from one platform.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-slate-800 border border-slate-700 p-8 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center">

                <item.icon size={30} />

              </div>

              <h3 className="text-5xl font-black mt-8">

                {item.number}

              </h3>

              <h4 className="text-2xl font-bold mt-4">

                {item.title}

              </h4>

              <p className="text-slate-400 mt-4 leading-7">

                {item.desc}

              </p>

            </div>
          ))}

        </div>

        <div className="mt-28 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-5xl font-black leading-tight">

              Grow Faster With
              Smart Financial Insights

            </h2>

            <p className="mt-8 text-slate-300 leading-8">

              Understand sales, expenses,
              invoices and profits using one
              powerful dashboard.

            </p>

            <button className="mt-10 bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-full font-bold">

              Start Free

            </button>

          </div>

          <div className="rounded-[35px] bg-slate-800 border border-slate-700 p-10">

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="w-5 h-5 rounded-full bg-blue-500"></div>

                <div>

                  <h4 className="font-bold text-xl">

                    Business Registered

                  </h4>

                  <p className="text-slate-400">

                    Setup completed successfully

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-5 h-5 rounded-full bg-blue-500"></div>

                <div>

                  <h4 className="font-bold text-xl">

                    GST Enabled

                  </h4>

                  <p className="text-slate-400">

                    Tax management activated

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-5 h-5 rounded-full bg-blue-500"></div>

                <div>

                  <h4 className="font-bold text-xl">

                    Dashboard Ready

                  </h4>

                  <p className="text-slate-400">

                    Analytics available instantly

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-5 h-5 rounded-full bg-blue-500"></div>

                <div>

                  <h4 className="font-bold text-xl">

                    Business Growth

                  </h4>

                  <p className="text-slate-400">

                    Continuous financial tracking

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}