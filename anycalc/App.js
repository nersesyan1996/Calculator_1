import './App.css';
import React,{useReducer,useState,useRef} from 'react';
import {buttons,operators} from "./Buttons.jsx"
import {init,Reducer} from './Reducer.js'
import Styles from "./style.modul.css";


function App() {
  let [val,setVal]=useState('0')
  const inputValue=useRef()
  const [arr, setArr] = useState([]);

  const[myState,dispatch]=useReducer(Reducer,init.count)
  

  function count(value) {
  setArr([...arr, value]);
    let itemVal=value
    let output=inputValue.current
    setVal(val=itemVal)
    console.log(output.value);
 console.log(output.value.substring(0,output.value.length+1));

    // if(output.value==='0'){
    //   output.value=""
    // }
    output.value+=val
    let str = output.value
   console.log(typeof str.length);
  }
  const operations = (o)=>{
    let output=inputValue.current
    if (o === "CE") {
      output.value = output.value.substring(0, output.value.length - 1);
    } else if (o === "=") {
      output.value = eval(output.value);
    } else if (o === "Del") {
      output.value = 0
    }
  }


  return (
    <div className="p1" style={{ Styles }}>
      <div className="parent" style={{ Styles }}>
        <input
          type={"text"}
          ref={inputValue}
          defaultValue={val}
          className="inp"
        />

        <div className="button">
          {buttons.map((item, index) => (
            <button
              key={index}
              value={item.val}
              onClick={(e) => {
                if (
                  arr[arr.length - 1] === "+" ||
                  arr[arr.length - 1] === "-" ||
                  arr[arr.length - 1] === "/" ||
                  arr[arr.length - 1] === "*"
                ) {

                  e.target.disabled = true;
                  console.dir(e.target);
                } else {
                  e.target.disabled = false;
                }
                count(item.val);
              }}
            >
              {item.val}
            </button>
          ))}
          {operators.map((item, index) =>
            item.val === "=" ? (
              <input
                value={item.val}
                className="equal"
                style={{ Styles }}
                key={index}
                onClick={() => operations(item.val)}
              />
              
            ) : (
              <input
                style={{ Styles }}
                key={index}
                value={item.val}
                onClick={() => operations(item.val)}
              />
              
            )
          )}
        </div>
        <p>{myState}</p>
        {/* 
        <button
          onClick={() => {
            dispatch({ type: "plus" });
          }}
        >
          plus
        </button> */}
      </div>
    </div>
  );
}

export default App;
