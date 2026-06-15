"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import Image from "next/image";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mt-10 mb-10">
          <h1 className="text-4xl font-bold">Explore Our Courses</h1>
          <p className="mt-3 text-gray-500">
            Learn from industry experts and grow your skills.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search courses by title..."
            className="input input-bordered w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300"
            >
              <figure>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{course.title}</h2>

                <p className="text-sm">
                  <span className="font-semibold">Instructor:</span>{" "}
                  {course.instructor}
                </p>

                <p className="text-sm line-clamp-2">{course.description}</p>

                <div className="flex justify-between items-center mt-2">
                  <span className="badge badge-outline">{course.category}</span>

                  <span className="font-medium flex items-center gap-1 p-4">
                    <CiStar className="text-base" />
                    <span className="text-base leading-none">
                      {course.rating}
                    </span>
                  </span>
                </div>

                <div className="flex justify-between text-sm mt-2">
                  <span>{course.level}</span>
                  <span>{course.duration}</span>
                </div>

                <div className="card-actions justify-end mt-4">
                  <Link
                    href={`/courses/${course.id}`}
                    className="btn bg-green-600 text-white hover:bg-emerald-600 border-none"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center mt-10">
            <p className="text-lg text-gray-500">No courses found.</p>
          </div>
        )}
      </section>
    </>
  );
}