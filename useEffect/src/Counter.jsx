import { useState,useEffect } from "react"

export default function Counter() {
    let [countx,setCountx]=useState(0)
    let [county,setCounty]=useState(0)


    let handleChange=()=>{
        setCountx(currCount=>currCount+1)
    }
    let handleChangey=()=>{
        setCounty(currCount=>currCount+1)
    }

    useEffect(function printSomething(){
        console.log("this is a side-effect");
        
    })


    return (
        <div>
            <h3> Count={count}</h3>
            <button onClick={handleChange}>+1</button>
        </div>
    )
}