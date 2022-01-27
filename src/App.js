import './App.css';
import PopChart from './Components/PopChart';
import { useState, useEffect } from 'react'
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:4000/`
})

function App() {
  // Hard-Coded Data
  const [data, setData] = useState([]) 
  
  // Stop/Start variable
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning){
      const intervalID = setInterval(() => {
        let val = 0;
        api.get('/data').then(res => {
          val = Number(res.data.rawTxt)
          console.log(Number(res.data.rawTxt))
          let array = [...data, val]
          setData(array);
        })
        
        //Shift function
        // array.shift();
      }, 5000)
      return () => {
        clearInterval(intervalID); // clear the interval in the cleanup function
      }
    }
  },[data, isRunning])
  
  // UseEffect to change data
  // useEffect(() => {
  //   if (isRunning){
  //     const intervalID = setInterval(() => {
  //       const val = Math.floor(Math.random() * 100 + 100)
  //       let array = [...data, val]
  //       //Shift function
  //       // array.shift();
  //       setData(array);
  //     }, 2000)
  //     return () => {
  //       clearInterval(intervalID); // clear the interval in the cleanup function
  //     }
  //   }
  // }, [data, isRunning])

  const stopGraph = () => {
    console.log("Stop!")
    setIsRunning(false);
  }

  const startGraph = () => {
    console.log("Start!")
    setIsRunning(true);
  }

  const checkArray = () => {
    console.log(data)
  }

  return (
    <div className="container">
      <h1>Apple Stocks Graph Checker</h1>
      <PopChart updatedData={data}/>
      <button className='stop-btn button-20' onClick={stopGraph} >Stop!</button>
      <button className='start-btn button-20' onClick={startGraph} >Resume!</button>
      <button className='button-20' onClick={checkArray}>Check</button>
    </div>
  );
}

export default App;
