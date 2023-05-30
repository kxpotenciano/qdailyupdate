import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode"
const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [user, setUser] = useState(null)
    let [authTokens, setAuthTokens] = useState(null)

    let loginUser = async(e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
        }else{
            alert("Something went Wrong")
        }

    }

    let contextData = {
        user:user,
        loginUser: loginUser
    }

    return(
        <AuthContext.Provider value={{"name": ""}}>
            {children}
        </AuthContext.Provider>
    )
}