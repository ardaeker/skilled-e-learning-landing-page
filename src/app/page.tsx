import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { Hero } from "@/components/hero";
import { PopularCourses } from "@/components/popular-courses";

export default function Page() {
  return (
    <div className="bg-gradient-blue relative overflow-hidden font-sans">
      <Header />
      <main className="min-h-screen">
        <Hero />
        <PopularCourses />
      </main>
      <Footer />
    </div>
  );
}
