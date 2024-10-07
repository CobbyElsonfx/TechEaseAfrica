import { Link } from "react-router-dom";
import { FaMoneyBillWave, FaRegClock, FaRegHandshake, FaRegCheckCircle } from "react-icons/fa";

const AdmissionInfo = () => {
  return (
    <div className="bg-gray-300">
      <div className="bg-gray-300 p-8 container mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          Admission
        </h1>

   {/* Content */}
<div className="mb-8">
  <p className="text-lg text-gray-800 mb-4">
    Ready to kickstart your educational journey? Enroll in any course of your choice and gain instant admission!
  </p>
  <p className="text-md text-gray-700 mb-4">
    <strong>Important Note:</strong> TechEase Africa is proud to be a fully funded scholarship institution, meaning you don’t have to worry about tuition fees!
  </p>
  <div className="bg-gray-200 p-4 rounded-md mb-4">
    <h3 className="text-md font-semibold text-gray-800">Admission Fee:</h3>
    <p className="text-md text-gray-700">
      To secure your place, a <strong>one-time payment</strong> of <strong>$10/GHS150</strong> is required as a supportive fee to help us maintain our operations.
    </p>
  </div>
  <div className="bg-gray-200 p-4 rounded-md mb-4">
    <h3 className="text-md font-semibold text-gray-800">Flexible Payment Options:</h3>
    <p className="text-md text-gray-700">
      We offer a convenient installment plan to accommodate your financial needs:
    </p>
    <ul className="list-disc list-inside text-md text-gray-700">
      <li>Monthly payments of <strong>GHS90/$6</strong></li>
    </ul>
  </div>
</div>

{/* Action Button */}
<div className="text-center mt-6">
  <Link to='apply'>
    <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-tahiti transition duration-200">
      Register Now
    </button>
  </Link>
</div>


        {/* New Sections */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Section: Benefits of Enrollment */}
          <div className="rounded-lg bg-white shadow-md p-6 text-center">
            <FaRegCheckCircle className="mx-auto text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Benefits of Enrollment</h3>
            <p className="text-gray-700">
              Gain access to a wealth of resources, expert mentors, and a supportive community.
            </p>
          </div>

          {/* Section: Payment Plans */}
          <div className="rounded-lg bg-white shadow-md p-6 text-center">
            <FaMoneyBillWave className="mx-auto text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Payment Plans</h3>
            <p className="text-gray-700">
              Choose between a one-time payment or convenient monthly installments to suit your budget.
            </p>
          </div>

          {/* Section: Quick Admission Process */}
          <div className="rounded-lg bg-white shadow-md p-6 text-center">
            <FaRegClock className="mx-auto text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Admission Process</h3>
            <p className="text-gray-700">
              Enjoy a straightforward and speedy admission process that gets you started on your learning journey.
            </p>
          </div>

          {/* Section: Support & Guidance */}
          <div className="rounded-lg bg-white shadow-md p-6 text-center">
            <FaRegHandshake className="mx-auto text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Support & Guidance</h3>
            <p className="text-gray-700">
              Our team is here to assist you every step of the way, ensuring you have a smooth experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionInfo;
