import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className="container mx-auto px-5 lg:px-0 pt-10 lg:pt-32 pb-10 lg:pb-20 text-white flex flex-col lg:flex-row justify-between gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className='text-4xl font-extrabold'>DigiTools</h1>
                    <p className='w-[330px] leading-6'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className='text-xl leading-7 font-medium'>Product</h1>
                    <ul className='flex flex-col gap-4'>
                        <li><a href="">Features</a></li>
                        <li><a href="">pricing</a></li>
                        <li><a href="">Templates</a></li>
                        <li><a href="">Integrations</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className='text-xl leading-7 font-medium'>Company</h1>
                    <ul className='flex flex-col gap-4'>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Press</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className='text-xl leading-7 font-medium'>Resources</h1>
                    <ul className='flex flex-col gap-4'>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Center</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className='text-xl leading-7 font-medium'>Social Links</h1>
                    <div className="flex gap-3">
                        <div className="bg-white rounded-full w-12 h-12 p-2.5">
                            <p className=' text-[#101727] text-3xl'><TbBrandInstagramFilled /></p>
                        </div>
                        <div className="bg-white rounded-full w-12 h-12 p-2.5">
                            <p className=' text-[#101727] text-3xl'><FaFacebookSquare /></p>
                        </div>
                        <div className="bg-white rounded-full w-12 h-12 p-2.5">
                            <p className=' text-[#101727] text-3xl'><FaXTwitter /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
