import { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar'
import Soap from './Soap';
function App() {
  useEffect(() => {
    const change =()=>{
      document.title="redux application";
    }
    setInterval(()=>{
      change();
    },15000);
   
  }, [])
  
  return (
    <div>
    <Navbar/>
    <div className="App">
     <Soap/>
     </div>
    
    </div>
    
  );
}

export default App;
