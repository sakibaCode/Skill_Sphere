import { notFound } from "next/navigation";

async function getCourse(id) {
  const res = await fetch("http://localhost:3000/courses.json", {
    cache: "no-store",
  });

  const courses = await res.json();

  return courses.find((course) => course.id === Number(id));
}

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;

  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          {/* <img
            src={course.image}
            alt={course.title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          /> */}
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
              <span> {course.rating}</span>
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