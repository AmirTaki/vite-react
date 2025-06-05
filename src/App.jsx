import { useState, useEffect } from "react"


export default function App(){
  const [counter, setCounter] = useState(0);

  // useEffect(()=>{} {})
  useEffect(()=>{
    console.log('renderning >>>>>> ')
    document.title = "React Tutorial" + counter;
  })
 
  return(
    <>
      <div>You Clicked the button {counter} times</div>
      <button
        onClick={()=>setCounter((count) =>count + 1)}
      >
        Click Me</button>
    </>
  )
  
}

