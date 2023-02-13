import React from 'react';

const BasketItem = (props) => {
    const {id, name, price, quantity, removeFromBasket} = props

    return (
        <li className="collection-item">
            {name} x{quantity} = {price}
            <span className="secondary-content">
                <i
                    className="material-icons item-delete"
                    onClick={() => removeFromBasket(id)}
                >
                    close
                </i>
            </span>
        </li>
    );
};

export default BasketItem;