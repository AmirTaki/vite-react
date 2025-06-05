import { useState } from "react"


export function RegisterForm(){

    console.log(useState("hello_world"));

    const result = useState();
    console.log(result[0]);
    console.log(result[1]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    return(
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id = "username" />
            </div>
            <div>
                <label htmlFor="password">Passoword</label>
                <input type="password" id = "password" />
            </div>
            <div>
                <label htmlFor="displayName">Display Name</label>
                <input type="text" id = "displayName" />
            </div>
        </form>
    )
}