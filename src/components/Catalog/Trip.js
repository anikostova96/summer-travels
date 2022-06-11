function Trip({
    trip
}) {
    return (
        <li className="otherTrips">
            <h3>{trip.title}</h3>
            <p>Price: $ {trip.price}</p>
            <p className="img"><img src={trip.imageUrl} /></p>
            <a className="button" href="#">Learn More</a>
        </li>
    );
}

export default Trip;