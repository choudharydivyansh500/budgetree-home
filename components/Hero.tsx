export default function Hero() {
  return (
    <section className="container relative flex min-h-screen items-center pt-28">


      <div className="w-full lg:w-1/2">


        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2">

          <div className="h-2 w-2 rounded-full bg-blue-500" />

          <span className="text-sm font-medium text-blue-300">
            Enterprise Rewards Infrastructure
          </span>

        </div>


        <h1 className="max-w-xl text-6xl font-black leading-tight text-white">

          Power modern
          <br />

          growth with

          <span className="block bg-linear-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
            Loyalty
          </span>

        </h1>

    

        <p className="mt-8 max-w-lg text-lg leading-8 text-slate-400">

          One platform for campaigns, rewards, referrals,
          cashback and customer engagement.

          Build beautiful loyalty experiences without
          engineering complexity.

        </p>


        <div className="flex items-center gap-4 shrink-0">

          <button className="min-w-50 h-12 px-8 rounded-xl bg-[#5B7CFF] text-white font-semibold whitespace-nowrap">

           Book Instant Demo

          </button>


         <button className="min-w-37.5 h-12 px-8 rounded-xl text-white font-semibold whitespace-nowrap">

            Learn More

          </button>

        </div>



        <div className="mt-10 flex items-center gap-4">

          <div className="flex -space-x-3">

            <div className="h-12 w-12 rounded-full border-2 border-[#050816] bg-slate-500" />

            <div className="h-12 w-12 rounded-full border-2 border-[#050816] bg-blue-500" />

            <div className="h-12 w-12 rounded-full border-2 border-[#050816] bg-cyan-400" />

            <div className="h-12 w-12 rounded-full border-2 border-[#050816] bg-indigo-400" />

          </div>

          <div>

            <h4 className="font-semibold text-white">

              Trusted by 250+ clients

            </h4>

            <p className="text-sm text-slate-400">

              Fast growing companies worldwide

            </p>

          </div>

        </div>

      </div>

      

      <div className="hidden w-1/2 justify-end lg:flex">

        <div className="relative">

        

          <div className="absolute left-1/2 top-1/2 h-\[500px\] w-\[500px\] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

          

          <div className="relative w-\[480px] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="mb-8 flex items-center justify-between">

              <h3 className="text-xl font-bold">

                Dashboard

              </h3>

              <div className="rounded-full bg-green-500 px-4 py-2 text-sm">

                Live

              </div>

            </div>

    

            <div className="flex h-56 items-end justify-between gap-3">

              <div className="h-24 w-10 rounded-t-xl bg-blue-500" />

              <div className="h-36 w-10 rounded-t-xl bg-cyan-400" />

              <div className="h-28 w-10 rounded-t-xl bg-blue-400" />

              <div className="h-44 w-10 rounded-t-xl bg-blue-600" />

              <div className="h-40 w-10 rounded-t-xl bg-indigo-500" />

              <div className="h-52 w-10 rounded-t-xl bg-cyan-300" />

            </div>

    

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-black/30 p-5">

                <p className="text-slate-400">

                  Active Users

                </p>

                <h2 className="mt-3 text-3xl font-bold">

                  10.2M

                </h2>

              </div>

              <div className="rounded-2xl bg-black/30 p-5">

                <p className="text-slate-400">

                  Growth

                </p>

                <h2 className="mt-3 text-3xl font-bold">

                  +248%

                </h2>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}