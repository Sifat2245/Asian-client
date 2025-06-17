import { Link, NavLink } from "react-router";
import { useContext, useState } from "react";
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import logo from '../assets/logo-white.png';
import { authContext } from "../authProvider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { useDarkMode } from "../context/ThemeProvider";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logout } = useContext(authContext);

    const { darkMode, setDarkMode } = useDarkMode()

    const navClass = ({ isActive }) =>
        `pb-1 ${isActive ? "border-b-2 border-white" : ""} font-light`;

    // For desktop and mobile: reuseable nav links
    const getLeftLinks = (onClick) => (
        <>
            <NavLink to="/" className={navClass} onClick={onClick}>Home</NavLink>
            <NavLink to="/about" className={navClass} onClick={onClick}>About Us</NavLink>
            <NavLink to="/allFoods" className={navClass} onClick={onClick}>All Foods</NavLink>
            <NavLink to="/ourGallery" className={navClass} onClick={onClick}>Gallery</NavLink>
        </>
    );

    const getRightLinks = (onClick) => (
        <>
            <NavLink to="/shop" className={navClass} onClick={onClick}>Shop</NavLink>
            <NavLink to="/news" className={navClass} onClick={onClick}>News</NavLink>
            <NavLink to="/contact" className={navClass} onClick={onClick}>Contact</NavLink>
        </>
    );

    const mobileMenuLinks = (
        <>
            <Link to="/myFoods" onClick={() => setOpen(false)}>My Foods</Link>
            <Link to="/addFood" onClick={() => setOpen(false)}>Add Food</Link>
            <Link to="/myOrders" onClick={() => setOpen(false)}>My Orders</Link>
        </>
    );

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-white px-6 pt-6 w-full absolute top-0 z-50 bg-transparent"
        >
            {/* Desktop Navbar */}
            <div className="hidden lg:flex justify-center items-center space-x-6 text-sm uppercase tracking-wide pt-6">
                <div className="space-x-8">
                    {getLeftLinks()}
                </div>

                {/* Logo */}
                <div className="text-xl font-bold font-serif tracking-widest uppercase text-center px-8">
                    <img src={logo} className="w-26" alt="Logo" />
                </div>

                <div className="space-x-8">
                    {getRightLinks()}
                </div>

                {/* User Dropdown */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="hover:cursor-pointer">
                        <FaRegUserCircle className="h-6 w-6 mb-2" />
                    </label>

                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-4 shadow menu menu-sm dropdown-content bg-[#2c2c2c] rounded-box w-52 text-white space-y-2"
                    >
                        <li className="hover:bg-[#DB7137] rounded">
                            <Link to="/myFoods" onClick={() => document.activeElement?.blur()}>My Foods</Link>
                        </li>
                        <li className="hover:bg-[#DB7137] rounded">
                            <Link to="/addFood" onClick={() => document.activeElement?.blur()}>Add Food</Link>
                        </li>
                        <li className="hover:bg-[#DB7137] rounded">
                            <Link to="/myOrders" onClick={() => document.activeElement?.blur()}>My Orders</Link>
                        </li>
                    </ul>
                </div>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="relative flex items-center justify-center w-8 h-8 mb-2 rounded-full shadow-md transition duration-300"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {darkMode ? (
                            <motion.span
                                key="moon"
                                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                                className="text-yellow-300 text-xl"
                            >
                                <FaMoon />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="sun"
                                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                                className="text-yellow-500 text-xl"
                            >
                                <FaSun />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>

                {/* Auth Buttons */}
                {user ? (
                    <button
                        className="border border-white px-4 pt-2 pb-1 ml-2 rounded hover:bg-white hover:text-black transition mb-2"
                        onClick={() => logout()}
                    >
                        LOG OUT
                    </button>
                ) : (
                    <Link to="/user/signin">
                        <button className="border border-white px-4 pt-2 pb-1 ml-2 rounded hover:bg-white hover:text-black transition mb-2">
                            SIGN IN
                        </button>
                    </Link>
                )}
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden flex justify-between items-center">
                <Link to="/">
                    <img src={logo} className="h-10 w-auto" alt="Logo" />
                </Link>
                <button onClick={() => setOpen(true)}>
                    <AiOutlineMenu className="text-3xl" />
                </button>
            </div>

            {/* Mobile Slide Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-[#2c2c2c] text-white p-6 z-50 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold">Menu</span>
                    <button onClick={() => setOpen(false)} className="text-xl font-bold">×</button>
                </div>
                <div className="space-y-3">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-9 font-normal">
                            {user && mobileMenuLinks}
                        </div>
                        {getLeftLinks(() => setOpen(false))}
                        {getRightLinks(() => setOpen(false))}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="relative w-13 h-5 bg-gray-300 dark:bg-gray-600 rounded-full px-0.5 py-0.5 flex items-center transition-colors duration-300"
                        >
                            <motion.div
                                className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-md"
                                animate={{ x: darkMode ? 32 : 0 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {darkMode ? (
                                        <motion.span
                                            key="moon"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-yellow-400 text-[10px]"
                                        >
                                            <FaMoon />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="sun"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-yellow-500 text-[10px]"
                                        >
                                            <FaSun />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </button>
                    </div>
                    {user ? (
                        <button
                            className="border border-white px-4 pt-2 pb-1 ml-2 rounded hover:bg-white hover:text-black transition mt-4"
                            onClick={() => {
                                logout();
                                setOpen(false);
                            }}
                        >
                            LOG OUT
                        </button>
                    ) : (
                        <Link to="/user/signin" onClick={() => setOpen(false)}>
                            <button className="border border-white px-4 pt-2 pb-1 ml-2 rounded hover:bg-white hover:text-black transition mt-4">
                                SIGN IN
                            </button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Backdrop */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}
        </motion.nav>
    );
};

export default Navbar;
