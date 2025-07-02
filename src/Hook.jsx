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
    const [number, setNumber] = useState(1);
    const [order, setOrder] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("PickUp");

    // e = event, it fills automatically
    function InputNameHandler(e){  
        setName(e.target.value);
    }
    function InputNumberHandler(e){  
        setNumber(e.target.value);
    }
    function InputOrderHandler(e){
        setOrder(e.target.value);
    }
    function InputPaymentHandler(e){
        setPayment(e.target.value)
    }
    function InputShippingHandler(e){
        setShipping(e.target.value)
    }

    return(<div>
        <input value={name} onChange={InputNameHandler} placeholder="input your name"/>
            <p>Name: {name}</p>
        <input value={number} onChange={InputNumberHandler} type="number" />
            <p>Number: {number}</p>
        <textarea value={order} onChange={InputOrderHandler} type="text" placeholder="order here"/>
            <p>Your Order: {order}</p>
        <select value={payment} onChange={InputPaymentHandler}>
            <option value="">select payment</option>
            <option value="Dana">Dana</option>
            <option value="Gopay">Gopay</option>
            <option value="ShopeePay">ShopeePay</option>
        </select>
            <p>Payment: {payment}</p>
        <label><input type="radio" value="PickUp" checked={shipping === "PickUp"}
            onChange={InputShippingHandler} />PickUp</label> <br />
        <label><input type="radio" value="Delivery" checked={shipping === "Delivery"}
            onChange={InputShippingHandler} />Delivery</label>
            <p>Shipping: {shipping}</p>
    </div>);
}

export {Counter, UserInput};