import PrimaryCourses from "../primaryCourses";
import SecondaryCourses from "../secondaryCourses";

function Programs() {
  return (
    <div className="bg-gradient-to-br from-tea-light to-tea-dark min-h-screen">
      {/* Main container */}
      <div className="container mx-auto py-8 px-4 md:px-6">
        {/* Main Heading */}
        <h3 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-gray-900 mb-8 tracking-wide relative">
          <span className="text-primary">Our</span>
          <span className="text-gray-800"> Programs</span>
          <span className="absolute block w-16 h-1 bg-primary rounded-full mt-4 left-1/2 transform -translate-x-1/2"></span>
        </h3>

        {/* Section: Primary Courses */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h4 className="text-2xl md:text-3xl text-tea font-semibold mb-4 relative">
            <span className="text-tea">Primary</span> <span className="text-primary">Courses</span>
            <span className="absolute block w-12 h-1 bg-tea rounded-full mt-2"></span>
          </h4>
          <PrimaryCourses />
        </div>

        {/* Section: Introductory Programs */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-2xl md:text-3xl text-tea font-semibold mb-4 relative">
            <span className="text-tea">Introductory</span> <span className="text-primary">Programs</span>
            <span className="absolute block w-12 h-1 bg-tea rounded-full mt-2"></span>
          </h4>
          <SecondaryCourses />
        </div>
      </div>
    </div>
  );
}

export default Programs;
