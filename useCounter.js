import { useState } from "react"


export const useCounter = (initialValue = 10) =>{

    const [counter, setCounter] = useState(initialValue)

    const incremento = () => {
        setCounter(counter + 1)
    }

    const decremento = () => {
        if(counter === 0) return
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        incremento, 
        decremento,
        reset
    }
}