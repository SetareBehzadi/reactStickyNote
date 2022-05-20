import React,{useState,useEffect} from "react";


export default function Clock() {

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        if (counter <1232) {
            setTimeout(() => {
                setCounter((counter) => counter + 1);
            }, 0);
        }
    }, [counter]);

    return <h1>{counter}</h1>;
}