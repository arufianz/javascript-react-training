//  React hook = Special function that allows functional components
//               to use react features without writing class component(React v16.8)
//               (useState, useEffect, useContext, useReducer, useCallback, etc)
//  useState() = A React hook that allows the creation of a stateful variable
//               and a setter function to update its value in the virtual DOM
//               [value, setValue] 

import { useState } from "react";

function Counter() {

    const [count, setCount,] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };

    return <div className="counter-container">
        <p className="counter-text">{count}</p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </div>;
}

// onChange = event handler used primarly with form elements
//            (ex. <input>, <textarea>, <select>, <radio>)
//            Triggers a function everytime the value of the input change

function UserInput(){
    const [name, setName] = useState("");
    const [order, setOrder] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState();

    function InputNameHandler(e){  // e = event, it fills automatically
        setName(e.target.value)
    }

    return(<div>
        <input value={name} onChange={InputNameHandler} />
        <p>Name: {name}</p>

    </div>);
}

export {Counter, UserInput};