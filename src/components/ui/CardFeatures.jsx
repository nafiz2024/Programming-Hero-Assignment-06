import React from 'react';
import { MdOutlineDone } from 'react-icons/md';

const CardFeatures = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2 font-medium text-[#627382] leading-5'>
                <span className='text-[#30B868] text-xl'><MdOutlineDone /></span>
                {feature}
            </p>
        </div>
    );
};

export default CardFeatures;