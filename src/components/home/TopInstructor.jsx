import Image from "next/image";

export default function TopInstructors() {
  const instructors = [
    {
      name: "John Doe",
      role: "Web Development Instructor",
      image: "https://i.pravatar.cc/300?img=11",
      courses: "8 Courses",
    },
    {
      name: "Sarah Khan",
      role: "UI/UX Design Mentor",
      image: "https://i.pravatar.cc/300?img=32",
      courses: "6 Courses",
    },
    {
      name: "Michael Smith",
      role: "Digital Marketing Expert",
      image: "https://i.pravatar.cc/300?img=12",
      courses: "5 Courses",
    },
    {
      name: "Ayesha Rahman",
      role: "Data Science Instructor",
      image: "https://i.pravatar.cc/300?img=47",
      courses: "7 Courses",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-base-100 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 ">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
            Top Instructors
          </h2>

          <p className="text-base-content/60 mt-3 leading-relaxed">
            Learn from experienced instructors who guide students with practical
            skills and real-world knowledge.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-7 mb-10">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(25%-21px)] bg-base-100 border border-base-300 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <Image
                src={instructor.image}
                alt={instructor.name}
                width={120}
                height={120}
                className="w-28 h-28 rounded-full object-cover mx-auto"
              />

              <h3 className="text-xl font-bold mt-5">
                {instructor.name}
              </h3>

              <p className="text-sm text-base-content/60 mt-1 min-h-[40px]">
                {instructor.role}
              </p>

              <div className="mt-4">
                <span className="badge badge-success badge-outline">
                  {instructor.courses}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}