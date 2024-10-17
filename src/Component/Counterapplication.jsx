// import React, { Component } from 'react';
// import '../Style.css'; 

// class Counterapplication extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   inc = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   dec = () => {
//     this.setState({ count: this.state.count - 1 });
//   }

//   res = () => {
//     this.setState({ count: 0 });
//   }

//   render() {
//     return (
//       <div className="container">
//         <h1 className="count-display">{this.state.count}</h1>
//         <div className="button-container">
//           <button className="btn increment" onClick={this.inc}>+</button>
//           <button className="btn decrement" onClick={this.dec}>-</button>
//           <button className="btn reset" onClick={this.res}>Reset</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counterapplication;


import React,{useState} from "react";
import "../Style.css"
function Counterapplication(props){
    let [state,setState]=useState(1)
    let inc=()=>setState(state+1)
    let dec=()=>setState(state-1)
    let reset=()=>setState(0)

    return(
        <>
        <h1> {state} </h1>
        
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={reset}>Reset</button>     
        </>
    )
}
export default Counterapplication