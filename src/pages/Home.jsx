import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import SimpleSteps from "../components/Home/simpleSteps";
import { Link } from "react-router-dom";

import {
    Button,
  } from "@material-tailwind/react";

import Programs from "../components/Home/programs";
import InfoSession from "../components/Home/InforSession";
import RedefinePossible from "../components/Home/redefinePossibility";
import TestimonialSection from "../components/Home/Testimonial";
import MissionVisionSection from "../components/Home/missionAndVision";

function Home() {
  return (
    <>
  <div className="w-full min-h-screen flex flex-col justify-center ">
    <div className="w-full backdrop-blur-sm z-50 backdrop-brightness-50 bg-transparent px-4 md:px-6 absolute top-0 pt-3 pb-10 text-white flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-1">
     <div className="mx-auto  flex flex-col md:flex-row justify-center align-middle items-center">
     <div className="w-full  flex justify-center align-middl pr-2">
        <h3 className="text-sm md:text-lg lg:text-xl font-light md:font-normal bg-transparent"> 
          New Cohort is Starting{" "}
          <span className="font-bold md:font-extrabold ">November</span> - Click to Join!
        </h3>
      </div>
      <Link to="apply">
      <Button className="md:px-1 w-40 rounded-2xl text-md text-center  md:text-md font-bold  bg-primary border-0">
          Join Now
        </Button>
      </Link>
     
     </div>
    </div>
    <div className="absolute z-50 w-full top-24 rounded-sm">
      <Navbar />
    </div>

    <Hero />
    <MissionVisionSection/>
    <SimpleSteps/>
    <Programs />
    <InfoSession/>

    <TestimonialSection/>
    <RedefinePossible/>

    <Footer />

  </div>

    
    </>
 
  );
}

export default Home;
