import {useEffect, useState} from 'react';
import Trip from './Trip';

function Catalog() {
    let [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/books?sortBy=_createdOn%20desc')
        .then(res => res.json())
        .then(res => {
            setTrips(res)
        })
    })

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