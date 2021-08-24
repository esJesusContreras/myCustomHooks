import { useState } from "react"


const useCounter = ( initialState = 10 ) => {

    const [state, setstate] = useState(initialState)

    const increment = ( ) => {
        setstate( state +  1 );
    }

    const decrement = ( ) => {
        setstate( state -  1 );
    }

    const resetCounter = () => {
        setstate( initialState );
    }

    return {
        state,
        increment,
        decrement,
        resetCounter
    };
}

export default useCounter
