import Trip from "../Catalog/Trip";
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { myTripss } from '../../services/tripService';
import UserContext from "../../contexts/UserContext";

function MyTrips() {
    let [myTrips, setMyTrips] = useState([]);
    let { userInfo } = useContext(UserContext);
    let userId = userInfo._id;

    useEffect(() => {
        myTripss(userId)
            .then(res => {
                setMyTrips(res)
            })
    }, []);

    return (
        <section id="my-trips-page" className="my-trips">
            <h1>My Trips</h1>
            {myTrips.length > 0
                ? <ul className="my-trips-list">
                    {myTrips.map(x => <Trip key={x._id} trip={x} />)}
                </ul>
                : <p className="no-trips">No trips in database!</p>}



        </section>
    );
}

export default MyTrips;