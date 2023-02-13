import React, { useEffect, useState } from 'react'
import { API_URL } from '../config'
import Loader from "./Loader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";

const Shop = () => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isBasketShow, setBasketShow] = useState(false)

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }

      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem
        }
      })

      setOrder(newOrder)
    }
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: '1857368b-63ecfdb8-90d1fa10-b4c25b20',
      },
    })
      .then((response) => response.json())
      .then((data) => data.featured && setGoods(data.featured))
      .catch((err) => console.warn(err))
      .finally(() => setLoading(false))
  }, [])

  return <main className="container content">
    <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
    { loading ? <Loader /> : <GoodsList goods={goods} addToBasket={addToBasket} /> }
    { isBasketShow ? <BasketList order={order} handleBasketShow={handleBasketShow} /> : null }
  </main>
}

export default Shop
