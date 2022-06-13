import {useContext} from 'react';
import UserContext from "../../contexts/UserContext";

function IsUser() {
    let {userInfo} = useContext(UserContext);

    return userInfo.email ? true : false;
}

export default IsUser;