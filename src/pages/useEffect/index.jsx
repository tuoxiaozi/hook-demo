import React, { useState, useEffect } from 'react';

/**
 *  Effect Hook
 *  You can think of useEffect Hook as componetDidmount, componentDidUPdate adn componetsWIllUnmount combinded.
 *  effect拥有可选的清除机制， 每个effect都可以返回一个清除函数。（需要清除时，需要返回一个函数）
 *  执行清除函数后，React会在组件卸载时候执行清除操作
 *  目的： 解决class中生命周期函数经常包含不相关逻辑， 但有吧先关逻辑锋利到不同方法中的问题。
 *  可以写多个effet,会将不想管的逻辑分离到不同的effect中。
 */

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
// 返回一个函数时表示可清除的操作
//   useEffect(() => {
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }
//   })
// 通过跳过 Effect 进行性能优化, 只要传递数组作为useEffect的第二个可选参数
// 注意： 如果你要使用此优化方式，请确保数组中包含了所有外部作用域中会随时间变化并且在 effect 中使用的变量，否则你的代码会引用到先前渲染中的旧变量
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]); // 仅在 count 更改时更新

  return (
    <div>
      <h5>EFFECT HOOK</h5>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

/**
 * 使用HOOK规则
 *  1. 只在最顶部使用HOOK (不要在循环，条件护着嵌套函数中调用Hook)
 *     想要有条件地执行一个effect，可以将判断放到HOOK内部
 *  2. 只在React函数中调用Hook
 */