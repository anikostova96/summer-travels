function Catalog() {
    return (
        <section id="dashboard-page" class="dashboard">
            <h1 style={{fontStyle: 'italic'}} >All Our Trips &#127796;</h1>
            <ul class="other-books-list">
                <li class="otherBooks">
                    <h3>Paris</h3>
                    <p>Price: $ 1.000</p>
                    <p class="img"><img src="/images/ban_img3.jpg"/></p>
                    <a class="button" href="#">Learn More</a>
                </li>

                <li class="otherBooks">
                    <h3>Barcelona</h3>
                    <p>Price: $ 1.500</p>
                    <p class="img"><img src="/images/ban_img1.jpg"/></p>
                    <a class="button" href="#">Learn More</a>
                </li>

                <li class="otherBooks">
                    <h3>Goa</h3>
                    <p>Price: $ 1.600</p>
                    <p class="img"><img src="/images/ban_img2.jpg"/></p>
                    <a class="button" href="#">Learn More</a>
                </li>
            </ul>
        </section>
    );
}

export default Catalog;