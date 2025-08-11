import { useState, type SyntheticEvent } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let newUser: boolean = false;
    const switchUserView = ()=> {
        newUser = !newUser;
    }

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log("login with ", {email, password});
    }

    return (<div>
        <h1>{newUser ? "Create a New Account" : "Login"}</h1>
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
        {newUser ? 
        <div>
            <h3>Already have an account?</h3>
            <button onClick={switchUserView}>Log In</button>
        </div> :
                <div>
            <h3>Don't have an account yet?</h3>
            <button onClick={switchUserView}>Register Now</button>
        </div>
        }

    </div>)
}

export default Login