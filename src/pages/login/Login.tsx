import { useState, type SyntheticEvent } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log("login with ", {email, password});
    }

    return (<div>
        <h1>{isNewUser ? "Create a New Account" : "Log In"}</h1>
        <form onSubmit={handleSubmit}>
            <label>Email:
                <input 
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label>
                <input 
                type="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <button type="submit" className="primary">Submit</button>
        </form>
        {isNewUser ? 
        <div>
            <h3>Already have an account?</h3>
            <button onClick={()=> setIsNewUser(!isNewUser)}>Log In</button>
        </div> :
                <div>
            <h3>Don't have an account yet?</h3>
            <button onClick={()=>setIsNewUser(!isNewUser)}>Register Now</button>
        </div>
        }

    </div>)
}

export default Login