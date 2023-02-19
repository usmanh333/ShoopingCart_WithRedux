import {createStore} from "redux"
import CombReducers from "../Redux/rootReducers";


// const dummyReducer = () =>{
//     console.log("dummyReducer called")
// }

const store = createStore(CombReducers
    ,+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 

export default store;