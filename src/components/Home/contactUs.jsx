import React from "react";
import contactImage from "../../assets/emmanuel.jpg"; // Adjust the path as necessary

function ContactUs() {
  return (
    <div className="relative bg-cover bg-center py-12" style={{ backgroundImage: `url(${contactImage})` }}>
      <div className="absolute inset-0 bg-tea-dark opacity-60"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center text-white mb-10">
          Get in Touch
        </h2>
        <p className="text-center text-white mb-6">
          We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form className="bg-white shadow-lg rounded-lg p-8 md:w-1/2 mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-tea-dark transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
