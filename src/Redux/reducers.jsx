import {ADD_TO_CART,Remove_TO_CART,Empty_CART} from "./constant"


// action always take return value else the app will crash
// data is initially empty

const cartData =(data = [], action)=>{
    // console.log("data is cart : ", action);
    switch(action.type){
        case ADD_TO_CART:
        console.log("reducer add to cart", action)
        return([action.data, ...data])

        case Remove_TO_CART:
        console.log("reducer remove to cart", action)
        data.length = data.length - 1
        return([...data])

        case Empty_CART:
        console.log("reducer empty cart", action)
        return([])

        default:
            return data
    }
        
    

    
    // if (action.type === "ADD_TO_CART"){
    //     console.log("data in action:" , action)
    //     return 200
    // } else{
    //     return "no data in cart"
    // }
}

export default cartData