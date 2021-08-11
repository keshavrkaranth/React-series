import React,{useState} from "react";
import './App.css';

function App() {

  const [count,setCount] = useState(0)
  return (
    <div className='App'>
      <header>
        <h1>My counter App using State/Hooks</h1>
      </header>
      <h2>Counter value is : {count}</h2>
      <button onClick={()=> count >=420 ? "":setCount(count+1)}>Increment Counter</button>
      <button onClick={() => count<=0 ? "":setCount(count-1)}>Decrement Counter</button>
      <button onClick={()=>setCount(0)}>Reset Counter</button>
    </div>


  );
}

export default App;
