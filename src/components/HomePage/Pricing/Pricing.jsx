import React, { use } from 'react';
import PricingCard from './PricingCard/PricingCard';

const Pricing = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise)

    return (
        <div>
            <div className="container mx-auto px-5 lg:px-5 py-10 lg:py-32 flex flex-col gap-10">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className='text-5xl font-bold'>Simple, Transparent Pricing</h1>
                    <p className='text-[#627382] leading-5'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {
                        pricingData.map((pricingCard, ind) => {
                            return <PricingCard
                                key={ind}
                                pricingCard={pricingCard}
                            ></PricingCard>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Pricing;