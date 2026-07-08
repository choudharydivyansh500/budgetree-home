"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const brands= [
  "/images/brands/lava.png",
  "/images/brands/cipla.png",
  "/images/brands/mahindra.png",
  "/images/brands/astral.png",
  "/images/brands/welspun.png",
  "/images/brands/jsw.png",
  "/images/brands/red.png",
  "/images/brands/ifcon.png",
];

export default function BrandSection() {
  return (
    <section className="bg-[#030712] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#C89B3C]">
            Trusted by 250+ enterprises
          </span>

          <p className="mt-4 text-gray-500">
            Leading brands across BFSI, retail, and technology run rewards on
            Budgetree
          </p>
        </div>

        <Swiper 
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            
          }}
          loop
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-32 items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
                <Image
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  width={120}
                  height={60}
                  className="h-auto w-auto max-h-12 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
