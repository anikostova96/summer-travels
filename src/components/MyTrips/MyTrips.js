function MyTrips() {
    return(
        <section id="my-trips-page" class="my-trips">
            <h1>My Trips</h1>
            <ul class="my-trips-list">
                <li class="otherTrips">
                    <h3>Outlander</h3>
                    <p>Price: $ 1.700</p>
                    <p class="img"><img src="/images/book2.png"/></p>
                    <a class="button" href="#">Lean More</a>
                </li>
                <li class="otherTrips">
                    <h3>A Court of Thorns and Roses</h3>
                    <p>Price: $ 1.500</p>
                    <p class="img"><img src="/images/book1.png"/></p>
                    <a class="button" href="#">Lean More</a>
                </li>
            </ul>

            <p class="no-trips">No books in database!</p>
        </section>
    );
}

export default MyTrips;