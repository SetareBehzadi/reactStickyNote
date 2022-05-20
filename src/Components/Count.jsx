import React,{useState,useEffect} from "react";


export default function Clock(){
    const [step,setStep] = useState(1)
    const [count,setCount] = useState(0)

    useEffect(()=>{
        document.title =  `you clicked ${count} times`
    })

    return (
        <>
        <p>
            you clicked {count} times
        </p>
            <input value={step} type={`number`} onChange={(event)=>setStep(event.target.value)}/>
            <button type={`button`} onClick={()=>setCount(count + parseInt(step))}>
                click me!
            </button>
        </>
    )
}