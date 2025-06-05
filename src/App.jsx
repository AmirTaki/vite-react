import { useState } from "react"
import { UserDetails } from "./componets/UserDetails"

export default function App(){
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
      {users.map((user)=>(
        <UserDetails key = {user.id} users = {user} setUsers={setUsers}/>
      ))}
    </>
  )
}

