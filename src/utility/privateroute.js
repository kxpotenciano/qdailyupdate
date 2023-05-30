import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({children, ...rest}) => {
    const Authenticated = false
    return(
        <Route {...rest}>{!Authenticated ? <Redirect to="/Login"/> : children}</Route>
    )
}

export default PrivateRoute;