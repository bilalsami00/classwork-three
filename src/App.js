import './App.css';
import { useState } from 'react';

function App() {
  // conditional rendering

  const [condition, setCondition] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        
        {
          condition ? <img 
          width={100} src='https://thumbs.dreamstime.com/z/light-blub-bulb-white-background-78995866.jpg'/> 
          : <img width={100} 
          src='https://www.shutterstock.com/image-vector/light-blub-vector-electric-inside-260nw-1751062736.jpg'/>
        }

        <button onClick={()=>{
          setCondition(!condition)
        }}>switch</button>

      </header>
    </div>

  );
}

export default App;
