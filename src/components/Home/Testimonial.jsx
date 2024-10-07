import React from 'react';
import testimonials from '../../db/Testimonials';

const TestimonialSection = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 bg-tea-100 bg-primary">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          {/* Heading and description */}
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-white  text-wrap">
              What People Say {"  "}
              <span className='text-primary md:m-1  bg-white p-2 md:p-3 mt-2 rounded-sm'>
                About Us
              </span>
            </h2>
            <p className="dark:text-gray-600 text-white">
              Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei diceret alienum, et sit cetero malorum. Et sea iudico consequat, est sanctus adipisci ex.
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-r from-green-200 to-teal-300 shadow-lg rounded-lg p-6 pt-16 transition-transform transform hover:scale-105 duration-300"
                >
                  {/* Testimonial image */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 bg-center bg-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>

                  {/* Testimonial content */}
                  <div className="text-center mt-8">
                    <p className="text-sm">{testimonial.text}</p>
                    <div className="mt-4">
                      <p className="text-lg font-semibold">{testimonial.name}</p>
                      <p className="text-sm dark:text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
