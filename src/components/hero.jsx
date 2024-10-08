import { Button } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div className="hero overflow-hidden relative bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 min-h-[70vh] md:min-h-screen flex flex-col justify-center items-center">
      {/* Abstract Shapes for Creativity */}
      <div className="absolute w-56 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -bottom-20 right-10"></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-65 z-0"></div>

      {/* Hero Content */}
      <div className="hero-content text-center relative mt-20 z-10 p-4">
        <div className="animate-fade-in-up pt-[5rem] px-6 md:px-0 text-wrap">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight tracking-wide">
            <span className="block font-semibold px-3 md:p-0 animate-type-writer">Launch Your Career</span>
            <span className="block text-teal-200 md:p-0">in Tech</span>
          </h1>
          <p className="py-6 px-[2rem] md:px-0 text-lg sm:text-2xl lg:text-3xl text-white font-light max-w-lg mx-auto">
            Learn digital skills to enhance your career path and shape the future.
          </p>
          <Button className="mt-4 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 px-8 py-3 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
