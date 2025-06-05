import { LoginForm } from "./componets/LoginForm";
import { RegisterForm } from "./componets/RegisterForm";

export default function App(){
  
  window.addEventListener("resize", (e)=>{
    console.log(window.screenX, window.screenY)
    console.log(window.innerWidth, window.innerHeight)
  })
  return(
    <>
      <RegisterForm />
    </>
  )
}

