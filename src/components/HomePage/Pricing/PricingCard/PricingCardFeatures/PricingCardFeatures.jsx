import React from 'react';
import { MdOutlineDone } from 'react-icons/md';

const PricingCardFeatures = ({ feature, pricingCard }) => {

    const {badge_text } = pricingCard;

    return (
        <div>
            <p className={`flex items-center gap-2 font-medium ${badge_text === "Most Popular" ? "text-white" : "text-[#627382]"} leading-5`}>
                <span className={` ${badge_text === "Most Popular" ? "text-white" : "text-[#30B868]"} text-xl`}><MdOutlineDone /></span>
                {feature}
            </p>
        </div>
    );
};

export default PricingCardFeatures;