import React from "react";
import Clock from "./Components/clock";
import Count from "./Components/Count"
import Counter from "./Components/Counter"
import Modal from "./Components/Modal"

export default function App(){
    return (
        <div>
            <Clock />
            <Count />
            <Counter />
            <Modal />
        </div>
    )
}
