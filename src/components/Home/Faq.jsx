import React from 'react';

function Faq() {
  return (
    <section className="bg-gray-100 text-gray-800 py-16">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-tea-600">
          How It Works
        </p>
        <h2 className="mb-12 text-4xl font-extrabold leading-tight text-center sm:text-5xl text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">

          {/* Question 1 */}
          <details className="group p-3 mb-4 transition-shadow duration-300 hover:shadow-lg rounded-lg">
            <summary className="py-4 text-lg font-medium text-gray-900 cursor-pointer transition-colors duration-200 group-hover:text-tea-600 flex justify-between items-center">
              Is the program really tuition-free?
              <span className="ml-2 text-tea-600 transform transition-transform duration-300 group-open:rotate-180">
                &#9660;
              </span>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-700 leading-relaxed">
                Yes! Our program is completely tuition-free. It is fully funded by our partners, allowing you to focus entirely on learning without any financial burden.
              </p>
            </div>
          </details>

          {/* Question 2 */}
          <details className="group p-3 mb-4 transition-shadow duration-300 hover:shadow-lg rounded-lg">
            <summary className="py-4 text-lg font-medium text-gray-900 cursor-pointer transition-colors duration-200 group-hover:text-tea-600 flex justify-between items-center">
              Who is eligible for this program?
              <span className="ml-2 text-tea-600 transform transition-transform duration-300 group-open:rotate-180">
                &#9660;
              </span>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-700 leading-relaxed">
                Currently, our program is open to individuals from Africa. We aim to provide educational opportunities specifically to African learners as part of our mission.
              </p>
            </div>
          </details>

          {/* Question 3 */}
          <details className="group mb-4  p-3 transition-shadow duration-300 hover:shadow-lg rounded-lg">
            <summary className="py-4 text-lg font-medium text-gray-900 cursor-pointer transition-colors duration-200 group-hover:text-tea-600 flex justify-between items-center">
              Do I need any prior experience to apply?
              <span className="ml-2 text-tea-600 transform transition-transform duration-300 group-open:rotate-180">
                &#9660;
              </span>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-700 leading-relaxed">
                No prior experience is required. Our program is designed to accommodate learners at all levels, whether you're just starting or looking to enhance your skills.
              </p>
            </div>
          </details>

        </div>
      </div>
    </section>
  );
}

export default Faq;
