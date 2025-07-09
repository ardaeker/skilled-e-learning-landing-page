import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-blue-900 px-5 py-6 md:px-11">
      <div className="mx-auto flex w-full max-w-280 items-center justify-between">
        <Link href="/" className="relative inline-block h-5 w-20 xl:h-7 xl:w-28">
          <Image src="/logo-light.svg" alt="Skilled homepage" sizes="100vw" fill />
        </Link>
        <Link
          href="#"
          className="group relative isolate inline-block overflow-hidden rounded-[1.75rem] px-6 py-3 text-lg leading-[1.6875rem] font-bold text-white xl:px-8 xl:py-4"
        >
          <span className="bg-gradient-purple-light absolute inset-0 z-10" />
          <span className="bg-gradient-purple absolute inset-0 z-20 opacity-100 transition-opacity duration-200 group-hover:opacity-0" />
          <span className="relative z-30">Get Started</span>
        </Link>
      </div>
    </footer>
  );
}
