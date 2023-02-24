import React from 'react'
import './App.css';
import Cards from './components/Cards';
// import Main from './components/Main';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'
import CartItems from './components/CartItems';
// import { connect } from 'react-redux'
// import { useReducer } from 'react';
// import reducer from './reducer';


// const initialValue =0
const App = () => {
  return(
  <>
    <NavBar />
    <Routes>
        <Route path="/" element={<Cards/>} /> 
        <Route path="/cartitem" element={<CartItems />}/>
      </Routes>
  </>
  )

// const[count , dispatch] = useReducer(reducer, initialValue)

      {/* <button onClick={()=>dispatch({type :"INC"})}>+</button>
      <p>{count}</p>
    <button onClick={()=>dispatch({type :"DEC"})}>-</button> */}
 
}

export default App