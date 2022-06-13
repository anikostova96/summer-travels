import {Link} from 'react-router-dom';
function Trip({
    trip
}) {
    return (
        <li className="otherTrips">
            <h3>{trip.title}</h3>
            <p>Price: $ {trip.price}</p>
            <p className="img"><img src={trip.imageUrl} /></p>
            <Link className="button" to={`/details/${trip._id}`}>Learn More</Link>
        </li>
    );
}

export default Trip;