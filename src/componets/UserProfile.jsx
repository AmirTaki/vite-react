import { UserFavoriteFoods } from "./UserFavoriteFoods"
export function UserProfile (){
    return(
        <div id= "user-profile">
            <p>Username : amir</p>
            <div>
                <span>Email : </span>
                <span>test@gamil.com</span>
            </div>
            
            <UserFavoriteFoods />
        </div>

    )
}
