import {Outlet, Navigate} from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../context/authcontext'

const PrivateRoutes = () => {
    let auth = {'tokens': false}
    return(

        auth.tokens ? <Outlet/> : <Navigate to="/register"/>
    )
}

export default PrivateRoutes;