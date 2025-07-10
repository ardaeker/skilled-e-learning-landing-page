import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="px-5 py-16 md:px-11 md:py-[6.59375rem] xl:py-[10.90625rem]">
      <div className="flex w-full flex-wrap items-center justify-between min-md:mx-auto min-md:max-w-280">
        <div className="max-w-81.5 xl:max-w-114.25">
          <h1 className="text-[2.5rem] leading-12 font-extrabold text-balance text-blue-900 xl:text-[3.5rem] xl:leading-[4.2rem]">
            Maximize skill, minimize budget
          </h1>
          <p className="mt-6 text-lg leading-[1.6875rem] font-medium text-gray-500">
            Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life
            you want.
          </p>
          <Link
            href="#"
            className="group relative isolate mt-10 inline-block overflow-hidden rounded-[1.75rem] px-6 py-3 text-lg leading-[1.6875rem] font-bold text-white xl:px-8 xl:py-4"
          >
            <span className="bg-gradient-pink-light absolute inset-0 z-10" />
            <span className="bg-gradient-pink absolute inset-0 z-20 opacity-100 transition-opacity duration-200 group-hover:opacity-0" />
            <span className="relative z-30">Get Started</span>
          </Link>
        </div>
        <div className="-mx-5 w-full">
          <div className="min-xs:w-83.75 relative mt-16 h-80 w-full">
            <Image src="/image-hero-mobile.webp" alt="" sizes="100vw" className="w-full scale-115 object-cover" fill />
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
