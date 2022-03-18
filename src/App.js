import './App.css';
import React,{useState,useRef} from 'react';
import {buttons,operators} from "./Buttons.jsx"
import Styles from "./style.modul.css";





function App() {

  let [val,setVal]=useState('')
  const inputVal = useRef();
  let parent=useRef();
  const changeVal=(value)=>{
   let v=value.value;
   let output=inputVal.current;
  setVal(val=v)
   if(output.value==='0'){
    output.value=''
   }
   output.value+=val;
   let f=false
   let z= output.value.split('')
   if(true){
  if(z[z.length-1]==='+'){

   value.disabled=true
   f=true
  }else if(z[z.length-1]==='-'){
    value.disabled=true
    f=true
  }else if(z[z.length-1]==='*'){
    value.disabled=true
    f=true
  }else if(z[z.length-1]==='/'){
    value.disabled=true
    f=true
  }else {
   Array.from(parent.current.children).map((i)=>{
     if(i.value==='+'){
       i.disabled=false
     }else if(i.value==='-'){
      i.disabled=false
     }else if(i.value==='*'){
      i.disabled=false
     }else if(i.value==='/'){
      i.disabled=false
     }
   })
  }
}
}

  const operations=(op)=>{
    
    let output=inputVal.current;
    
    if(op==='CE'){
    output.value=output.value.substring(0, output.value.length-1)
    }else if(op==='='  ){
       output.value.length>=0? output.value=eval(output.value):output.value=''
    }else if(op==='Del'){

      output.value=''
    }
  }
 
  return (
    <div className="parent" style={{ Styles }}>
      <div className="p1" style={{ Styles }}>
        <input
          ref={inputVal}
          defaultValue={val}
          className="output"
          autofocus
        />
        <div className="buttons" ref={parent} style={Styles}>
          {buttons.map((item, i) => (
            <button
              key={i}
              value={item.val}
              
              onKeyDown={(e) => {
                changeVal(e.target);
              }}
              onClick={(e) => {
                changeVal(e.target);
              }}
            >
              {item.val}
            </button>
          ))}
          {operators.map((item, i) =>
            item.val === "=" ? (
              <button
                key={i}
                className="equal"
                onClick={() => operations(item.val)}
              >
                {item.val}
              </button>
            ) : (
              <button key={i} onClick={() => operations(item.val)}>
                {item.val}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
   