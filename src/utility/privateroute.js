import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoutes = () => {
    const Authenticated = false
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;