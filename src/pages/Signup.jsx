import React from 'react';
import { Link } from 'react-router';

const Signup = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-2xl w-[40%]">
        <h2 className="text-3xl font-semibold text-center mb-6">Create Account</h2>

        <form>
          {/* Name */}
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB7137]"
              required
            />
          </div>

          {/* Profile Image */}
          <div className="mb-5">
            <label htmlFor="profileImg" className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image URL
            </label>
            <input
              type="text"
              id="profileImg"
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB7137]"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB7137]"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB7137]"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-5">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your password"
              className="w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB7137]"
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center mb-6">
            <input type="checkbox" id="terms" className="form-checkbox mr-2" required />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the <span className="text-[#DB7137] underline">Terms & Conditions</span>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="block w-[30%] mx-auto bg-[#DB7137] text-white py-2 rounded-md hover:bg-[#272727] transition"
          >
            Sign Up
          </button>

          {/* Already have an account */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/user/signin" className="text-[#DB7137] hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
