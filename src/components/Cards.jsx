import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeToCart, emptyCart } from "../Redux/actions";

const Cards = () => {
  const dispatch = useDispatch();
  // getting the state lenght in the result
  const result = useSelector((state) => state.cartData);
  // calculating the price of each products
  const totalPrice = result.reduce((total, item) => total + item.price, 0);
  const [data, setData] = useState([]);
  useEffect(() => {
    const ApiURL = "https://api.escuelajs.co/api/v1/products";
    fetch(ApiURL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      {/* // Add to Cart list */}
      <ul className="nav align-center">
        <li className="list bg-black text-white p-4">{result.length}</li>
        <li className="li">
          <Link to={"/cartitem"}>
            <img src="./images/cart-icon.png" width={80} height={80} />
          </Link>
        </li>
        <li className="list bg-black text-white p-4">Price : {totalPrice}</li>
        <li>
          {result.length <= 0 && (
            <p className="bg-danger text-white p-4">The Cart is Empty now </p>
          )}
        </li>
      </ul><br /><br />

      {/* //Card Starts from here   */}

      <div className="d-flex flex-wrap">
        {data.map((val) => {
          // {console.log(val)}
          return (
            <div key={val.id} className="container w-25 mt-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={val.images} className="card-img-top" alt="dummy" />
                <div className="card-body">
                  <h5 className="card-title">Category : {val.category.name}</h5>
                  <p className="card-text">{val.description}</p>
                  <p className="card-text">
                    <span className="fw-bold">Price :</span> {val.price}
                  </p>

                  <button
                    className="m-2 border-none"
                    onClick={() => dispatch(addToCart(val))}
                  >
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </button>

                  <button
                    className="m-2"
                    onClick={() => dispatch(removeToCart(val))}
                  >
                    <a href="#" className="btn btn-secondary">
                      Remove to Cart
                    </a>
                  </button>

                  <button
                    className="m-2"
                    onClick={() => dispatch(emptyCart(val))}
                  >
                    <a href="#" className="btn btn-danger">
                      Empty Cart
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
