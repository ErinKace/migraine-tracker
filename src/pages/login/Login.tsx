function Login() {




    return (<div>
        <h1>Login</h1>
        <form>
            <label>Email:
                <input 
                type="email" 
                id="email" 
                name="email"/>
            </label>
            <label>
                <input 
                type="password" 
                id="password" 
                name="password"/>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>)
}

export default Login