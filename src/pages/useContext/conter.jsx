import React, { useContext } from 'react'
import { myContext } from './reducer'

 function Counter() {
    const {state, dispatch} = useContext(myContext)
    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: 'add' })}>+</button>
            <button onClick={() => dispatch({ type: 'diff' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default Counter