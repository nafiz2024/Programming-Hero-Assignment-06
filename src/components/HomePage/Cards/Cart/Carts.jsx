import React from 'react';
import { toast } from 'react-toastify';

const Carts = ({ selectedCard, setSelectedCard }) => {

    const handleDeleteSelectedCard = (card) => {
        const filteredCards = selectedCard.filter(
            (selectedcards) => selectedcards.id != card.id,
        )

        setSelectedCard(filteredCards)
        toast.warn("Product Remove To Cart")
    }

    const totalPrice = selectedCard.reduce(
        (total, card) => total + card.price,
        0
    );

    return (
        <div className="p-10 border border-[#F2F2F2] rounded-2xl text-start flex flex-col gap-6" >
            <h1 className='text-2xl font-bold'>Your Cart</h1>
            <div className='flex flex-col gap-5'>
                {selectedCard.length === 0 ?
                    <div className="mx-auto text-center space-y-6 lg:space-y-10 my-10  border border-[#131313]/10 p-10 rounded-3xl">
                        <h2 className='text-3xl lg:text-5xl'>No Products Adding To Cart</h2>
                        <p className='text-lg lg:text-2xl text-[#131313]/60'>Go To Product Tab To Cart Product</p>
                    </div>
                    : selectedCard.map((card, ind) => {
                        return <div
                            className=""
                            key={ind}
                        >
                            <div className="p-2.5 lg:p-5 rounded-2xl bg-[#F9FAFC] flex flex-col lg:flex-row justify-between items-center gap-5">
                                <div className="flex gap-4">
                                    <div className="w-15 h-auto p-3.5 bg-white rounded-full">
                                        <img
                                            src={card.image}
                                            alt={card.name} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className='text-[16px] lg:text-xl font-semibold'>{card.name}</h1>
                                        <p className='text-[#627382] font-medium leading-5'>${card.price}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <button
                                        className='font-bold text-[#FF3980] p-3'
                                        onClick={() => handleDeleteSelectedCard(card)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="flex justify-between items-center">
                <p className='text-[#627382]'>Total</p>
                <p className='text-2xl font-bold'>${totalPrice}</p>
            </div>
        </div>
    );
};

export default Carts;