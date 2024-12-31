import React from "react";
import SocialLogin from "./SocialLogin";

function LoginForm() {
  return (
    <div className="bg-gray-50">
      {/* <!-- Modal Backdrop --> */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        {/* <!-- Modal Container --> */}
        <div className="bg-white rounded-xl shadow-2xl w-96 p-6 relative shadow-black/50">
          {/* <!-- Close Button --> */}
          <button
            id="closeModalBtn"
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            <i className="ph-x text-2xl"></i>
          </button>

          {/* <!-- Modal Header --> */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Log in to Hotel Booking
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Welcome back! Let s get you signed in.
            </p>
          </div>

          {/* <!-- Social Login --> */}
          <div className="space-y-4 mb-4">
            {/* <!-- Google Login Button --> */}
            <SocialLogin/>

            {/* <!-- Divider --> */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* <!-- Email Login Form --> */}
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <button
                type="submit"
                className="w-full bg-primary text-white rounded-full py-3 hover:bg-primary transition"
              >
                Continue
              </button>
            </form>
          </div>

          {/* <!-- Footer --> */}
          <div className="text-center text-sm text-gray-600">
            <p>
              Don t have an account?
              <a href="#" className="text-primary hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
