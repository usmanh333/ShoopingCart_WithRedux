import {ADD_TO_CART, Remove_TO_CART, Empty_CART, PRODUCT_LISTING} from "./constant"

// Saga is used to handle the api data in redux 

export const addToCart =(data) => {
  console.log("Action Called ")
  return ({
    type : ADD_TO_CART,
    data : data
})
}
export const removeToCart =(data) => {
  console.log(" Remove to cart Action Called ")
  return ({
    type : Remove_TO_CART,
    data : data
})
}
export const emptyCart =(data) => {
  console.log("Empty Cart Action Called ")
  return ({
    type : Empty_CART,
    
})
}
export const productListing =() => {
  let Sdata = 'products Showing'
  console.log("Product Listing ", Sdata)
  return ({
    type : PRODUCT_LISTING,
    
})
}