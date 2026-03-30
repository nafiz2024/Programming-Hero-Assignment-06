import React from 'react';

const Success = () => {
    return (
        <div className='bg-gradient-to-tr from-[#4F39F6] to-[#9514FA]'>
            <div className="container mx-auto py-15 px-5 lg:px-0 grid grid-cols-1 lg:grid-cols-3 text-center divide-x divide-white">
                <div className="">
                    <h1 className='text-6xl font-extrabold text-white'>50K+</h1>
                    <p className='text-2xl font-medium text-white'>Active Users</p>
                </div>
                <div className="">
                    <h1 className='text-6xl font-extrabold text-white'>200+</h1>
                    <p className='text-2xl font-medium text-white'>Premium Tools</p>
                </div>
                <div className="">
                    <h1 className='text-6xl font-extrabold text-white'>4.9</h1>
                    <p className='text-2xl font-medium text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Success;