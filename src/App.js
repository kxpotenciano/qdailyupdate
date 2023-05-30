import { BrowserRouter, Route } from 'react-router-dom';
import Register from "./pages/register"
import Home from "./pages/home"
import Login from "./pages/login"
import Mainpage from "./pages/mainpagelogin"
import PrivateRoute from "./utility/privateroute"
import {AuthProvider} from './context/authcontext'
import './App.css';

function App() {
  return (
    <div>
          <BrowserRouter>
          <AuthProvider>
          <Route>
            <PrivateRoute index element={<Home/>}/>
            <PrivateRoute component={Home} path="/home" element={<Home/>}/>
            <PrivateRoute component={Register} path="/register" element={<Register/>}/>
            <PrivateRoute component={Login} path="/login" element={<Login/>}/>
            <PrivateRoute component={Mainpage} path="/mainpage" element={<Mainpage/>}/>
          </Route>
          </AuthProvider>
          </BrowserRouter>
    </div>
  );
}

export default App;
