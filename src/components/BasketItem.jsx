import React from 'react'

const BasketItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    changeQuantity = Function.prototype,
  } = props

  return (
    <li className="collection-item basket-item">
      {name} {price} x
      <i className="material-icons item-change" onClick={() => changeQuantity(id, '-')}>
        remove
      </i>
      {quantity}
      <i className="material-icons item-change" onClick={() => changeQuantity(id, '+')}>
        add
      </i>{' '}
      = {price * quantity} руб.
      <span className="secondary-content item-delete">
        <i
          className="material-icons"
          onClick={() => removeFromBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  )
}

export default BasketItem
