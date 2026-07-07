import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        
        <Link href="/" className="text-4xl font-bold text-white">
          budgetree
        </Link>


        <nav className="hidden gap-10 lg:flex">
          <Link href="#" className="text-gray-300 hover:text-white">
            About Us
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white">
            Products ▼
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white">
            Solutions ▼
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white">
            Blog
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </nav>

        
        <div className="flex items-center gap-4 shrink-0">
       <button
  className="min-w-37.5 h-12 px-8 rounded-xl bg-[#5B7CFF] text-white font-semibold whitespace-nowrap"
>
  Book demo
</button>

          <button

    className="min-w-37.5 h-12 px-8 rounded-xl bg-white text-black font-semibold whitespace-nowrap">
  

  Rewards
</button>

          <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-white">
            ☀
          </button>
        </div>
      </div>
    </header>
  );
}