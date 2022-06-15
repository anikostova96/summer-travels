import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { bookTrip, deleteTrip, getById, tripMembers, userBookTrip } from '../../services/tripService';
import IsOwner from '../../utils/IsOwner';
import IsUser from '../../utils/IsUser';
import { useContext } from 'react';
import UserContext from "../../contexts/UserContext";
import { useNavigate, Link } from 'react-router-dom';


function Details() {
    let [trip, setTrip] = useState({});
    let [userBooks, setUserBooks] = useState(0);
    let tripId = useParams().id;
    let isOwner = IsOwner(trip._ownerId);
    let [bookTrips, setBookTrips] = useState(0);
    let { userInfo } = useContext(UserContext);
    let navigate = useNavigate();
    let isUser = IsUser();
    useEffect(() => {
        getById(tripId)
            .then(res => {
                setTrip(res)
            })
    }, [tripId]);

    tripMembers(tripId)
        .then(res => setBookTrips(res));
    userBookTrip(tripId, userInfo._id)
        .then(res => {
            setUserBooks(res);
        });    

    const deleteHandler = (e) => {
        e.preventDefault();
        deleteTrip(tripId, userInfo.accessToken)
            .then(res => {
                navigate('/');
            })

    }

    const bookHandler = (e) => {
        e.preventDefault();
        bookTrip({ tripId }, userInfo.accessToken)
            .then(res => {
                tripMembers(tripId)
                    .then(res => setBookTrips(res));
                navigate(`/details/${tripId}`)
            });
    }

    return (
        <section id="details-page" className="details">
            <div className="trip-information">
                <h3>{trip.title}</h3>
                <p className="type">Price: $ {trip.price}</p>
                <p className="img"><img src={trip.imageUrl} width="150" height="150" /></p>
                <div className="actions">
                    {isUser ?
                        isOwner ? <><Link className="button" to={`/edit/${tripId}`}>Edit</Link> <a onClick={deleteHandler} className="button" href={`/delete/${trip._id}`}>Delete</a></>
                            : userBooks == 0 ? <a className="button" onClick={bookHandler} href="">Book it</a> : <p> &#10003; Already booked</p>
                        // : ''
                        : ''}

                    <div className="likes">
                        {/* <img className="hearts" src="/images/heart.png" /> */}
                        <span id="total-likes"> <span style={{ textShadow: 'none' }}>&#128100; </span> Members: {bookTrips}</span>
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