import { createTrip } from "../../services/tripService";
import { useContext } from 'react';
import UserContext from "../../contexts/UserContext";
import { useNavigate } from 'react-router-dom';
import {isAuth} from '../../hoc/isAuth';

function Create() {
    let { userInfo } = useContext(UserContext);
    let navigate = useNavigate();

    const createSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let price = formData.get('price');
        let data = { title, description, imageUrl, price };

        createTrip(data, userInfo.accessToken)
            .then(res => {
                navigate('/');
            });

    }
    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={createSubmit}>
                <fieldset>
                    <legend>Add new Trip</legend>
                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="input">
                            <input type="text" name="title" id="title" placeholder="Title" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="price">Price</label>
                        <span className="input">
                            <input type="number" name="price" id="price" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Trip" />
                </fieldset>
            </form>
        </section>
    );
}

export default isAuth(Create);