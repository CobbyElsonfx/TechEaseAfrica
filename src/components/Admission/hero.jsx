import { Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Hero =()=>{
    return (
<div className="h-[30rem] relative">
  {/* Background Image */}
  <div className="heroAdmission  min-h-full  bg-base-200  flex flex-col justify-center items-center align-middle">
    
    {/* Tea-colored overlay */}
    <div className="absolute inset-0 bg-primary h-100 opacity-40 z-10"></div>

    {/* Content */}
    <div className="hero-content my-8 text-start h-100 z-20">
      <div>
        <h2 className="text-5xl md:text-7xl font-bold text-white">
        Learning Science
        </h2>
        <p className="py-6 text-lg md:text-xl text-white font-extralight">
        A brief look into how TechEase continually innovates and iterates so we can best serve our students        </p>
      <Link to="apply">
      <Button className="md:px-4  text-md text-center font-normal md:text-lg  bg-white text-primary border-0 px-2">
          Join Now
        </Button>
      </Link>
      </div>
    </div>
  </div>
</div>


    )
}

export  default Hero