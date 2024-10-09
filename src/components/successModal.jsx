function SuccessModal({setShowModal}) {
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Success!</h2>
          <p>Your application has been submitted successfully!</p>
          <div className="flex justify-center mt-6">
            <button onClick={() => setShowModal(false)} className="bg-primary text-white py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default SuccessModal;
  