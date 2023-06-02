import {Outlet, Navigate} from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../context/authcontext'

const PrivateRoutes = () => {
    let {user} = useContext(AuthContext)
    return(

        auth.token ? <Outlet/> : <Navigate to="/home"/>
    )
}

export default PrivateRoutes;