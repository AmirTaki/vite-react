import { UserDetails } from "./componets/UserDetails"
export default function App(){
  const mockUsers = [
    {
      id : 1, 
      username : "amir",
      eamil : "amir@gamil.com"
    },
    {
      id : 2, 
      username : "mani",
      eamil : "mani@gamil.com"
    },
    {
      id : 3, 
      username : "matis",
      eamil : "matis@gamil.com"
    },
    {
      id :4 , 
      username : "ema",
      eamil : "ema@gamil.com"
    }
  ]
  // console.log(mockUsers)
  return (
    <>
      {mockUsers.map((user)=>{
        return(
          <UserDetails key = {user.id} user  = {user} />
        )
      })}
    </>
    
  )
}


