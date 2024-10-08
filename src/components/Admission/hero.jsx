import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[30rem] md:h-[40rem] lg:h-[50rem]">
      {/* Background Image */}
      <div className="heroAdmission bg-cover bg-center min-h-full flex flex-col justify-center items-center">
        {/* Tea-colored overlay */}
        <div className="absolute inset-0 bg-primary h-full opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 sm:px-8 md:px-12 lg:px-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Learning Science
          </h2>
          <p className="py-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white font-extralight">
            A brief look into how TechEase continually innovates and iterates
            so we can best serve our students.
          </p>
          <Link to="apply">
            <Button className="md:px-4 text-md font-normal md:text-lg bg-white text-primary border-0 px-2">
              Join Now
            </Button>
          </Link>
        </div>

        {/* Scroll Icon */}
        <div className="absolute bottom-6 flex justify-center w-full">
          <div className="animate-bounce w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
