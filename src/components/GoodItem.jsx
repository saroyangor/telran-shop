import React from 'react'

const GoodItem = (props) => {
  const { id, name, description, full_background, price, addToBasket } = props

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
        <span className="card-title">{name}</span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button onClick={() => addToBasket({
            id,
            name,
            price
        })} className="btn">Купить</button>
        <span className="right" style={{fontSize: '1.5rem'}}>{price} руб.</span>
      </div>
    </div>
  )
}

export default GoodItem
