import { useEffect } from "react";
import { useDocementClick } from "./utils/hooks/useDocumentClick";
export function LoginForm() {
    useEffect(()=>{
        const resizeEventHandler = (e) => {
            console.log("Windonw/ViewPort Resized!");
        }
        window.addEventListener('resize', resizeEventHandler);
        return ()=> {
            console.log("Unmounting LoginForm");
            console.log("Removing Resize Event Listener");
            window.removeEventListener("resize", resizeEventHandler);
        }
    },[])
    useDocementClick();
    return(
        <form
            onSubmit={
                (e) => {
                    e.preventDefault()
                    const formData = new FormData(e.target)
                    const username = formData.get("username")
                    const password = formData.get('password')
                    fetch("http://localhost:5174/api/login",{
                        body : {
                            username,
                            password,
                        },
                        method : "POST",
                    })
                }   
            }     
        >
            <label htmlFor="username">Username</label>
            <br/>
            <input 
                type="text"
                id = "username" 
                onChange={(e)=>{
                    console.log(`username : ${e.target.value}`);
                }}
                name = "username"
            />
            <br/>
            
            <label htmlFor="password">Password</label>
            <br/>
            <input 
                type="password" 
                id = "password" 
                onChange={(e)=>{
                    console.log(`password : ${e.target.value}`);
                }}
                name = "password"
            />
            <br/>
            <button>Login</button>
        </form>
    )
}