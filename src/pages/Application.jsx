

import NavbarWithSimpleLinks from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";

function ApplicationForm() {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    whatsappNumber: "",
    country: "",
    educationLevel: "",
    selectedCourse: "",
    agreementAccepted: false,
  });

  const [step, setStep] = useState(1); // Step state to control the flow of the form
  const [secondaryCourses, setSecondaryCourses] = useState([]); // To manage additional courses
  const [showModal, setShowModal] = useState(false); // To show the modal

  const courses = ["Web Development", "Data Science", "UI/UX Design", "Mobile App Development"];
  const countries = ["Ghana", "Nigeria", "Kenya", "South Africa"];
  const educationLevels = ["High School", "Diploma", "Bachelor's Degree", "Master's Degree", "PhD"];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Move to the course selection step
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agreementAccepted) {
      setStep(2); // Move to the next step
    } else {
      alert("You must accept the agreement before submitting.");
    }
  };

  // Handle adding/removing secondary courses
  const handleCourseChange = (course) => {
    setSecondaryCourses((prevCourses) => 
      prevCourses.includes(course)
        ? prevCourses.filter((c) => c !== course)
        : [...prevCourses, course]
    );
  };

  // Final submission after course selection
  const handleFinalSubmit = () => {
    setShowModal(true); // Show the modal
    console.log("Form submitted with selected courses", {
      formData,
      secondaryCourses,
    });
  };

  return (
    <>
      <NavbarWithSimpleLinks />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">

              {/* Step 1: Enrollment Application Form */}
              {step === 1 && (
                <>
                  <h1 className="text-2xl font-semibold">Enrollment Application Form</h1>
                  <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {/* First Name */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                      placeholder="First Name"
                    />
                    <label
                      htmlFor="firstName"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      First Name
                    </label>
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                      placeholder="Last Name"
                    />
                    <label
                      htmlFor="lastName"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Last Name
                    </label>
                  </div>

                  {/* Other Name */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="otherName"
                      name="otherName"
                      type="text"
                      value={formData.otherName}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                      placeholder="Other Name"
                    />
                    <label
                      htmlFor="otherName"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Other Name
                    </label>
                  </div>

                  {/* WhatsApp Number */}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      type="text"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                      placeholder="WhatsApp Number"
                    />
                    <label
                      htmlFor="whatsappNumber"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      WhatsApp Number
                    </label>
                  </div>

                  {/* Country of Origin (Select Dropdown) */}
                  <div className="relative">
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    >
                      <option className="text-sm" value="" disabled>Select your country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <label
                      htmlFor="country"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Country of Origin
                    </label>
                  </div>

                  {/* Highest Level of Education (Select Dropdown) */}
                  <div className="relative">
                    <select
                      id="educationLevel"
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleChange}
                      className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    >
                      <option value="" disabled>Select your education level</option>
                      {educationLevels.map((level, index) => (
                        <option key={index} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    <label
                      htmlFor="educationLevel"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Highest Level of Education
                    </label>
                  </div>

                  {/* Course Selection (Radio Buttons) */}
                  <div className="relative">
                    <p className="mb-2 font-medium text-md" >Select a Course:</p>
                    {courses.map((course, index) => (
                      <div key={index} className="mb-2">
                        <input
                          type="radio"
                          id={course}
                          name="selectedCourse"
                          value={course}
                          checked={formData.selectedCourse === course}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor={course}>{course}</label>
                      </div>
                    ))}
                  </div>

                  {/* Accept Agreement */}
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreementAccepted"
                      checked={formData.agreementAccepted}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="agreement">
                      I accept the terms and conditions of this application.
                    </label>
                  </div>

                  {/* Submit Button */}
             
                </div>
                    <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1 mt-4">
                      Proceed to Course Selection
                    </button>
                  </form>
                </>
              )}

              {/* Step 2: Course Selection */}
              {step === 2 && (
                <>
                  <h1 className="text-2xl font-semibold">Select Additional Courses</h1>
                  <div className="mb-4">
                    {courses.map((course, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          id={course}
                          name={course}
                          value={course}
                          checked={secondaryCourses.includes(course)}
                          onChange={() => handleCourseChange(course)}
                          className="mr-2"
                        />
                        <label htmlFor={course}>{course}</label>
                      </div>
                    ))}
                  </div>
                  <button onClick={handleFinalSubmit} className="bg-green-500 text-white rounded-md px-4 py-2">
                    Submit and Enroll
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Congratulations!</h2>
            <p>You have been successfully enrolled in the course.</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ApplicationForm;

