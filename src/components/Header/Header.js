function Header() {
    return (
        <header id="site-header">
            <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/">Catalog</a>
                    <div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>
                    <div id="user">
                        <span>Welcome, </span>
                        <a class="button" href="/my-trips">My Trips</a>
                        <a class="button" href="/create">Add Trip</a>
                        <a class="button" href="/logout">Logout</a>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default Header;