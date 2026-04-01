import React from 'react';

const StepCard = ({ step }) => {
    return (
        <div className='relative px-6 py-20 rounded-2xl border border-[#F1F1F1] flex flex-col items-center gap-4 bg-white text-center'>
            <span className='absolute right-5 top-5 w-10 h-10 px-3 py-2  bg-gradient-to-tr from-[#4F39F6] to-[#9514FA] text-white rounded-full'>{step.step_number}</span>
            <div className="p-5 bg-gradient-to-tr from-[#4F39F6]/10 to-[#9514FA]/10 rounded-full">
                <img
                    src={step.icon_image}
                    alt={step.title}
                />
            </div>
            <h1 className='text-2xl font-bold'>{step.title}</h1>
            <p className='text-[#627382] leading-5'>{step.description}</p>
        </div>
    );
};

export default StepCard;