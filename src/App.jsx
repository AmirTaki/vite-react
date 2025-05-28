import {UserProfile} from "./componets/UserProfile"

export default function App(){
    
    const callMe = () => {
        console.log("callMe")
    }   

    return (
        <div>
            <h1>Root Component</h1>
            <UserProfile
                age = {28} 
                isLoggedIn = {true}
                favoriteFoods = {[
                    {
                        name : "sushi",
                    }
                ]}    
                callMe = {callMe}
            />
        </div>
    )
}
