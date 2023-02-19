import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeToCart,
  emptyCart,
  productListing,
} from "../Redux/actions";

const Cards = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    const ApiURL = "https://api.escuelajs.co/api/v1/products";
    fetch(ApiURL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="d-flex flex-wrap">
      {data.map((val) => {
        // {console.log(val)}
        return (
          <div className="container w-25 me-4 mt-4">
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
  );
};

export default Cards;
