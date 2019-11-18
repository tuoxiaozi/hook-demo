import React from 'react';
import StateHook from './pages/useState/index'
import EffectHook from './pages/useEffect/index'
import ReducerHook from './pages/useReducer/index'
import TodoList from './pages/useRef/index'
import CallBack from './pages/useCallback/index'

import { ContextProvider } from "./pages/useContext/reducer";
import Counter from "./pages/useContext/conter";

import './App.css';

function App() {
  return (
    <div className="App">
        <StateHook/>
        <EffectHook/>
        <ReducerHook/>
        <div>
        <h5>useContext</h5>
        <ContextProvider>
          <Counter />
        </ContextProvider>
        <CallBack/>
      </div>
      <TodoList/>
    </div>
  );
}

export default App;
