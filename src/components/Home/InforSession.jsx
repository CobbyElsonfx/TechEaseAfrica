import { CheckCircleIcon } from "@heroicons/react/24/solid";
import QA from "../../assets/QA.png";
import Online from "../../assets/online.png";

function InfoSession() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-3">
        {/* Left Column */}
        <div className="flex flex-col space-y-1 md:w-1/2 self-center justify-center align-middle items-center ">
          <div>
            <img src={Online} alt="Online Info" className="w-50 h-auto" />{" "}
            {/* Image added back */}
          </div>
          <h3 className="text-2xl font-bold">Online Info Session</h3>
          <div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-5 w-5 text-primary" />{" "}
              {/* Custom bullet point */}
              <span>Get a course recommendation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-5 w-5 text-primary" />{" "}
              {/* Custom bullet point */}
              <span>See how we teach</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-5 w-5 text-primary" />{" "}
              {/* Custom bullet point */}
              <span>Meet your instructors</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-5 w-5 text-primary" />{" "}
              {/* Custom bullet point */}
              <span>Admissions Q&A</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-1 md:w-1/2 self-center justify-center align-middle items-center ">
          <div>
            <img src={QA} alt="QA Session" className="w-50 h-auto" />{" "}
            {/* Image added back */}
          </div>
          <h3 className="text-2xl font-bold px-4 text-center md:px-1">See How the Bootcamp Works</h3>
          <div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-5 w-5 text-primary" />{" "}
              {/* Custom bullet point */}
              <span>Learn all our course options</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-5 w-5 text-primary" />{" "}
              {/* Custom bullet point */}
              <span>Discover custom financing option</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-5 w-5 text-primary" />{" "}
              {/* Custom bullet point */}
              <span>See how our bootcamp works</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSession;
