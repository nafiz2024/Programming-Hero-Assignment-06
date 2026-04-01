import React from 'react';

const Workflow = () => {
    return (
        <div className="bg-gradient-to-tr from-[#4F39F6] to-[#9514FA]">
            <div className='container mx-auto px-5 lg:px-0 py-10 lg:py-32 flex flex-col gap-10 items-center text-center'>
                <div className="flex flex-col gap-4 items-center">
                    <h1 className='text-3xl lg:text-[40px] font-extrabold text-white'>Ready to Transform Your Workflow?</h1>
                    <p className='leading-6 text-white max-w-lg'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <div className="flex gap-4">
                        <button className='btn p-6 rounded-full text-[#9514FA] bg-white font-bold hover:bg-transparent hover:text-white'>Explore Products</button>
                        <button className='btn p-6 rounded-full bg-transparent text-white font-bold hover:text-[#9514FA] hover:bg-white'>View Pricing</button>
                    </div>
                    <p className='leading-5 text-white'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default Workflow;