import { createContext, useContext} from 'react';
import useLocalStorage from "../hooks/useLocalStorage";

let UserContext = createContext();

export default UserContext;

export const AuthProvider = ({ children }) => {
    let [userInfo, setUserInfo] = useLocalStorage('user', {});
    let settingUser = (user) => {
        setUserInfo(user);
    }

    return (
        <UserContext.Provider value={{settingUser, userInfo}}>
        {children}
        </UserContext.Provider>
    )
}

export const useAuth = () => {
    const authState = useContext(UserContext);
    return authState;
}