import { useEffect, useState } from "react"
import { LoginForm } from "./componets/LoginForm";

export default function App(){

  const [toggle, setToggle] = useState(false);
  return(
    <>
      <button onClick={()=> setToggle((currentState) => !currentState)}>Toggle</button>
      {toggle && <LoginForm />}
    </>
  )
}

