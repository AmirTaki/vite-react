import { func } from "prop-types";
import { useState, useEffect } from "react"


export default function App(){
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  // useEffect(()=>{} [])
  useEffect(()=>{
    console.log('renderning >>>>>> ')
    document.title = "React Tutorial" + counter;
  },[sync])

  useEffect(()=>{
    const controller = new AbortController();
    async function fetchUsers() {
      try{
        const respose = await fetch("https://jsonplaceholder.typicode.com/users",
          {signal: controller.signal}
        );
     
        const json = await respose.json();
        console.log(json)
      }
      catch(err){
        console.log(err);
      }
    }
    fetchUsers()
    return () => {
      controller.abort()
    }
  })

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

