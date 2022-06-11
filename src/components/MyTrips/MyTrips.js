function MyTrips() {
    return(
        <section id="my-trips-page" className="my-trips">
            <h1>My Trips</h1>
            <ul className="my-trips-list">
                <li className="otherTrips">
                    <h3>Outlander</h3>
                    <p>Price: $ 1.700</p>
                    <p className="img"><img src="/images/book2.png"/></p>
                    <a className="button" href="#">Lean More</a>
                </li>
                <li className="otherTrips">
                    <h3>A Court of Thorns and Roses</h3>
                    <p>Price: $ 1.500</p>
                    <p className="img"><img src="/images/book1.png"/></p>
                    <a className="button" href="#">Lean More</a>
                </li>
            </ul>

            <p className="no-trips">No books in database!</p>
        </section>
    );
}

export default MyTrips;