
const MissionVisionSection = () => {
  return (
    <section className="bg-teal-600 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Our Mission & Vision</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission Block */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-500 text-white mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-teal-700">Mission</h3>
            <p className="mt-4 text-base text-gray-600 text-center">
            Techease Africa is committed to empowering Africans with cutting-edge digital skills, providing accessible, high-quality training that fosters innovation, creativity, and career growth in the tech industry.
            </p>
          </div>
          {/* Vision Block */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-500 text-white mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-teal-700">Vision</h3>
            <p className="mt-4 text-base text-gray-600 text-center">
            To become a leading digital skills training hub in Africa, equipping 1 million people in the next 5 years with the tools and knowledge to thrive in the global digital economy.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
