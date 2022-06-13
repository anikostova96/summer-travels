import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {editTrip, getById } from '../../services/tripService';
import { useContext } from 'react';
import UserContext from "../../contexts/UserContext";
import { useNavigate } from 'react-router-dom';


function Edit() {
    let [trip, setTrip] = useState({});
    let tripId = useParams().id;
    let navigate = useNavigate();
    let { userInfo } = useContext(UserContext);

    useEffect(() => {
        getById(tripId)
            .then(res => {
                setTrip(res)
            })
    }, []);

    const editHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let price = formData.get('price');
        let data = { title, description, imageUrl, price };

        editTrip(tripId, data, userInfo.accessToken)
            .then(res => {
                navigate(`/details/${tripId}`);
            });
    }
    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" onSubmit={editHandler} >
                <fieldset>
                    <legend>Edit my Trip</legend>
                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="input">
                            <input type="text" name="title" id="title" defaultValue={trip.title} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                id="description" defaultValue={trip.description} ></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={trip.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="price">Price</label>
                        <span className="input">
                            <input type="number" name="price" id="price" defaultValue={trip.price} />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save"/>
                </fieldset>
            </form>
        </section>
    );
}


export default Edit;