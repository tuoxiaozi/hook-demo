import React, { useState } from 'react';
export default function StateHook() {
    /**
     *  State Hook
     *  useStaet returns a pair: the cureent state value and a function that lets you update it. 
     *  you can call the function from an event hanlder or somewhere else.
     */
    // 数组第一个值是当前值，第二个值是更新的state函数
    const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div>
        <h5>STATE HOOK</h5>
        <p>You click {count} times</p>
        <button onClick={()=>setCount(count + 1)}>Click Me</button>
      </div>
    </div>
  );
}