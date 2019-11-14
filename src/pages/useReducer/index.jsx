/**
 * useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，
 * 并返回当前的 state 以及与其配套的 dispatch 方法。
 */

import React, { useReducer } from 'react'

const initalState = { count: 0 }
// 创建一个 reducer , reducer用来接收 state, action , 返回新的state
function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return { count: state.count + 1 }
        case 'sub':
            return { count: state.count - 1 }
        default:
            return new Error()
    }
}

export default function Counter() {
    // 接收一个 reducer和 action 返回一个reducer和 new state
    const [state, dispatch] = useReducer(reducer, initalState)
    return (
        <div>
            <h5>useReducer</h5>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: 'add' })}>Add</button>
            <button onClick={() => dispatch({ type: 'sub' })}>Sub</button>
        </div>
    )
}

// 方法二
// export default function Counter() {
//     const [state, dispatch] = useReducer((state, action) => {
//         switch (action.type) {
//             case 'add':
//                 return {
//                     count: state.count + 1
//                 }
//             default: throw new Error()
//         }
//     }, { count: 0 })
//     return <div>
//         <p>{state.count}</p>
//         <button onClick={() => dispatch({ type: 'add' })}>+++</button>
//     </div>
// }

/***
 *  reduer永远接收(state, action) => newState()
 */