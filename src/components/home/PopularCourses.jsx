"use client";

import Link from "next/link";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PopularCourses({ courses = [] }) {
  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Popular Courses</h2>
        <p className="text-gray-500 mt-2">
          Top-rated courses loved by our learners.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="pb-12"
      >
        {popularCourses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 overflow-hidden h-full min-h-[480px]">
              <figure>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-52 object-cover"
                />
              </figure>

              <div className="card-body flex flex-col">
                <h3 className="card-title line-clamp-2 min-h-[56px]">
                  {course.title}
                </h3>

                <p className="text-sm">
                  <span className="font-semibold">Instructor:</span>{" "}
                  {course.instructor}
                </p>

                <p className="text-sm line-clamp-2 min-h-[40px]">
                  {course.description}
                </p>

                <div className="flex justify-between items-center mt-2">
                  <span className="badge badge-outline">{course.category}</span>
                  <span>{course.rating}</span>
                </div>

                <div className="flex justify-between text-sm mt-2">
                  <span>{course.level}</span>
                  <span>{course.duration}</span>
                </div>

                <div className="card-actions justify-end mt-auto">
                  <Link
                    href={`/courses/${course.id}`}
                    className="btn bg-green-600 text-white hover:bg-emerald-600 border-none"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}