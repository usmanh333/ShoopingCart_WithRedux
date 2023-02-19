import React from 'react'
import './App.css';
import Cards from './components/Cards';
// import Main from './components/Main';
import NavBar from './components/NavBar';
// import { connect } from 'react-redux'
// import { useReducer } from 'react';
// import reducer from './reducer';


// const initialValue =0
const App = () => {
  return(
  <>
    <NavBar />
    {/* <Main /> */}
    <Cards />
  </>
  )

// const[count , dispatch] = useReducer(reducer, initialValue)

      {/* <button onClick={()=>dispatch({type :"INC"})}>+</button>
      <p>{count}</p>
    <button onClick={()=>dispatch({type :"DEC"})}>-</button> */}
 
}

export default App