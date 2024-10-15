import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-3 lg:grid-cols-3">
        
        {/* Column 1: About Us */}
        <div>
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="mt-4 text-sm text-gray-300">
            <span className='font-semibold'>TECHEASE</span> Africa, a subsidiary institution under KAYISH groups, was established two years ago. We offer training and digital support to companies and professionals, driving tech innovation across Africa.
          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h2 className="text-lg font-semibold">Programs</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="programs" className="hover:text-gray-300 transition">Advanced Website Development</Link>
            </li>
            <li>
              <Link to="programs" className="hover:text-gray-300 transition">Advanced Frontend Engineering</Link>
            </li>
            <li>
              <Link to="programs" className="hover:text-gray-300 transition">Advanced Graphic Design</Link>
            </li>
            <li>
              <Link to="programs" className="hover:text-gray-300 transition">Advanced Data Science and Analytics</Link>
            </li>
            <li>
              <Link to="programs" className="hover:text-gray-300 transition">Social Media Marketing & Advertising</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="lg:text-right">
          <h2 className="text-lg font-semibold">Need help?</h2>
          <p className="mt-4 text-sm font-medium">+233 502547381</p>
          <p className="mt-2 text-sm">+233 558119187</p>
          <p className="text-sm">+233 554024046</p>

          {/* Social Icons */}
          <div className="mt-8 flex justify-end space-x-4">
            <a href="#" target="_blank" className="hover:opacity-75 text-white">
              <FaFacebookF className="h-6 w-6 md:h-8 md:w-8" />
            </a>
            <a href="#" target="_blank" className="hover:opacity-75 text-white">
              <FaInstagram className="h-6 w-6 md:h-8 md:w-8" />
            </a>
            <a href="#" target="_blank" className="hover:opacity-75 text-white">
              <FaTwitter className="h-6 w-6 md:h-8 md:w-8" />
            </a>
            <a href="#" target="_blank" className="hover:opacity-75 text-white">
              <FaLinkedinIn className="h-6 w-6 md:h-8 md:w-8" />
            </a>
          </div>
        </div>
      </div>

      <div>
        {/* Divider Line */}
        <hr className="container mx-auto my-7 border-gray-600" />
      </div>

      {/* Logo */}
      <img src={Logo} className="mx-auto w-40 md:w-48 h-auto" alt="TechEase Africa Logo" />

      <div>
        {/* Divider Line */}
        <hr className="container mx-auto my-7 border-gray-600" />
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} TECHEASE Africa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
