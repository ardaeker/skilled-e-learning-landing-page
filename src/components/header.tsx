import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="relative z-20 px-5 py-4 md:px-11 md:py-6 xl:px-0">
      <div className="mx-auto flex w-full max-w-280 items-center justify-between">
        <Link href="/" className="relative inline-block h-5 w-20 xl:h-7 xl:w-28">
          <Image src="/logo-dark.svg" alt="Skilled homepage" sizes="100vw" fill />
        </Link>
        <Link
          href="#"
          className="inline-block rounded-[1.75rem] bg-blue-900 px-6 py-3 text-lg leading-[1.6875rem] font-bold text-white transition-colors duration-200 hover:bg-blue-600 xl:px-8 xl:py-4"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
