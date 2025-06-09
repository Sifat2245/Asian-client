import React from 'react';
import { Link } from 'react-router';

const Forget = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-2xl w-[40%]">
        <h2 className="text-3xl font-semibold text-center mb-6">Reset Password</h2>

        <form>
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB7137]"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="block w-[40%] mx-auto bg-[#DB7137] text-white py-2 rounded-md hover:bg-[#272727] transition"
          >
            Reset Password
          </button>

          {/* Links */}
          <div className="mt-6 text-center text-sm text-gray-600 space-y-2">
            <p>
              Remembered your password?{' '}
              <Link to="/user/signin" className="text-[#DB7137] hover:underline">
                Sign In
              </Link>
            </p>
            <p>
              Don’t have an account?{' '}
              <Link to="/user/signup" className="text-[#DB7137] hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forget;
