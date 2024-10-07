import { FaChalkboardTeacher, FaBookOpen, FaHandsHelping, FaUsers, FaGlobe } from 'react-icons/fa'; // Import your preferred icons

const TechEaseBlogLayout = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Description Column */}
          <div className="md:col-span-1 space-y-5 text-lg text-tea-600"> {/* Apply your primary color here */}
            <p>
              <span className='font-semibold'>TECHEASE </span>Africa, which is a subsidiary institution under KAYISH groups, was established two years ago. 
              As part of its services, it used to give training and digital support to companies and professionals. 
              To expand its territories, it decided to absorb each person who is willing and of sound mind to be taught 
              high-demand digital skills to elevate and add value to their life as the world changes into an AI world 
              across Africa, with about <span className="font-semibold">1000+</span> past students.
            </p>
            <p>
              Notably, we do not charge tuition fees. Instead, participants contribute a mandatory non-refundable 
              supportive fee of <strong>GHS150/$10</strong> for the entire duration. This enables us to maintain 
              our operations and provide sustainable education solutions.
            </p>
          </div>

          {/* Adjacent Column with Bullet Points */}
          <div className="md:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-tea-600">What We Do</h2> {/* Apply your primary color here */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded shadow-md dark:bg-gray-50">
                <h3 className="font-semibold text-tea-600 flex items-center"> {/* Use flex for icon alignment */}
                  <FaChalkboardTeacher className="mr-2 text-tea-600" /> Our Offerings
                </h3>
                <ul className="list-none list-inside space-y-5">
                  <li><FaBookOpen className="inline mr-2 text-tea-600" /> Expert-led live classes</li>
                  <li><FaHandsHelping className="inline mr-2 text-tea-600" /> Access to comprehensive learning materials</li>
                  <li><FaUsers className="inline mr-2 text-tea-600" /> 4 weeks dedicated mentorship/internship training</li>
                </ul>
              </div>
              {/* Additional Columns */}
              <div className="p-4 bg-white rounded shadow-md dark:bg-gray-50">
                <h3 className="font-semibold text-tea-600 flex items-center">
                  <FaGlobe className="mr-2 text-tea-600" /> Our Approach
                </h3>
                <ul className="list-none list-inside space-y-5 ">
                  <li><FaBookOpen className="inline mr-2 text-tea-600" /> Community-driven learning</li>
                  <li><FaHandsHelping className="inline mr-2 text-tea-600" /> Personalized learning paths</li>
                  <li><FaUsers className="inline mr-2 text-tea-600" /> Networking opportunities with industry experts</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded shadow-md dark:bg-gray-50">
                <h3 className="font-semibold text-tea-600 flex items-center">
                  <FaGlobe className="mr-2 text-tea-600" /> Future Aspirations
                </h3>
                <ul className="list-none list-inside space-y-5">
                  <li><FaBookOpen className="inline mr-2 text-tea-600" /> Expanding our course offerings</li>
                  <li><FaHandsHelping className="inline mr-2 text-tea-600" /> Establishing partnerships with tech companies</li>
                  <li><FaUsers className="inline mr-2 text-tea-600" /> Launching a scholarship program for underprivileged students</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechEaseBlogLayout;
