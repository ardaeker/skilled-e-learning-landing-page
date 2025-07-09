import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { Hero } from "@/components/hero";
import { PopularCourses } from "@/components/popular-courses";

export default function Page() {
  return (
    <div className="font-sans">
      <Header />
      <main className="min-h-screen">
        <Hero />
        <PopularCourses />
      </main>
      <Footer />
    </div>
  );
}
