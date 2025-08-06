import { useState, type SyntheticEvent } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log("login with ", {email, password});
    }

    return (<div>
        <h1>Login</h1>
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
    </div>)
}

export default Login