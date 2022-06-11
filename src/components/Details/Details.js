function Details() {
    return(
        <section id="details-page" class="details">
            <div class="trip-information">
                <h3>A Court of Thorns and Roses</h3>
                <p class="type">Type: Fiction</p>
                <p class="img"><img src="/images/book1.png"/></p>
                <div class="actions">
                    <a class="button" href="#">Edit</a>
                    <a class="button" href="#">Delete</a>

                    <a class="button" href="#">Like</a>

                    <div class="likes">
                        <img class="hearts" src="/images/heart.png"/>
                        <span id="total-likes">Likes: 0</span>
                    </div>
                </div>
            </div>
            <div class="trip-description">
                <h3>Description:</h3>
                <p>Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold,
                    bleak place in the long winter months. So when she spots a deer in the forest being pursued by a
                    wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and
                    killing something so precious comes at a price ...</p>
            </div>
        </section>
    );
}

export default Details;