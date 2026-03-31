import React from 'react';
import dot from '../../../assets/products/dot.png'
import bannerImg from '../../../assets/banner/banner.png'
import { TbPlayerPlay } from 'react-icons/tb';


const Banner = () => {
    return (
        <div className='container mx-auto px-5 lg:px-0 flex flex-col-reverse lg:flex-row items-center space-x-25 my-15'>
            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="bg-[#E1E7FF] rounded-full w-[295px]">
                        <p className='flex items-center gap-1.5 py-2 px-4 font-medium bg-gradient-to-tr from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                            <img className='animate-ping' src={dot} alt="" />
                            New: AI-Powered Tools Available
                        </p>
                    </div>
                    <h1 className='text-4xl lg:text-7xl font-extrabold leading-15 lg:leading-20'>
                        Supercharge Your
                        <br />
                        Digital Workflow
                    </h1>
                    <p className='max-w-lg text-lg leading-9 text-[#627382]'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
                    </p>
                </div>
                <div className="space-x-4 space-y-4 lg:space-y-0">
                    <button className='btn rounded-full bg-gradient-to-tr from-[#4F39F6] to-[#9514FA] text-lg text-white  p-6 hover:from-white hover:to-white hover:border-[#9514FA] hover:text-[#9514FA]'>
                        Explore Products
                    </button>
                    <button className='btn rounded-full p-6 bg-transparent border-[#9514FA] text-[#9514FA] text-lg hover:bg-gradient-to-tr from-[#4F39F6] to-[#9514FA] hover:text-white'>
                        <TbPlayerPlay />
                        Watch Demo
                    </button>
                </div>
            </div>
            <div className="mb-10 lg:mb-0">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;