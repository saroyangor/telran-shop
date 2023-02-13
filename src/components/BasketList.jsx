import React from 'react'
import BasketItem from './BasketItem'

const BasketList = (props) => {
  const { handleBasketShow, order = [] } = props

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((orderItem) => (
          <BasketItem key={orderItem.id} {...orderItem} />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость:</li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  )
}

export default BasketList
