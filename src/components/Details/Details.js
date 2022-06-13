import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getById } from '../../services/tripService';
import IsOwner from '../utils/IsOwner';
import IsUser from '../utils/IsUser';

function Details() {
    let [trip, setTrip] = useState({});
    let tripId = useParams().id;
    let isOwner = IsOwner(trip._ownerId);
    let isUser = IsUser();
    useEffect(() => {
        getById(tripId)
            .then(res => {
                setTrip(res)
            })
    }, []);
    return (
        <section id="details-page" className="details">
            <div className="trip-information">
                <h3>{trip.title}</h3>
                <p className="type">Price: $ {trip.price}</p>
                <p className="img"><img src={trip.imageUrl} width="150" height="150"/></p>
                <div className="actions">
                    {isUser ?
                        isOwner ? <><a className="button" href="#">Edit</a> <a className="button" href="#">Delete</a></>
                            : <a className="button" href="#">Like</a>
                        : ''}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: 0</span>
                    </div>
                </div>
            </div>
            <div className="trip-description">
                <h3>Description:</h3>
                <p>{trip.description}</p>
            </div>
        </section>
    );
}

export default Details;