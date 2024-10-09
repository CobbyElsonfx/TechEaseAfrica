function FormStepTwo({ courses, secondaryCourses, handleCourseChange, handleFinalSubmit }) {
    return (
      <>
        <h1 className="text-2xl font-semibold">Select Additional Courses</h1>
        {console.log(courses)}
        <div className="my-6 space-y-4">
          {courses.map((course) => (
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
          <button onClick={handleFinalSubmit} className="bg-primary text-white py-2 px-4 rounded">
            Submit Courses
          </button>
        </div>
      </>
    );
  }
  
  export default FormStepTwo;
  