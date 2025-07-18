import { Link } from "react-router-dom"

function Navbar() {
    return (<div className="nav">
        <div className="navbar-brand">
            <Link to="/">Migraine Tracker</Link>
        </div>
        <div className="navbar-links">
            <Link to="/journal">Journal</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/login">Login</Link>
        </div>
    </div>)
}

export default Navbar