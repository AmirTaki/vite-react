import { useState } from "react"

export function RegisterForm(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const isDisabld = !username || !password || !displayName;
    return(
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" 
                    id = "username"
                    value = {username} 
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                />
            </div>
            <div>
                <label htmlFor="password">Passoword</label>
                <input type="password" 
                    id = "password" 
                    value = {password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                />
            </div>
            <div>
                <label htmlFor="displayName">Display Name</label>
                <input type="text" 
                    id = "displayName" 
                    value = {displayName} 
                    onChange={(e)=>{
                        setDisplayName(e.target.value);
                    }}
                />
            </div>
            <div>
                <span>Username : {username}</span>
            </div>
            <div>
                <span>Password : {password}</span>
            </div>
            <div>
                <span>Display Name : {displayName}</span>
            </div>
            <button disabled={isDisabld}>Sign Up</button>
        </form>
    )
}