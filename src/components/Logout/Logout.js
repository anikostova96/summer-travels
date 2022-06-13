import { logout } from "../../services/authService";
import {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import UserContext from "../../contexts/UserContext";

function Logout() {
    let userCont = useContext(UserContext);

    logout()
    .then(res => {
      userCont({})
    })
    return (
      <Navigate to={'/'}></Navigate>
    );
}

export default Logout;