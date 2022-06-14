import { logout } from "../../services/authService";
import {useContext, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import UserContext from "../../contexts/UserContext";

function Logout() {
    let {settingUser, userInfo} = useContext(UserContext);

    useEffect(() => {
      logout(userInfo.accessToken)
      .then(res => {
          settingUser({})
      })
    }, []);

    return (
      <Navigate to={'/'}></Navigate>
    );
}

export default Logout;