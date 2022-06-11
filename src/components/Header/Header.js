function Header() {
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <a href="/">Catalog</a>
                    <div id="guest">
                        <a className="button" href="/login">Login</a>
                        <a className="button" href="/register">Register</a>
                    </div>
                    <div id="user">
                        <span>Welcome, </span>
                        <a className="button" href="/my-trips">My Trips</a>
                        <a className="button" href="/create">Add Trip</a>
                        <a className="button" href="/logout">Logout</a>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default Header;