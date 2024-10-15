import PrimaryCourses from "../primaryCourses";
import SecondaryCourses from "../secondaryCourses";

function Programs() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 via-tea-light to-tea-dark">
    {/* Background overlay pattern */}
    <div className="absolute inset-0 bg-pattern opacity-30 mix-blend-overlay"></div>
  
    {/* Main container */}
    <div className="container mx-auto py-10 px-4 md:px-6">
      {/* Main Heading */}
      <h3 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white mb-12 tracking-wide leading-tight">
  {/* Main Text with White Color */}
  <span className="text-primary">Our</span>
  <span className="ml-2 text-primary">Programs</span>

  {/* Decorative Underline */}
  <span className="absolute block w-20 h-1 bg-white rounded-full mt-6 left-1/2 transform -translate-x-1/2 opacity-90"></span>
</h3>



  
      {/* Section: Primary Courses */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-10 transition duration-300 ease-in-out hover:shadow-2xl">
        <h4 className="text-3xl md:text-4xl text-tea-dark font-semibold mb-6 relative">
          <span className="text-primary">Primary</span> 
          <span className="text-gray-800"> Courses</span>
          <span className="absolute block w-14 h-1 bg-primary rounded-full mt-2"></span>
        </h4>
        <PrimaryCourses />
      </div>
  
      {/* Section: Introductory Programs */}
      <div className="bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out hover:shadow-2xl">
        <h4 className="text-3xl md:text-4xl text-tea-dark font-semibold mb-6 relative">
          <span className="text-primary">Introductory</span> 
          <span className="text-gray-800"> Programs</span>
          <span className="absolute block w-14 h-1 bg-primary rounded-full mt-2"></span>
        </h4>
        <SecondaryCourses />
      </div>
    </div>
  </div>
  
  );
}

export default Programs;
