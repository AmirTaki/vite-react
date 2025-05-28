import PropTypes from 'prop-types';
import { UserFavoriteFoods } from "./UserFavoriteFoods"
import { UserUsername } from "./UserUsername"


export function UserProfile ({username, age, isLoggedIn, callMe}){

    callMe()
    return(
        <>
            <b>Age : </b>
            <span>{age}</span>
            <>
                <UserUsername username = {username}/>
                <UserFavoriteFoods />

            </>

            {/* {String(isLoggedIn)} */}
        </>

    )
}
UserProfile.propTypes = {
    username : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    callMe : PropTypes.func.isRequired,
    isLoggedIn : PropTypes.bool,
    favoriteFoods : PropTypes.arrayOf(
        PropTypes.shape({
            name : PropTypes.string.isRequired,
            id : PropTypes.string.isRequired
        })
    )

}