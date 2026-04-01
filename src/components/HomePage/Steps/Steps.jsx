import React, { use } from 'react';
import StepCard from './StepCard/StepCard';

const Steps = ({ stepsPromise }) => {

    const stepsData = use(stepsPromise);

    return (
        <div className='bg-[#F9FAFC]'>
            <div className="container mx-auto px-5 lg:px-0 py-10 lg:py-32 flex flex-col gap-10">
                <div className="flex flex-col gap-4 items-center text-center">
                    <h1 className='text-3xl lg:text-5xl font-extrabold'>Get Started In 3 Steps</h1>
                    <p className='text-[#627382] leading-5'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {stepsData.map((step, ind) => {
                        return <StepCard
                            key={ind}
                            step={step}
                        ></StepCard>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Steps;