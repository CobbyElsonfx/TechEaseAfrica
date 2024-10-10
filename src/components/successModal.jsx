import { Link } from "react-router-dom";
import logo from '../assets/logo.png'; // Make sure to replace this with the correct path to your logo

function SuccessModal({ setShowModal }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 sm:w-1/3">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="TechEase Logo" className="h-16" />
        </div>
        <h2 className="text-3xl font-bold text-center text-primary mb-4">Success!</h2>
        <p className="text-center text-gray-600 mb-6">
          Your application has been submitted successfully! TechEase will get in touch with you shortly.
        </p>
        
        {/* Button Section */}
        <div className="flex justify-center mt-4">
          <Link to='/'>
            <button 
              onClick={() => setShowModal(false)} 
              className="bg-primary text-white py-2 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50"
            >
              Close
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
