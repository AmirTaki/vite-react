import PropTypes from "prop-types"
import { useState } from "react";

export function UserDetails ({user, setUsers}){  
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState (user.email)
    return(
        <div>
            <div>
                {/* edit */}
                <button
                    onClick={()=>{
                        setIsEditing((currentState) => !currentState);
                    }}
                >    
                    Edit
                </button>
                {/* delete */}
                <button
                    onClick={()=>{
                        setUsers((currentState)=> currentState.filter(
                            (currentUser) => currentUser.id !== user.id
                        ))
                    }}
                >
                    Delete
                </button>
                {/* update : save */}
                {isEditing && (
                    <button
                        onClick={()=>{
                            setUsers(currentState => 
                                currentState.map((currentUser) => (
                                    currentUser.id === user.id  ? {...currentUser, username, email} : currentUser
                                ))    
                            )
                            setIsEditing(false)
                        }}
                        
                    >save</button>
                )}
            </div>
            <div>
                <b>ID : </b> 
                <span>{user.id}</span>
                <br/>
                <b>Username : </b>
                {isEditing ? (
                    <input
                        id = "username"
                        name = "username"
                        value = {username}
                        onChange={(e)=>{
                            setUsername(e.target.value)
                        }}
                    />) : (
                    <span>{user.username}</span>
                )}
                <br/>
                <b>email :</b> 
                {isEditing ? (
                    <input 
                        id = "email"
                        name = "email"
                        value = {email}
                        onChange={(e)=> {
                            setEmail(e.target.value)
                        }}
                    />                    
                ) : (
                    <span>{user.email}</span>
                )} 
            </div>
        </div>
       
    )
}

UserDetails.propTypes = {
    user : PropTypes.shape({
        id : PropTypes.number.isRequired,
        username : PropTypes.string.isRequired,
        email : PropTypes.string.isRequired
    }).isRequired,
    setUsers : PropTypes.func.isRequired,
};