import React from 'react';
import { useState } from "react";
import {MineContext} from '../App'

function MineSiteInput(props) {
    const [inputs, setInputs] = useState([]);
    function handleAddMoreButton(_e) {
        if(inputs.length===0){
            inputs.push({id:1, value:''});
        }
        else{
            var val = Math.max.apply(Math, inputs.map((x=>x.id)));
            inputs.push({id:val+1, value:''});
        }

        setInputs([...inputs]);
        console.log('You clicked submit.');
    }
        
    function onInputChange(id, e){
        for(var x in inputs){
            let item =inputs[x];
            if  (item.id===id){
                item.value=e.target.value;
                setInputs([...inputs]);
                break;
            }
        }
    }

    return (
        <MineContext.Consumer>
        { ({_, setNames})=>{
                function handleDoneButton() {
                    var names=[]
                    for(var x in inputs){
                        let item =inputs[x];
                        names.push(item.value);
                    }
                    setNames(names);
                    props.history.push("/overview");
                    console.log('You clicked submit.');
                }

                var content= <ul>{
                    inputs.map((x)=>
                    <li key={x.id}>
                    <label >{"ore"+x.id}</label>
                    <input id={"ore"+x.id} onChange={(e)=>onInputChange(x.id, e)} value={x.value}/>
                    </li>)
                }
                </ul>
                return(
                    <div>
                        <div>
                            {content}
                        </div>
                    <div>
                        <button id="addMoreButton" onClick={(e)=>handleAddMoreButton(e)}>Add More</button>
                    </div>
                    <div>
                        <button id="doneButton"  onClick={(e)=>handleDoneButton(e)}>Done</button>
                    </div>
                    </div>
                );
        }}
        </MineContext.Consumer>);
  
    // return (
    //   <div className="mine-site-input">
    //     Mine Site Input
    //     {names.map((val, index) => (
    //       <div key={index}>
    //         <div>ore {index + 1}</div>
    //         <input
    //           type="text"
    //           id={`ore${index + 1}`}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // );
  }

 export default MineSiteInput;