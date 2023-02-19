// import React from 'react'
// import {useDispatch} from "react-redux"
// import {addToCart, removeToCart, emptyCart, productListing} from '../Redux/actions'


// const Main = () => {
// const dispatch = useDispatch()
//     const products = {
//       id: 1,
//       name : "Product name with ",
//       price : 4647,
//       clolor : "000000",
//       inStock : true,
//     }

//     return (
//     <>
//       <div>
//         <button onClick={()=>dispatch(addToCart(products))}>Add to Cart</button>
//       </div>
//       <div>
//         <button onClick={()=>dispatch(removeToCart(products.name))}>Remove to Cart</button>
//       </div>
//       <div>
//         <button onClick={()=>dispatch(emptyCart(products))}>Empty to Cart</button>
//       </div>
//       <div>
//         <button onClick={()=>dispatch(productListing(products))}>products Listing</button>
//       </div>
//     </>
//   )
// }

// export default Main