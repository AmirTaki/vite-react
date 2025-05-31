import PropTypes from "prop-types"


export function UserDetails ({user}){  
  
    return(
       <div>
            <b>ID : </b>  <span>{user.id}</span>
            <br/>
            <b>Username : </b> <span>{user.username}</span>
            <br/>
            <b>email :</b> <span>{user.eamil}</span> 
        </div>
    )
}

UserDetails.propTypes = {
    user : PropTypes.shape({
        id : PropTypes.number.isRequired,
        username : PropTypes.string.isRequired,
        eamil : PropTypes.string.isRequired
    })
}



// export function UserDetails (props){
  
    //   console.log(
    //                <div>
    //             <b>ID : </b>  <span>{props.user.id}</span>
    //             <br/>
    //             <b>Username : </b> <span>{props.user.username}</span>
    //             <br/>
    //             <b>email :</b> <span>{props.user.eamil}</span> 
    //         </div>

//     )
//     console.log(props)
//     return(
//        <div>
//             <b>ID : </b>  <span>{props.user.id}</span>
//             <br/>
//             <b>Username : </b> <span>{props.user.username}</span>
//             <br/>
//             <b>email :</b> <span>{props.user.eamil}</span> 
//         </div>
//     )
// }