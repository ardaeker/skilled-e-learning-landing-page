import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="px-5 pt-16 pb-[6.0625rem] md:px-11 md:py-[6.59375rem] xl:py-[10.90625rem]">
      <div className="mx-auto flex w-full max-w-280 flex-wrap justify-between">
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
        <div className="relative isolate mt-20.5 flex w-full max-w-sm items-center justify-center md:hidden">
          <div className="absolute -top-6 right-0 z-10 space-y-1.75 rounded-[0.625rem] bg-white px-5 pt-5 pb-4.5 shadow-[0px_34px_54px_0px_rgba(6,22,141,0.16)]">
            <span className="block text-sm leading-[1.05rem] font-bold text-gray-500">Members</span>
            <span className="block text-[2rem] leading-[2.4rem] font-extrabold text-blue-900">29k</span>
          </div>
          <div className="bg-gradient-pink relative h-[15.8125rem] w-[15.8125rem] overflow-hidden rounded-full">
            <Image src="/illustration-person.png" alt="" className="object-cover object-top" priority fill />
          </div>
          <div className="absolute -bottom-6 left-0 z-10 space-y-1.75 rounded-[0.625rem] bg-white px-5 pt-5 pb-4.5 shadow-[0px_34px_54px_0px_rgba(6,22,141,0.16)]">
            <span className="block text-sm leading-[1.05rem] font-bold text-gray-500">Course hours</span>
            <span className="block text-[2rem] leading-[2.4rem] font-extrabold text-blue-900">1,451</span>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="bg-gradient-purple absolute -top-26 -right-20 h-[43.0625rem] w-[13.5625rem] rotate-45 rounded-[9.9375rem] xl:-top-[176.54px] xl:-right-[24.96px] xl:h-[1008px] xl:w-[317px]">
            <div className="absolute -bottom-10 -left-13.5 -rotate-45 xl:-bottom-17 xl:-left-20">
              <div className="absolute -top-[13.75px] -right-[51.15px] z-10 space-y-1.75 rounded-[0.625rem] bg-white px-5 pt-5 pb-4.5 shadow-[0px_34px_54px_0px_rgba(6,22,141,0.16)] xl:top-[123px] xl:-right-[115.26px] xl:w-[155px] xl:space-y-1.5">
                <span className="block text-sm leading-[1.05rem] font-bold text-gray-500 xl:text-base xl:leading-6">
                  Members
                </span>
                <span className="block text-[2rem] leading-[2.4rem] font-extrabold text-blue-900 xl:text-[2.5rem] xl:leading-12">
                  29k
                </span>
              </div>
              <div className="bg-gradient-pink relative h-[23.9375rem] w-[13.5625rem] overflow-hidden rounded-[9.9375rem] xl:h-[560px] xl:w-[317px]">
                <Image src="/illustration-person.png" alt="" className="object-cover object-top" priority fill />
              </div>
              <div className="absolute -bottom-[37.7px] -left-[45.31px] z-10 space-y-1.75 rounded-[0.625rem] bg-white px-5 pt-5 pb-4.5 shadow-[0px_34px_54px_0px_rgba(6,22,141,0.16)] xl:bottom-[87px] xl:-left-[87.26px] xl:w-[199px] xl:space-y-1.5">
                <span className="block text-sm leading-[1.05rem] font-bold text-gray-500 xl:text-base xl:leading-6">
                  Course hours
                </span>
                <span className="block text-[2rem] leading-[2.4rem] font-extrabold text-blue-900 xl:text-[2.5rem] xl:leading-12">
                  1,451
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
