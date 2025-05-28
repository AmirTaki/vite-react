import {UserProfile} from "./componets/UserProfile"

export default function App(){
    
    const callMe = () => {
        console.log("callMe")
    }   

    return (
        <div>
            <h1>Root Component</h1>
            <UserProfile
                username = {"amir"}
                age = {28} 
                isLoggedIn = {true}
                favoriteFoods = {[
                    {
                        name : "sushi",
                        id : 'sushi'
                    },
                    {
                        name : "pizza",
                        id : "pizza"
                    }
                ]}    
                callMe = {callMe}
            />
        </div>
    )
}
