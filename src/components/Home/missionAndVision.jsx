import React from "react";
import { Link } from "react-router-dom";

const MissionVisionSection = () => {
  return (
    <section className="relative py-12 bg-gradient-to-b from-teal-600 to-teal-700">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Mission & Vision
          </h2>
          <p className="mt-4 text-base md:text-lg text-teal-100 max-w-lg mx-auto">
            Empowering a new generation of innovators and leaders in the digital age.
          </p>
        </div>

        {/* Mission & Vision Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Block */}
          <div className="group relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            {/* Icon */}
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-500 text-white mb-4 shadow-lg transition-transform duration-300 group-hover:rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-teal-700 mb-2">Mission</h3>
            <p className="text-sm md:text-base text-gray-600 text-center">
              Techease Africa is committed to empowering Africans with cutting-edge digital skills, providing accessible, high-quality training that fosters innovation, creativity, and career growth in the tech industry.
            </p>
          </div>

          {/* Vision Block */}
          <div className="group relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            {/* Icon */}
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-500 text-white mb-4 shadow-lg transition-transform duration-300 group-hover:rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-teal-700 mb-2">Vision</h3>
            <p className="text-sm md:text-base text-gray-600 text-center">
              To become a leading digital skills training hub in Africa, equipping 1 million people in the next 5 years with the tools and knowledge to thrive in the global digital economy.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h4 className="text-lg text-white font-bold mb-4">Join Us in Shaping the Future!</h4>
          <p className="text-sm md:text-base text-teal-200 max-w-md mx-auto">
            Together, we can create opportunities for learning and growth that resonate throughout Africa and beyond.
          </p>
          <Link to="/#">
            <button className="mt-6 bg-teal-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-teal-800 transition-transform duration-300 hover:scale-105">
              Get Involved
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
