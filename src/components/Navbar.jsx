import { Link, NavLink } from "react-router";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from 'framer-motion';
import logo from '../assets/logo-white.png'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navClass = ({ isActive }) =>
        `pb-1 ${isActive ? "border-b-2 border-white" : ""} font-light`;

    const leftLinks = (
        <>
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About Us</NavLink>
            <NavLink to="/pages" className={navClass}>All Foods</NavLink>
            <NavLink to="/menu" className={navClass}>Gallery</NavLink>
        </>
    );

    const rightLinks = (
        <>
            <NavLink to="/shop" className={navClass}>Shop</NavLink>
            <NavLink to="/news" className={navClass}>News</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </>
    );

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-white px-6 pt-6 w-full absolute top-0 z-50 bg-transparent"
        >
            {/* Desktop Layout */}
            <div className="hidden lg:flex justify-center items-center space-x-6 text-sm uppercase tracking-wide pt-6">
                {/* Left Links */}
                <div className="space-x-8">
                    {leftLinks}
                </div>

                {/* Logo */}
                <div className="text-xl font-bold font-serif tracking-widest uppercase text-center px-8">
                    <img src={logo} className=" w-26" alt="Logo" />
                </div>

                {/* Right Links */}
                <div className="space-x-8">
                    {rightLinks}
                </div>

                {/* Login Button */}
                <Link to="/book">
                    <button className="border border-white px-4 pt-2 pb-1 ml-2 rounded hover:bg-white hover:text-black transition">
                        LOGIN / REGISTER
                    </button>
                </Link>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden flex justify-between items-center">
                <Link to="/">
                    <img src="/src/assets/logo-white.png" className="h-10 w-auto" alt="Logo" />
                </Link>

                <button onClick={() => setOpen(true)}>
                    <AiOutlineMenu className="text-3xl" />
                </button>
            </div>


            <div className={`fixed top-0 right-0 h-full w-64 bg-black text-white p-6 z-50 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold">Menu</span>
                    <button onClick={() => setOpen(false)} className="text-xl font-bold">×</button>
                </div>
                <div className="space-y-3">
                    <div className="flex flex-col gap-8">
                        {leftLinks}
                        {rightLinks}
                    </div>
                    <Link to="/book">
                        <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                            Login / Register
                        </button>
                    </Link>
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
