import React from 'react'
import BasketItem from './BasketItem'

const BasketList = (props) => {
  const {
      removeFromBasket = Function.prototype,
      handleBasketShow = Function.prototype,
      order = []
  } = props

  const totalPrice = order.reduce((sum, el) => {
      return sum + el.price * el.quantity
  }, 0)

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((orderItem) => (
          <BasketItem
              key={orderItem.id}
              removeFromBasket={removeFromBasket}
              {...orderItem}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость: {totalPrice}</li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  )
}

export default BasketList
