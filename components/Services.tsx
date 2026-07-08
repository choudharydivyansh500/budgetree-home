import {
  ReceiptText,
  BarChart3,
  Wallet,
  ShieldCheck,
  Boxes,
  Users2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ReceiptText,
    title: "Smart GST Billing",
    desc: "Generate professional GST invoices with automation and real-time tax calculations.",
  },
  {
    icon: Wallet,
    title: "Expense Tracking",
    desc: "Monitor every expense, payment and transaction from one beautiful dashboard.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    desc: "Powerful insights with live charts, reports and financial forecasting.",
  },
  {
    icon: Boxes,
    title: "Inventory Control",
    desc: "Track stock levels, warehouses and product movement effortlessly.",
  },
  {
    icon: Users2,
    title: "Customer Management",
    desc: "Manage leads, customers and payment history in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Advanced encryption and secure cloud infrastructure for your business.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-32 px-20">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="container relative z-10">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

            Our Services

          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">

            Everything You Need To
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">

              Scale Your Business

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

            Powerful finance tools designed for startups,
            SMEs and enterprise businesses with an elegant,
            fast and secure experience.

          </p>

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((item) => (

            <div
              key={item.title}
              className="group rounded-[30px] border border-slate-700 bg-slate-900/70 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_25px_60px_rgba(37,99,235,.25)]"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/20">

                <item.icon
                  size={30}
                  className="text-blue-400"
                />

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-5 leading-8 text-slate-400">

                {item.desc}

              </p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-blue-400 transition group-hover:gap-4">

                Learn More

                <ArrowRight size={18} />

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}