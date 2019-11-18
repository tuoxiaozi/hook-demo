/* 
*  https://blog.csdn.net/sinat_17775997/article/details/89208701
*/

/**  
 *  UseCallback : 当使用单个组件时，没useCallBack啥事了， 使用组件嵌套时，
 *  App渲染Child，将val和getData传进去
 *  Child使用useEffect获取数据。因为对getData有依赖，于是将其加入依赖列表
 *  getData执行时，调用setVal，导致App重新渲染
 *  App重新渲染时生成新的getData方法，传给Child
 *  Child发现getData的引用变了，又会执行getData
 *  3 -> 5 是一个死循环
 */
import React, { useState, useEffect, useCallback } from 'react'

let count = 0

export default function CallBack() {
    const [val, setVal] = useState('')

    // function getData() {
    //     setTimeout(() => {
    //         setVal('new Data' + count)
    //         count++
    //     }, 500)
    // }

    /*使用callBack后， getData的引用永远不会变，因为他它的依赖列表是空。可以根据实际情况将依赖加进去，就能确保依赖不变的情况下，函数的引用保持不变。 */
    const getData = useCallback(() => {
        setTimeout(() => {
            setVal("new data " + count);
            count++;
        }, 500);
    }, []);
    return <Child val={val} getData={getData} />;
}

function Child({ val, getData }) {
    useEffect(() => {
        getData()
    }, [getData])
    return (
        <div>{val}</div>
    )
}
