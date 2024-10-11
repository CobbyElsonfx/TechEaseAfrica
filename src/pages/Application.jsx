import NavbarWithSimpleLinks from "../components/navbar";
import Footer from "../components/footer";
import SuccessModal from "../components/successModal";
import { useState } from "react";

function ApplicationForm() {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    email: "",
    whatsappNumber: "",
    country: "",
    educationLevel: "",
    selectedCourse: "",
    referralName: "", // Added field for referral
    agreementAccepted: false,
    wantsAdditionalCourses: null, // Track if user wants additional courses
  });

  const [step, setStep] = useState(1); // Step state to control the flow of the form
  const [secondaryCourses, setSecondaryCourses] = useState([]); // To manage additional courses
  const [showModal, setShowModal] = useState(false); // To show the modal

  const primaryCourses = ["Advance Website Development ", "Advance Frontend Engineering", "Advance Graphic Designing","Advance Data Science & Analytics","Advance Social Media Marketing"];
  const secondaryCoursesList = ["Introduction to Blogging", "Introduction to Computing", "Introduction to C++", "Introduction to UI/UX Design", "Introduction to Database Management"];
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

  // Move to the next step
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.selectedCourse && formData.agreementAccepted  ) {
      if(formData.wantsAdditionalCourses === "yes"){
        setStep(3)
      }
      else{
        setStep(2)

      }
      ; // Move to the next step
    } else {
      alert("Please select a primary course and accept the agreement before submitting.");
    }
  };

    // Handle final submission or move to secondary courses step
    const handleFinalSubmit = async () => {
      if (formData.wantsAdditionalCourses === "yes") {
        setStep(4); // Move to secondary course selection
      } else {
        setShowModal(true); // Show success modal
      }
    
      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxne8_bOmTNQEYtmq_r4Y6rA2S5Wzdrw7srukkn4iJv9b4T9ECYCvnPv5JmMAyiiRNF9w/exec", {
          method: "POST",
          body: JSON.stringify(formData),
          mode: "no-cors", // Will bypass CORS issues
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        const data = await response.json();
        if (data.status === "success") {
          setShowModal(true);
        } else {
          console.error("Form submission failed.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };
    

  // const handleFinalSubmitForNo  = () => {
  //   if (formData.wantsAdditionalCourses === "no") {
  //     setStep(3); // Move to secondary course selection
  //   } else {
  //     // Proceed to submission
  //     setShowModal(true); // Show success modal
  //   }
  // };

  // Handle secondary course selection
  const handleCourseChange = (course) => {
    setSecondaryCourses((prevCourses) =>
      prevCourses.includes(course)
        ? prevCourses.filter((c) => c !== course)
        : [...prevCourses, course]
    );
  };



  // Final submission with secondary courses
  const handleSecondaryCourseSubmit = () => {
    setShowModal(true); // Show success modal
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
                  <form onSubmit={handleSubmit} className="divide-y space-y-7 divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-7 px-3 mx-3 md:px-0 md:mx-3 text-gray-700 sm:text-lg sm:leading-7">
                      {/* Form fields for personal details (firstName, lastName, etc.) */}
                        {/* First Name */}
                        <div className="relative">
                        <input
                          required
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
                          required
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
                          id="email"
                          name="email"
                          required
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                          placeholder="teachafrica@gmail.com"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                        Email
                        </label>
                      </div>

                      {/* WhatsApp Number */}
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="whatsappNumber"
                          name="whatsappNumber"
                          required
                          type="number"
                          maxLength='10'
                          value={formData.whatsappNumber}
                          onChange={handleChange}
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                          placeholder="+233 558 000000"
                        />
                        <label
                          htmlFor="whatsappNumber"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          WhatsApp Number
                        </label>
                      </div>

                      {/* Referral Name (Optional) */}
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="referralName"
                          name="referralName"
                          type="text"
                          value={formData.referralName}
                          onChange={handleChange}
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                          placeholder="Enter Name of Referral (Optional)"
                        />
                        <label
                          htmlFor="referralName"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Enter Name of Referral (Ambassordor)
                        </label>
                      </div>

                      {/* Country of Origin (Select Dropdown) */}
                      <div className="relative">
                        <select
                        required
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                        >
                          <option className="text-sm" value="" disabled>Select your country</option>
                          {countries.map((country, index) => (
                            <option className="text-sm" key={index} value={country}>
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
                        required
                          id="educationLevel"
                          name="educationLevel"
                          value={formData.educationLevel}
                          onChange={handleChange}
                          className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                        >
                          <option className="" value="" disabled>Select your education level</option>
                          {educationLevels.map((level, index) => (
                            <option className="text-sm" key={index} value={level}>
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
                      

                      {/* Primary Course Selection (Radio Buttons) */}
                      <div className="relative">
                        <p className="font-semibold">Select Primary Course</p>
                        {primaryCourses.map((course) => (
                          <label key={course} className="block">
                            <input
                              type="radio"
                              name="selectedCourse"
                              value={course}
                              checked={formData.selectedCourse === course}
                              onChange={handleChange}
                              required
                            />
                            <span className="ml-2">{course}</span>
                          </label>
                        ))}
                      </div>

                      {/* Ask if they want to add additional courses */}
                      <div className="relative">
                        <p className="font-semibold">Do you want to offer additional courses at a discount?</p>
                        <label className="block">
                          <input
                            type="radio"
                            name="wantsAdditionalCourses"
                            value="yes"
                            checked={formData.wantsAdditionalCourses === "yes"}
                            onChange={handleChange}
                          />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="block">
                          <input
                            type="radio"
                            name="wantsAdditionalCourses"
                            value="no"
                            checked={formData.wantsAdditionalCourses === "no"}
                            onChange={handleChange}
                          />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="agreementAccepted"
                          id="agreementAccepted"
                          checked={formData.agreementAccepted}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="agreementAccepted" className="text-gray-700">
                          I agree to the terms and conditions
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}

              {/* Step 2: Final confirmation before secondary course selection */}
              {step === 2 && (
                <>
                  <h1 className="text-2xl font-semibold">Final Confirmation</h1>
                  <p>Almost there!, Click on continue</p>
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={handleFinalSubmit}
                      className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}

{step === 3 && (
                <>
                  <h1 className="text-2xl font-semibold">Final Confirmation</h1>
                  <p>Would you like to add additional courses at a discount?</p>
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={handleFinalSubmit}
                      className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}

              {/* Step 3: Secondary Course Selection */}
              {step === 4 && (
                <>
                  <h1 className="text-2xl font-semibold">Select Additional Courses</h1>
                  <div className="my-6 space-y-4">
                    {secondaryCoursesList.map((course) => (
                      <label key={course} className="block">
                        <input
                          type="checkbox"
                          checked={secondaryCourses.includes(course)}
                          onChange={() => handleCourseChange(course)}
                        />
                        <span className="ml-2">{course}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleSecondaryCourseSubmit}
                      className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Submit Courses
                    </button>
                  </div>
                </>
              )}

              {/* Success Modal */}
              {showModal && <SuccessModal setShowModal={setShowModal} />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ApplicationForm;
