import React, {useReducer, createContext} from 'react'

const myContext = createContext()
const initalState = { count: 0}

const reducer = (state, action) =>{
    switch (action.type) {
        case 'add':
            return {count: state.count + 1}
        case 'diff':
            return {count: state.count - 1}
        case 'reset':
            return {count: 0}
        default: throw new Error()
    }
}

// 创建Context处理函数 （函数名必须大写，不然导出报错，无法导出）
const ContextProvider= props =>{
    const [state, dispatch] = useReducer(reducer, initalState)
    return (
        <myContext.Provider value={{state, dispatch}}>
            {props.children}
        </myContext.Provider>
    )
}

export { reducer, myContext, ContextProvider}