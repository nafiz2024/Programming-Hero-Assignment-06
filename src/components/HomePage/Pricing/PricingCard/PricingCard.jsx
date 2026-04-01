import React from 'react';
import PricingCardFeatures from './PricingCardFeatures/PricingCardFeatures';

const PricingCard = ({ pricingCard }) => {

    const { features, badge_text } = pricingCard;

    return (
        <div className={` p-6 ${badge_text === "Most Popular" ? "bg-gradient-to-tr from-[#4F39F6] to-[#9514FA]" : "bg-[#F9FAFC]"} border border-[#F2F2F2] rounded-2xl`}>
            <div className="relative flex flex-col gap-6 h-full text-red">
                <div className={`absolute left-1/2 -translate-x-1/2 -top-10 text-[#BB4D00] ${badge_text === "Most Popular" ? "bg-[#FEF3C6]": "bg-white"} font-medium py-1.5 px-3 rounded-full`}>
                    <span>{badge_text}</span>
                </div>
                <div className="">
                    <h1 className={`text-2xl font-bold mb-2 ${badge_text === "Most Popular" ? "text-white" : "text-[#101727]"}`}>{pricingCard.plan_name}</h1>
                    <p className={`leading-5 ${badge_text === "Most Popular" ? "text-white" : "text-[#627382]"}`}>{pricingCard.tagline}</p>
                </div>
                <h1><span className={`text-[40px] font-bold ${badge_text === "Most Popular" ? "text-white" : "text-[#101727]"}`}>{pricingCard.price}</span><span className={`text-xl ${badge_text === "Most Popular" ? "text-white" : "text-[#627382]"}`}>{pricingCard.billing_cycle}</span></h1>
                <div className="flex-grow">
                    {
                        features.map((feature, ind) => {
                            return <PricingCardFeatures
                                key={ind}
                                feature={feature}
                                pricingCard={pricingCard}
                            ></PricingCardFeatures>
                        })
                    }
                </div>
                <div className="">
                    <button className={`btn rounded-full ${badge_text === "Most Popular" ? "bg-white text-[#9514FA]" : "bg-gradient-to-tr from-[#4F39F6] to-[#9514FA] text-white"} hover:from-pink-500 hover:to-orange-500 p-6 w-full font-bold`}>{pricingCard.button_text}</button>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;