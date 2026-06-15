"use client";

import { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useSession } from "@/app/lib/auth-client";

export default function CourseDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const { data: session, isPending } = useSession();

  const [course, setCourse] = useState(null);
  const [courseLoading, setCourseLoading] = useState(true);

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push(`/sign-in?redirect=${pathname}`);
    }
  }, [isPending, session, router, pathname]);

  useEffect(() => {
    async function getCourse() {
      try {
        const res = await fetch("/courses.json");
        const courses = await res.json();

        const foundCourse = courses.find(
          (course) => course.id === Number(id)
        );

        setCourse(foundCourse);
      } catch (error) {
        console.error(error);
      } finally {
        setCourseLoading(false);
      }
    }

    if (session?.user) {
      getCourse();
    }
  }, [id, session]);

  if (isPending || courseLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Course not found</h2>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <div className="badge badge-success mb-4">
            {course.category}
          </div>

          <h1 className="text-4xl font-bold mb-4">
            {course.title}
          </h1>

          <p className="text-base-content/70 mb-6">
            {course.description}
          </p>

          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="font-semibold">Instructor:</span>
              <span>{course.instructor}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-semibold">Duration:</span>
              <span>{course.duration}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-semibold">Level:</span>
              <span>{course.level}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-semibold">Rating:</span>
              <span>{course.rating}</span>
            </div>
          </div>

          <button className="btn btn-success mt-8">
            Enroll Now
          </button>
        </div>
      </div>

  
    </section>
  );
}