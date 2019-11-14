import React,{ useReducer,useRef } from 'react'
/* ref: https://www.jianshu.com/p/14e429e29798 */
// 创建页面
/* 
* 坑： function组件名称必须为大写字母开头，小写会识别为函数，
*      使用Hooks会报 React Hook "useRef" is called in function 的错误
*/
export default function ShoppingList() {
    const inputRef = useRef()
    // 创建reducer
    const [items, dispatch] = useReducer((state, action) => {
    // state 是old state， 返回的items是 new state
        switch (action.type) {
            case 'add':
                // 这里返回的只是一个action(不包含数据)
                console.log('old state',state)
                return [...state,
                {
                    id:state.length,
                    name: action.name
                }]
            default:
                return [...state]
        }
    }, []) // 参数： reducer 和一个 initalState
    console.log('new state',items)
    /* 
    * 表单默认特性： 表单一点击提交按钮(submit)必然跳转页面，
    * 如果表单的action为空也会跳转到自己的页面，即效果为刷新当前页。
    */

    function handleSubmit(event) {
        // 这里相当于一个store是包含数据的 (dispatch更新视图， 接收一个action 更新视图)
        event.preventDefault() // 取消事件的默认动作
        let value = inputRef.current.value
        if (!value) return false
        dispatch({
            type: 'add',
            name: value
        })
        inputRef.current.value = '' 
    }
    return (
        <div>
            <h5>useReducer & useRef</h5>
            <p>Todo List: 按回车添加item</p>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text"/>
            </form>
            <ul>
                {items.map(item =>(
<li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

