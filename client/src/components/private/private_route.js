import { Navigate, useLocation, Outlet } from 'react-router-dom'
import cookie from 'js-cookie'


const PrivateRoute = ({ children }) => {

    const auth = cookie.get('token')

    return (auth ? children : <Navigate to="/Login" />)
}



export default PrivateRoute;