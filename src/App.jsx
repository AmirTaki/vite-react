
export default function App(){
  // NOT_VERIFIED | VARIFIED | ACCOUNT_DISABLED
  const USER_STATUS = "VARIFIED";
  
  // switch case default
  switch(USER_STATUS){
    case "NOT_VERIFIED" :
      return (
        <div>
          <span>
            You are not verified. please verify your Email or Mobile Number.
          </span>
        </div>
      )

    case "VARIFIED":
      return (
        <div>
          <span>
            You are verified. Congrats! Click here to Access Your Dashboard.
          </span>
        </div>
      )
      
    case "ACCOUNT_DISABLED" :
      return(
        <div>
          <span>
            Your Account is disabled.
          </span>
        </div>
      )
    
    default : 
      return (
        <div>
          <span>
            Please contact a system admin.
          </span>
        </div>
      )
      
  }
}


// if else if   else
/*

if (USER_STATUS === "NOT_VERIFIED"){
    return (
      <div>
        <span>
          You are not verified. please verify your Email or Mobile Number.
        </span>
      </div>
    )
  }
  else if (USER_STATUS === "VARIFIED"){
    return (
      <div>
        <span>
          You are verified. Congrats! Click here to Access Your Dashboard.
        </span>
      </div>
    )
  }
  else if (USER_STATUS === "ACCOUNT_DISABLED"){
    return (
      <div>
        <span>Your Account is disabled.</span>
      </div>
    )
  }
  else {
    return(
    <div>
      <span>Please contact a system admin.</span>
    </div>
    )
  }
*/


//  continal ? true : false
/*
const isAuthenticated = true;
 
  return isAuthenticated ? (
    <div>
      <h1>Wellcome, User!</h1>
    </div> 
  ) : (
    <div>
      <h1>You are not logged in</h1>
    </div>
  )
*/

/*
if(isAuthenticated){
    return (
      <div>
        <h1>Wellcome, User!</h1>
      </div>
    )
  }
  return (
    <div>
      <h1>You are not logged in</h1>
    </div>
  )
  */
