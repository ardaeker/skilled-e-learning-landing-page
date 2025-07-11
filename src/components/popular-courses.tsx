import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "Animation",
    description: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    icon: "/icon-animation.svg",
  },
  {
    title: "Design",
    description: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    icon: "/icon-design.svg",
  },
  {
    title: "Photography",
    description: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    icon: "/icon-photography.svg",
  },
  {
    title: "Crypto",
    description:
      "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    icon: "/icon-crypto.svg",
  },
  {
    title: "Business",
    description:
      "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    icon: "/icon-business.svg",
  },
];

export function PopularCourses() {
  return (
    <section className="px-5 pt-16 pb-20 md:px-11 md:pt-23 md:pb-36">
      <div className="mx-auto w-full max-w-280">
        <ul className="max-md:space-y-15 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-15 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-21">
          <li className="bg-gradient-pink rounded-[0.9375rem] bg-white p-8 text-2xl leading-[1.8rem] font-extrabold text-white shadow-[0px_25px_50px_0px_rgba(6,22,141,0.04)] xl:text-[2rem] xl:leading-[2.4rem]">
            Check out our most popular courses!
          </li>
          {courses.map((course, index) => (
            <li
              key={index}
              className="relative flex flex-col justify-between space-y-6 rounded-[0.9375rem] bg-white px-8 pt-16 pb-10 shadow-[0px_25px_50px_0px_rgba(6,22,141,0.04)]"
            >
              <Image src={course.icon} alt="" width={56} height={56} className="absolute -top-7 left-8 rounded-full" />
              <h2 className="text-xl leading-6 font-extrabold text-blue-900 xl:text-2xl xl:leading-[1.8rem]">
                {course.title}
              </h2>
              <p className="text-base leading-6 font-bold text-gray-500 md:text-lg md:leading-[1.6875rem] lg:font-medium">
                {course.description}
              </p>
              <Link href="#" className="block max-w-max text-lg leading-[1.6875rem] font-bold text-pink-600">
                Get Started
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
