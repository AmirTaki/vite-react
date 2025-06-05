import { useState } from "react"
import { UserDetails } from "./componets/UserDetails"

export default function App(){
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [counter, setCounter] = useState(3);

  const [users, setUsers] = useState([
    {
      id : 1, 
      username : "amir",
      email : "amir@gmail.com",
    },
    {
      id : 2, 
      username : "mani",
      email : "mani@gmail.com",
    }
  ])
  return(
    <>
      <form
        action=""
        onSubmit={(e)=>{
          e.preventDefault();
          const newUser = {
            id : counter,
            username, 
            email
          }
          setCounter((currentCounter) => currentCounter + 1);
          setUsers ((currentUsersState) => [...currentUsersState, newUser]);
        }}
      >
        <div>
          <label htmlFor="username">Username</label>
          <input 
            name = "username" 
            id = "username" 
            value = {username}
            onChange={(e)=>{
              setUserName(e.target.value);
            }}  
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input  
            name = "email" 
            id = "email" 
            value = {email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            />   
        </div>     
        <button>Add User</button>
      </form>
      <br/>
      {users.map((user, index)=>(
        <UserDetails key = {index} user = {user} setUsers = {setUsers}/>
      ))}
    </>
  )
}

