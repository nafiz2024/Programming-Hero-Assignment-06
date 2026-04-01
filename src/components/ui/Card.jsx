import React from 'react';
import CardFeatures from './CardFeatures';
import { toast } from 'react-toastify';

const Card = ({ card, selectedCard, setSelectedCard }) => {

    const { features } = card;

    const isAdded = selectedCard.some(item => item.id === card.id);

    const handleAddCard = () => {
        if (isAdded) {
            toast.error('Product is Already Added To Cart');
        } else {
            toast.success('Product is Added To Cart');
            setSelectedCard([...selectedCard, card]);
        };
    }

    const badgeColor = card.badge === "Best Seller"
        ? "text-[#BB4D00] bg-[#FEF3C6]"
        : card.badge === "Popular"
            ? "bg-[#E1E7FF] text-[#9514FA]"
            : "bg-[#DBFCE7] text-[#0A883E]";

    return (
        <div className='text-start p-6 flex flex-col gap-4 relative border border-[#F2F2F2] rounded-2xl'>
            <span className={`text-center py-1.5 px-3 font-medium ${badgeColor} rounded-full w-[95px] text-sm absolute right-2 top-2.5`}>
                {card.badge}
            </span>
            <div className="w-15 p-3.5 border border-[#F2F2F2] rounded-full">
                <img
                    src={card.image}
                    alt={card.name} />
            </div>
            <h1 className='text-2xl font-bold'>{card.name}</h1>
            <p className='leading-5 text-[#627382]'>{card.description}</p>
            <h1><span className='text-2xl font-bold'>${card.price}</span> <span className='text-[#627382]'>/{card.billing}</span></h1>
            <div className="">
                {features.map((feature, ind) => <CardFeatures
                    key={ind}
                    feature={feature}
                ></CardFeatures>)}
            </div>
            <button
                onClick={handleAddCard}
                className={`btn rounded-full text-white p-6
                ${isAdded
                        ? "bg-gradient-to-r from-pink-500 to-red-500 cursor-not-allowed opacity-80"
                        : "bg-gradient-to-tr from-[#4F39F6] to-[#9514FA]"
                    }`}
            >
                {isAdded ? "Adding to Cart" : "Buy Now"}
            </button>
        </div>
    );
};

export default Card;