import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { TbLayoutNavbarExpandFilled } from 'react-icons/tb';

const Navbar = () => {
    return (
        <div className=' bg-base-100 shadow-sm'>
            <div className="container mx-auto">
                <div className="navbar py-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost text-2xl text-[#4F39F6] lg:hidden">
                                <TbLayoutNavbarExpandFilled />
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                                <li><a>Products</a></li>
                                <li><a>Features</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Testimonials</a></li>
                                <li><a>FAQ</a></li>
                            </ul>
                        </div>
                        <h1 className='bg-gradient-to-tr from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-4xl font-bold py-1'>
                            <a href="">DigiTools</a>
                        </h1>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end space-x-4">
                        <a className='text-xl hover:text-[#4F39F6]' href=""><MdOutlineShoppingCart /></a>
                        <a className='font-semibold hover:text-[#4F39F6]' href="">Login</a>
                        <a className="btn rounded-full bg-gradient-to-tr from-[#4F39F6] to-[#9514FA] text-white hover:from-pink-500 hover:to-orange-500">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;