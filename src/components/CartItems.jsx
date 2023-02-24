import React from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { addToCart, removeToCart, emptyCart } from "../Redux/actions";

const CartItems = () => {
  const  result = useSelector((state)=>state.cartData)
  console.log(result)
    return (
    <div className="d-flex flex-wrap">
      {
        result.map((val)=>{
          
          // {console.log(val.price)}
          return(
            
          <div className="container w-25 me-4 mt-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={val.images} className="card-img-top" alt="dummy" />
          <div className="card-body">
            <h5 className="card-title">Title : {val.title} </h5>
            <p className="card-text"></p>
            <p className="card-text">
              <span className="fw-bold">Price : {val.price} </span>
              <span className="fw-bold">Quantity : {console.log(val)} </span>
            </p>

            {/* <button
              className="m-2 border-none"
              onClick={() => dispatch(addToCart(val))}
            >
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </button> */}

            {/* <button className="m-2" onClick={() => dispatch(removeToCart(val))}>
              <a href="#" className="btn btn-secondary">
                Remove to Cart
              </a>
            </button> */}

            {/* <button className="m-2" onClick={() => dispatch(emptyCart(val))}>
              <a href="#" className="btn btn-danger">
                Empty Cart
              </a>
            </button> */}
          </div>
        </div>
      </div>
        )
      })
      }
      
    </div>
  );
};

export default CartItems;
