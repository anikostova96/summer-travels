import {useContext} from 'react';
import UserContext from "../../contexts/UserContext";
import {useNavigate} from 'react-router-dom';
import { register } from '../../services/authService';

function Register() {
    let userCont = useContext(UserContext);
    let navigate = useNavigate();
    const registerSubmit = (e) => {
        e.preventDefault();
  
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        let data = {email, password};
  
        register(data)
        .then(res => {
          userCont(res);
          navigate('/');
        });
      }

    return (
        <section id="register-page" className="register">
            <form id="register-form" onSubmit={registerSubmit}>
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label for="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label for="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
}

export default Register;