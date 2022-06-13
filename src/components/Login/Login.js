import { login } from "../../services/authService";
import {useContext} from 'react';
import UserContext from "../../contexts/UserContext";
import {useNavigate} from 'react-router-dom';

function Login() {
    let userCont = useContext(UserContext);
    let navigate = useNavigate();
    const loginSubmit = (e) => {
      e.preventDefault();

      let formData = new FormData(e.currentTarget);
      let email = formData.get('email');
      let password = formData.get('password');
      let data = {email, password};

      login(data)
      .then(res => {
        userCont(res);
        navigate('/');
      });
    }
    return(
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={loginSubmit}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label for="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </span>
                    </p>
                    <p className="field">
                        <label for="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login"/>
                </fieldset>
            </form>
        </section>
    );
}

export default Login;