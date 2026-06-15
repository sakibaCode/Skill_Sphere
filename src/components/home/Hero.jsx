import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="min-h-[80vh] mt-10 flex items-center justify-center px-4">
            <div className="max-w-7xl w-full flex items-center bg-white/20 backdrop-blur-md rounded-3xl shadow-lg p-12">

                {/* Image Section */}
                <div className="flex-shrink-0 mr-32">
                    <Image
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                        alt="Students learning online"
                        width={600}
                        height={400}
                        className="w-[450px] h-80 rounded-2xl shadow-2xl object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="max-w-xl">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-black">
                        Upgrade Your Skills Today
                    </h1>

                    <p className="py-6 text-lg text-gray-700">
                        Learn from industry experts, build real-world skills, and grow your
                        career with practical courses designed for every learner.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="btn bg-green-600 text-white border-none hover:bg-green-700">
                            Explore Courses
                        </button>

                        <button className="btn btn-outline border-green-600 text-green-700 hover:bg-green-600 hover:text-white">
                            Learn More
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;