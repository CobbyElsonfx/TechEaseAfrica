import PrimaryCourses from "../primaryCourses";
import SecondaryCourses from "../secondaryCourses";

function Programs() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Main container */}
      <div className="container mx-auto py-16 px-4 md:px-6">
        {/* Main Heading */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-teal-700 mb-12 tracking-wide leading-tight">
          Our Programs
        </h3>

        {/* Section: Primary Courses */}
        <div className="bg-white shadow-sm rounded-lg p-8 mb-10">
          <h4 className="text-2xl md:text-3xl text-teal-600 font-semibold mb-6">
            Primary Courses
          </h4>
          <PrimaryCourses />
        </div>

        {/* Section: Introductory Programs */}
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h4 className="text-2xl md:text-3xl text-teal-600 font-semibold mb-6">
            Introductory Programs
          </h4>
          <SecondaryCourses />
        </div>
      </div>
    </div>
  );
}

export default Programs;
