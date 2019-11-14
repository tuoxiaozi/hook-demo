## Redux

1. 核心概念

   * state
   * action: 就是一个普通的`js`对象(描述发生的指示器)
   * reducer： 一个只接受state和action,并返回新state的函数（将state,和action串联起来）

2. 三大原则

   * 单一数据源: 整个应用的state被储存在一棵Object tree中，并且这个object tree只存在于唯一一个store中

   * State是只读的： 唯一改变state的方法是触发action,action是一个用于描述已发生事件的普通对象

   * 使用纯函数来执行修改： 为了描述action,如何改变state tree, 需要编写reducers

     

3. Action: 是把数据从应用传到sore的有效负荷，是store数据的唯一来源，一般会通过`store.dispatch()`将action传入store。
4. Reducer: 指定了应用状态变化如何响应actions并发送到stroe的，只描述了有事情发生这一事实，并没有描述如何更新state
5. Store职责
   1. 维持应用的`state`
   2. 提供`getState（）`方法获取state
   3. 提供`dispatch(action)`方法更新state
   4. 通过`subscribe(listener)`注册监听器
   5. 通过`subscrible(listener)`返回的函数注销监听器
6. 使用`combineReducers()将多个reducer合并成一个`

7. API

   * # `createStore(reducer, [preloadedState], enhancer)`

     创建一个Redux store来存放应用中所有的state

8. `useState`
~~~jsx
    const [count, setCount] = useState(0)
    <div>
        <p>{count}<p>
        <button onClick={()=>setCount(count + 1)}>+1</button>
    </div>
~~~

9. `useReducer`

~~~jsx
    const initalState = {count: 0}
    function reducer(){}
    const [state, dispatch] = useReducer(reducer,initalSate)
    <button onClick={()=>dispatch({type="add"})}></button>
~~~

10. `React Context`
* 作用： Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性
* API：
    + `React.createContext`: 创建一个上下文的容器(组件), defaultValue可以设置共享的默认数据
    + `Provider`:用于生产共享数据的地方,value:放置共享的数据
    + `Consumer`: 他是专门消费供应商(Provider 上面提到的)产生数据。Consumer需要嵌套在生产者下面。才能通过回调的方式拿到共享的数据源。当然也可以单独使用，那就只能消费到上文提到的defaultValue

    ~~~jsx
        const {Provider, Consumer} = React.createContext(defaultValue);
        <Provider value={/*共享的数据*/}>
            /*里面可以渲染对应的内容*/
        </Provider>
        <Consumer>
        {value => /*根据上下文  进行渲染相应内容*/}
        </Consumer>
    ~~~