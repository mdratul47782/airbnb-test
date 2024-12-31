import React from 'react';
import SocialLogin from './SocialLogin';

function RegistrationForm() {
  return (
    <div className="bg-gray-50">
      {/* Modal Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        {/* Modal Container */}
        <div className="bg-white rounded-xl shadow-2xl w-96 p-6 relative shadow-black/50">
          {/* Close Button */}
          <button id="closeModalBtn" className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
            <i className="ph-x text-2xl"></i>
          </button>

          {/* Modal Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Create an Account
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Join us and start your journey!
            </p>
          </div>

          {/* Registration Form */}
          <form className="space-y-4">
            {/* First Name */}
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            {/* Last Name */}
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white rounded-full py-3 hover:bg-primary-dark transition"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <SocialLogin/>

          {/* Footer */}
          <div className="text-center text-sm text-gray-600 mt-4">
            <p>
              Already have an account?{' '}
              <a href="#" className="text-primary hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
