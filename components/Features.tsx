import {
  ShieldCheck,
  BarChart3,
  Wallet,
  FileText,
  PieChart,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Data",
    desc: "Enterprise grade encrypted financial records.",
  },
  {
    icon: Wallet,
    title: "Expense Tracking",
    desc: "Track every business expense automatically.",
  },
  {
    icon: FileText,
    title: "GST Billing",
    desc: "Professional invoices in seconds.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Visual reports and insights for growth.",
  },
  {
    icon: PieChart,
    title: "Financial Reports",
    desc: "Profit, Loss & Cashflow reports.",
  },
  {
    icon: Clock3,
    title: "24/7 Access",
    desc: "Manage your business from anywhere.",
  },
];

export default function Features() {
  return (
    <section className="py-28 px-20">

      <div className="container">

        <h2 className="text-5xl font-black text-center">

          Everything You Need

        </h2>

        <p className="text-center text-gray-500 mt-5 max-w-2xl mx-auto">

          Powerful tools to simplify your business finances.

        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-slate-900 border border-slate-700 p-8 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

                <item.icon
                  size={32}
                  className="text-blue-600"
                />

              </div>

              <h3 className="text-2xl font-bold mt-8">

                {item.title}

              </h3>

              <p className="text-gray-500 mt-4 leading-7">

                {item.desc}

              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}