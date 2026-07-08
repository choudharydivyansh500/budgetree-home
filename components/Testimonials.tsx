import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder • TechNova",
    image: "/images/users/user1.jpg",
    review:
      "The dashboard is incredibly intuitive. Managing GST, invoices and reports has become effortless for our team.",
  },
  {
    name: "Priya Mehta",
    role: "CEO • GrowStack",
    image: "/images/users/user2.jpg",
    review:
      "The UI feels premium and the analytics help us make faster business decisions every single day.Exactly what every growing business needs",
  },
  {
    name: "Amit Verma",
    role: "Finance Head • PixelLabs",
    image: "/images/users/user3.jpg",
    review:
      "Clean interface, powerful reports and excellent performance. Exactly what every growing business needs.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-32 px-20">
      {/* Glow */}

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="container relative z-10">
        <div className="text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-300">
            Testimonials
          </span>

          <h2 className="mt-8 text-5xl lg:text-6xl font-black text-white">
            Loved By
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Thousands of startups and enterprises trust our platform to simplify
            accounting and finance.
          </p>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-[32px] border border-slate-700 bg-slate-900/70 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_20px_70px_rgba(59,130,246,.25)]"
            >
              <div className="absolute right-6 top-6 opacity-10">
                <Quote size={70} className="text-blue-400" />
              </div>

              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#FACC15"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-8 leading-8 text-slate-300">{item.review}</p>

              <div className="mt-10 flex items-center gap-4">
                <div>
                  <h3 className="font-bold text-lg text-white">{item.name}</h3>

                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
