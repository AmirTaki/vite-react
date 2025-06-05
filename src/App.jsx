import { useState, useEffect } from "react"


export default function App(){
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  // useEffect(()=>{} [])
  useEffect(()=>{
    console.log('renderning >>>>>> ')
    document.title = "React Tutorial" + counter;
  },[sync])
  
  // },[sync, counter])
 
  return(
    <>
      <div>You Clicked the button {counter} times</div>
      <button
        onClick={()=>setCounter((count) =>count + 1)}
      >
        Click Me</button>

      <button onClick={()=> setSync((current) => !current)}>Sync</button>
    </>
  )
  
}

