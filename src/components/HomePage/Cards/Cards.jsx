import React, { use, useState } from 'react';
import Products from './Products/Products';
import Carts from './Cart/Carts';

const Cards = ({ cardsPromise }) => {

    const cardsData = use(cardsPromise)

    const [selectedTab, setSelectedTab] = useState("products")

    const [selectedCard, setSelectedCard] = useState([])

    return (
        <div>
            <div className={`container mx-auto text-center px-5 lg:px-0 py-10 lg:py-32 flex ${selectedTab === "products" ? "flex-col" : "flex-col-reverse"} gap-10 `}>
                <div className="space-y-4 flex flex-col items-center">
                    <h1 className='text-3xl lg:text-5xl font-extrabold'>Premium Digital Tools</h1>
                    <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                    <div className="flex">
                        <button
                            onClick={() => setSelectedTab("products")}
                            className={`rounded-full text-lg font-bold bg-gradient-to-tr ${selectedTab === "products" ? "from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent text-black"}  hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white px-6 py-3`}>
                            Products
                        </button>
                        <button
                            onClick={() => setSelectedTab("cart")}
                            className={`rounded-full text-lg font-bold bg-gradient-to-tr ${selectedTab === "carts" ? "from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent text-black"}  hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white px-6 py-3`}>
                            Cart ({selectedCard.length})
                        </button>
                    </div>
                </div>
                <div className="">
                    {selectedTab === "products" ? (
                        <Products cardsData={cardsData} selectedCard={selectedCard} setSelectedCard={setSelectedCard}></Products>
                    ) : (
                        <Carts cardsData={cardsData} selectedCard={selectedCard} setSelectedCard={setSelectedCard}></Carts>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cards;