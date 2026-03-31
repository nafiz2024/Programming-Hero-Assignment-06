import React from 'react';
import Card from '../../../ui/Card';

const Products = ({ cardsData, selectedCard, setSelectedCard }) => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {cardsData.map((card, ind) => {
                    return <Card
                        key={ind}
                        card={card}
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}
                    ></Card>
                })}
            </div>
        </div>
    );
};

export default Products;