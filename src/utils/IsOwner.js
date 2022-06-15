import {useContext} from 'react';
import UserContext from "../contexts/UserContext";

function IsOwner(ownerId) {
    let {userInfo} = useContext(UserContext);
    let userId = userInfo._id;
    
    return userId === ownerId;
}

export default IsOwner;