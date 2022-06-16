import { useAuth } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';

export const isAuth = (Component) => {
    const WrapperComponent = (props) => {
        const { userInfo } = useAuth();

        return userInfo.email
            ? <Component {...props} />
            : <Navigate to="/login" />
    }

    return WrapperComponent;
}