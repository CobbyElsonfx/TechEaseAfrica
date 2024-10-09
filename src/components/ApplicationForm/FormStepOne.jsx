function FormStepOne({ formData, handleChange, handleSubmit, countries, educationLevels }) {
    return (
      <>
        <h1 className="text-2xl font-semibold">Enrollment Application Form</h1>
        <form onSubmit={handleSubmit} className="divide-y space-y-7 divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-7 px-3 mx-3 md:px-0 md:mx-3 text-gray-700 sm:text-lg sm:leading-7">
            <div className="relative">
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300"
                placeholder="First Name"
              />
              <label htmlFor="firstName" className="absolute left-0 -top-3.5">First Name</label>
            </div>
  
            <div className="relative">
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300"
                placeholder="Last Name"
              />
              <label htmlFor="lastName" className="absolute left-0 -top-3.5">Last Name</label>
            </div>
  
            {/* Add the rest of the input fields similarly */}
  
            <div className="relative">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="h-10 w-full border-b-2 border-gray-300"
              >
                <option value="" disabled>Select your country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>
  
            <div className="relative">
              <select
                id="educationLevel"
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                className="h-10 w-full border-b-2 border-gray-300"
              >
                <option value="" disabled>Select your education level</option>
                {educationLevels.map((level, index) => (
                  <option key={index} value={level}>{level}</option>
                ))}
              </select>
            </div>
  
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreementAccepted"
                id="agreementAccepted"
                checked={formData.agreementAccepted}
                onChange={handleChange}
              />
              <label htmlFor="agreementAccepted">I agree to the terms and conditions</label>
            </div>
  
            <div className="flex justify-center">
              <button type="submit" className="bg-primary text-white py-2 px-4 rounded">Submit</button>
            </div>
          </div>
        </form>
      </>
    );
  }
  
  export default FormStepOne;
  