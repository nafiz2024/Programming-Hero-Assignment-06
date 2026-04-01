import React from 'react';
import PricingCardFeatures from './PricingCardFeatures/PricingCardFeatures';

const PricingCard = ({ pricingCard }) => {

    const { features, badge_text } = pricingCard;

    return (
        <div className='p-6 bg-[#F9FAFC] border border-[#F2F2F2] rounded-2xl'>
            <div className="">
                <h1>{pricingCard.plan_name}</h1>
                <p>{pricingCard.tagline}</p>
            </div>
            <h1><span>{pricingCard.price}</span><span>{pricingCard.billing_cycle}</span></h1>
            <div className="">
                {
                    features.map((feature, ind) => {
                        return <PricingCardFeatures
                            key={ind}
                            feature={feature}
                        ></PricingCardFeatures>
                    })
                }
            </div>
            <div className="">
                <button className='btn rounded-full bg-gradient-to-tr from-[#4F39F6] to-[#9514FA] text-white hover:from-pink-500 hover:to-orange-500 p-6 w-full font-bold'>{pricingCard.button_text}</button>
            </div>
        </div>
    );
};

export default PricingCard;