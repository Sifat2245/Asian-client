import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { authContext } from '../authProvider/AuthProvider';

const Signup = () => {

    const { createUser, setUser, googleLogin, updateUser} = use(authContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [password, setPassword] = useState('')
    const [strength, setStrength] = useState('')
    const [requirements, setRequirements] = useState({
        length: false,
        upper: false,
        lower: false,
        number: false,
        symbol: false
    })

    // console.log(password);


    useEffect(() => {
        const length = password.length >= 6;
        const upper = /[A-Z]/.test(password);
        const lower = /[a-z]/.test(password);
        const number = /[0-9]/.test(password);
        const symbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        const score = [length, upper, lower, number, symbol].filter(Boolean).length;

        if (score <= 2) setStrength('weak');
        else if (score === 3 || score === 4) setStrength('medium');
        else if (score === 5) setStrength('strong');
    }, [password]);



    const checkPasswordStrength = (value) => {
        setPassword(value)


        const hasUpper = /[A-Z]/.test(value);
        const hasLower = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value)
        const hasLength = value.length >= 6


        setRequirements({
            length: hasLength,
            upper: hasUpper,
            lower: hasLower,
            number: hasNumber,
            symbol: hasSymbol
        })

        if (value.length < 6) {
            setStrength('Weak')
        }
        else if (value.length >= 6 && hasLower && hasNumber) {
            setStrength('Medium')
        }
        if (value.length >= 6 && hasUpper && hasLower && hasNumber && hasSymbol) {
            setStrength('Strong')
        }

    }

    const handleSignUp = (e) => {
        setError('')
        setSuccess('')

        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const profile = form.profileImg.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value

        // console.log(name, profile, email, password);
        if (password !== confirmPassword) {
            setError('Password Did not match!')
            return
        }

        createUser(email, password)
        .then(result =>{
            const user = result.user
            updateUser({
                displayName: name,
                photoUrl: profile
            })
            .then(() =>{
                setUser({...user, displayName: name, photoUrl: profile})
            })
            .catch(error => {
                console.log(error);
            })
        })
        .catch(error =>{
            console.log(error);
        })

    }


    // login with google
    const handleLogin = () =>{
        googleLogin()
        .then(result =>{
            const user = result.user
            setUser(user)
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="flex justify-center items-center px-4">
            <div className="bg-white p-8 rounded-2xl lg:w-[40%]">
                <h2 className="text-3xl font-semibold text-center mb-6">Create Account</h2>

                <form onSubmit={handleSignUp}>
                    {/* Name */}
                    <div className="mb-5">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name='name'
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
                            name="profileImg"
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
                            name="email"
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
                            name="password"
                            value={password}
                            placeholder="Create a password"
                            onChange={(e) => checkPasswordStrength(e.target.value)}
                            className="w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB7137]"
                            required
                        />
                        {password.length > 0 && (
                            <div className="mt-2">
                                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full transition-all duration-300 rounded-full ${strength === 'weak'
                                                ? 'w-1/6 bg-red-500'
                                                : strength === 'medium'
                                                    ? 'w-1/2 bg-yellow-500'
                                                    : strength === 'strong'
                                                        ? 'w-full bg-green-500'
                                                        : 'w-0'
                                            }`}
                                    ></div>
                                </div>
                                <p
                                    className={`text-xs mt-1 ${strength === 'weak'
                                            ? 'text-red-500'
                                            : strength === 'medium'
                                                ? 'text-yellow-600'
                                                : 'text-green-600'
                                        }`}
                                >
                                    Password strength: {strength}
                                </p>
                            </div>
                        )}
                        {password.length > 0 && (
                            <ul className="mt-3 p-4 rounded-lg space-y-2 text-sm transition-all duration-300">
                                <li className="flex items-center gap-2">
                                    {requirements.length ? (
                                        <AiOutlineCheckCircle className="text-green-600" />
                                    ) : (
                                        <AiOutlineCloseCircle className="text-gray-400" />
                                    )}
                                    <span className={requirements.length ? 'text-green-600 font-medium' : 'text-gray-600'}>
                                        Minimum 6 characters
                                    </span>
                                </li>

                                <li className="flex items-center gap-2">
                                    {requirements.upper ? (
                                        <AiOutlineCheckCircle className="text-green-600" />
                                    ) : (
                                        <AiOutlineCloseCircle className="text-gray-400" />
                                    )}
                                    <span className={requirements.upper ? 'text-green-600 font-medium' : 'text-gray-600'}>
                                        At least one uppercase letter
                                    </span>
                                </li>

                                <li className="flex items-center gap-2">
                                    {requirements.lower ? (
                                        <AiOutlineCheckCircle className="text-green-600" />
                                    ) : (
                                        <AiOutlineCloseCircle className="text-gray-400" />
                                    )}
                                    <span className={requirements.lower ? 'text-green-600 font-medium' : 'text-gray-600'}>
                                        At least one lowercase letter
                                    </span>
                                </li>

                                <li className="flex items-center gap-2">
                                    {requirements.number ? (
                                        <AiOutlineCheckCircle className="text-green-600" />
                                    ) : (
                                        <AiOutlineCloseCircle className="text-gray-400" />
                                    )}
                                    <span className={requirements.number ? 'text-green-600 font-medium' : 'text-gray-600'}>
                                        At least one number
                                    </span>
                                </li>

                                <li className="flex items-center gap-2">
                                    {requirements.symbol ? (
                                        <AiOutlineCheckCircle className="text-green-600" />
                                    ) : (
                                        <AiOutlineCloseCircle className="text-gray-400" />
                                    )}
                                    <span className={requirements.symbol ? 'text-green-600 font-medium' : 'text-gray-600'}>
                                        At least one special character
                                    </span>
                                </li>
                            </ul>
                        )}
                    </div>


                    {/* Confirm Password */}
                    <div className="mb-5">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Re-enter your password"
                            className="w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB7137]"
                            required
                        />
                        {error && <p className="text-red-600 text-sm mb-4 mt-2">{error}</p>}
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
                        className="block w-full lg:w-[30%] mx-auto bg-[#DB7137] text-white py-2 rounded-md hover:bg-[#272727] transition"
                    >
                        Sign Up
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
