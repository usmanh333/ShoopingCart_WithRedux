import React from 'react'
import {useSelector} from 'react-redux'
import Cards from './Cards'

const NavBar = () => {
    // getting the state lenght in the result
    const  result = useSelector((state)=>state.cartData)
    // calculating the price of each products
    const totalPrice = result.reduce((total, item) => total + item.price, 0)

  return (
    <div>
        <div className="container">
        <h2>E-Commerce Cards </h2>
            <ul className="nav">
                <li className="list bg-black text-white p-4">
                    {result.length}
                </li>
                <li className="li">
                    <img src="./images/cart-icon.png" width={80} height={80} />
                </li>
                <li className="list bg-black text-white p-4">
                    Price : {totalPrice}
                </li>
                <li>{result.length <=0 && <p className='bg-danger text-white p-4'>The Cart is Empty now </p>}</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar