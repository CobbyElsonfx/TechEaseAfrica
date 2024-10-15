import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero overflow-hidden relative bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 min-h-[70vh] md:min-h-screen flex flex-col justify-center items-center">
      {/* Abstract Shapes for Creativity */}
      <div className="absolute w-56 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -bottom-20 right-10"></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-65 z-0"></div>

      {/* Hero Content */}
      <div className="hero-content text-center relative mt-20 mb-20 z-10 p-4">
        <div className="animate-fade-in-up pt-[10rem] px-[3rem] md:px-0 text-wrap">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight tracking-wide">
            <span className="font-semibold px-3 md:p-0 animate-type-writer">Launch Your Career</span>
            <span className="block text-teal-200 md:p-0">in Tech</span>
          </h1>
          <p className="py-6 px-[2rem] md:px-0 text-lg sm:text-2xl lg:text-3xl text-white font-light max-w-lg mx-auto">
            Learn digital skills to enhance your career path and shape the future.
          </p>
         <Link to="apply">
         <Button className="mt-4 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 px-8 py-3 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            Join Now
          </Button></Link>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
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
  );
};

export default Hero;
