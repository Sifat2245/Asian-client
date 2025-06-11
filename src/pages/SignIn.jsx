import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { authContext } from '../authProvider/AuthProvider';

const SignIn = () => {

  const {loginUser, setUser, googleLogin} = useContext(authContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.pathname || '/'

  const handleSignIn = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value


    loginUser(email, password)
    .then(result =>{
      const user = result.user
      setUser(user)
      navigate(from)
      console.log(user);
    })
    .catch(error =>{
      console.log(error);
    })  
  }


  //login with google
  const handleLogin = () =>{
      googleLogin()
      .then(result =>{
        const user = result.user
        setUser(user)
        navigate(from)
      })
      .catch(error =>{
        console.log(error);
      })
  }

  return (
    <div className="flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-2xl lg:w-[40%]">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign In</h2>

        <form onSubmit={handleSignIn}>
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
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
            className="block w-full lg:w-[20%] mx-auto bg-[#DB7137] text-white py-2 rounded-md hover:bg-[#272727] transition"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="divider text-gray-500 text-sm mt-6">OR</div>

          {/* Google Sign-In Button */}
          <button
            type="button"
            onClick={handleLogin}
            className="lg:w-[40%] mx-auto flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Sign in with Google</span>
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
