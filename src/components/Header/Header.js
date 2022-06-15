import {Link} from 'react-router-dom';
import {useAuth} from '../../contexts/UserContext';


function Header() {
    let {userInfo} = useAuth();
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Catalog</Link>
                    {userInfo.email
                        ? <div id="user">
                            <span>Welcome, {userInfo.email}</span>
                            <Link className="button" to="/my-trips">My Trips</Link>
                            <Link className="button" to="/create">Add Trip</Link>
                            <Link className="button" to="/logout">Logout</Link>
                        </div>
                        : <div id="guest">
                            <Link className="button" to="/login">Login</Link>
                            <Link className="button" to="/register">Register</Link>
                        </div>}

                </section>
            </nav>
        </header>
    );
}

export default Header;