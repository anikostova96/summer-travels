import {useEffect, useState} from 'react';
import { getAll } from '../../services/tripService';
import Trip from './Trip';

function Catalog() {
    let [trips, setTrips] = useState([]);

    useEffect(() => {
        getAll()
        .then(res => {
            setTrips(res)
        })
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1 style={{fontStyle: 'italic'}} >All Our Trips &#127796;</h1>
            <ul className="other-trips-list">
                {trips.map(trip => <Trip key={trip._id} trip={trip}/>)}
            </ul>
        </section>
    );
}

export default Catalog;