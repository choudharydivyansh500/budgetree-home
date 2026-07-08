"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faq = [
  {
    q: "Can I use it for GST billing?",
    a: "Yes, create GST invoices and reports easily.",
  },
  {
    q: "Is my business data secure?",
    a: "Your data is protected using modern security practices.",
  },
  {
    q: "Can I manage inventory?",
    a: "Yes, inventory and stock tracking are supported.",
  },
  {
    q: "Does it work on mobile?",
    a: "Yes, the UI is fully responsive.",
  },
];

export default function FAQ() {

const [open,setOpen]=useState<number | null>(0);

return(

<section className="py-28">

<div className="container max-w-4xl">

<h2 className="text-5xl font-black text-center">

Frequently Asked Questions

</h2>

<div className="mt-16 space-y-5">

{
faq.map((item,index)=>(

<div
key={index}
className="border rounded-3xl p-7"
>

<button
onClick={()=>setOpen(open===index?null:index)}
className="w-full flex justify-between items-center text-left"
>

<span className="font-bold text-xl">

{item.q}

</span>

<ChevronDown/>

</button>

{
open===index && (

<p className="mt-5 text-gray-600 leading-8">

{item.a}

</p>

)

}

</div>

))
}

</div>

</div>

</section>

)

}