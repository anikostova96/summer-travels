function Header() {
    return (
        <header id="site-header">
            <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="#">Catalog</a>
                    <div id="guest">
                        <a class="button" href="#">Login</a>
                        <a class="button" href="#">Register</a>
                    </div>
                    <div id="user">
                        <span>Welcome, </span>
                        <a class="button" href="#">My Trips</a>
                        <a class="button" href="#">Add Trip</a>
                        <a class="button" href="#">Logout</a>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default Header;