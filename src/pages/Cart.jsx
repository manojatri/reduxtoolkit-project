import React from 'react'
import { remove } from '../Redux/CartSlice'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector((state)=>state.cart)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  return (
    <div className='container'>
      <div className='cartListContainer'>
        {cartItems.map((item)=>(
          <div className='cartCard'>
            <div className='cartImg'>
              <img src={item.image} alt={item.title} />
            </div>
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <div className='cartButton'>
              <button onClick={()=>handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart