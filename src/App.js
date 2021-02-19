/*
 * @Descripttion: Damom
 * @version: v1.0
 * @Author: hongda_huang
 * @Date: 2021-02-05 12:43:34
 * @LastEditTime: 2021-02-19 16:30:13
 * @description: 
 */

import {Fragment,useState,useEffect,useReducer} from 'react'
// Fragment可理解为vue template

import { HashRouter, Route, Switch, Redirect} from 'react-router-dom' 
import Login from './views/login'
import Home from './views/home'
function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    // componentDidMount and componentDidUpdate
    useEffect(()=>{
        console.log(count)
    },[count])
    return (
        <Fragment>
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Redirect to="/home" ></Redirect>
                    <div className="App">
                        <h2>这是一个React脚手架</h2>
                        <button onClick={() => setCount(count + 1)}>{count}</button>
                        <button onClick={() => setNumber(number + 1)}>{number}</button>
                    </div>
                </Switch>
            </HashRouter>
            
        </Fragment>
    );
}



// const initCount = { count :0 }
// function reducer(state,action){
//     switch(action.type){
//         case "increment":
//             return { count : state.count + 1}
//         case 'decrement':
//             return {count: state.count - 1}
//         default:
//             throw new Error()
//     }
// }
// function App(){
//     const [state,dispatch] = useReducer(reducer,initCount)
//     return (
//         <Fragment>
//             <p>{state.count}</p>
//             <button onClick={()=>dispatch({type:'increment'})}>+</button>
//             <button onClick={()=>dispatch({type:'decrement'})}>-</button>
//         </Fragment>
//     )

// }

export default App;
