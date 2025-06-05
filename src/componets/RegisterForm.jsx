import { useState } from "react"

export function RegisterForm(){

    const[formFields, setFormFields] = useState({
        username : "",
        password : "",
        displayName : "",
        isDisabld : false,
    })
    console.log(formFields);
    return(
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" 
                    id = "username"
                    value = {formFields.username} 
                    onChange={(e)=>{
                        // setFormFields({username : e.target.value});
                        setFormFields((currentState) => ({...currentState, username : e.target.value}))
                    }}
                />
            </div>
            <div>
                <label htmlFor="password">Passoword</label>
                <input type="password" 
                    id = "password" 
                    value = {formFields.password}
                    onChange={(e)=>{
                        // setFormFields({password : e.target.value});
                        setFormFields((currentState)=> ({
                            ...currentState,
                            password : e.target.value
                        }))
                    }}
                />
            </div>
            <div>
                <label htmlFor="displayName">Display Name</label>
                <input type="text" 
                    id = "displayName" 
                    value = {formFields.displayName} 
                    onChange={(e)=>{
                        // setFormFields({displayName : e.target.value});
                        setFormFields((currentState)=>({
                            ...currentState,
                            displayName : e.target.value
                        }))
                    }}
                />
            </div>
            <div>
                <span>Username : {formFields.username}</span>
            </div>
            <div>
                <span>Password : {formFields.password}</span>
            </div>
            <div>
                <span>Display Name : {formFields.displayName}</span>
            </div>
            <button disabled={formFields.isDisabld}>Sign Up</button>
        </form>
    )
}