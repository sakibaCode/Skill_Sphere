import Hero from "@/components/home/Hero";
import Home from "@/components/home/Home";
import LearningTips from "@/components/home/LearningTips";
import PopularCourses from "@/components/home/PopularCourses";
import TopInstructors from "@/components/home/TopInstructor";

async function getCourses() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/courses.json`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  const courses = await getCourses();

  return (
    <>
      <Hero />
      <PopularCourses courses={courses} />
      <LearningTips/>
      <TopInstructors/>
      <Home />
    </>
  );
}