export function LoginForm(){
    return(
        <form>
            <label htmlFor="username">Username</label>
            <br/>
            <input type="text"
                id = "username"
                onChange={(e)=>{
                    console.log(e);
                    console.log(e.target);
                    console.log(`username : ${e.target.value}`);
                    console.log("value changed");
                }}
                onKeyDown={(e)=>{
                    console.log(e)
                    console.log(e.key)
                }}
            />
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input type="password"
                id = "password"
                onChange={(e)=>{
                    console.log(`password : ${e.target.value}`);
                }}
            />
            <br/>
            <button>Login</button>
        </form>
    )
}