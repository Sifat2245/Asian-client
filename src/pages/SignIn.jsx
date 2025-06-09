import React from 'react';
import { Link } from 'react-router';

const SignIn = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-2xl w-[40%]">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign In</h2>

        <form>
          {/* Email */}
          <div className="mb-6">
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
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB7137]"
              required
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/user/forgetpassword" className="text-[#DB7137] hover:underline text-sm">
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="block w-[20%] mx-auto bg-[#DB7137] text-white py-2 rounded-md hover:bg-[#272727] transition"
          >
            Sign In
          </button>

          {/* Create Account Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/user/signup" className="text-[#DB7137] hover:underline">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
