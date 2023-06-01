import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./pages/register"
import Home from "./pages/home"
import Login from "./pages/login"
import Mainpage from "./pages/mainpagelogin"
import PrivateRoutes from "./utility/privateroute"
import {AuthProvider} from './context/authcontext'
import './App.css';

function App() {
  return (
    <div>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route element={<PrivateRoutes/>}>
                <Route  path="/home" element={<Home/>}/>
                <Route  path="/register" element={<Register/>}/>
                <Route path="/mainpage" element={<Mainpage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route index element={<Home/>}/>
                </Route>
              </Routes>
            </AuthProvider>
          </BrowserRouter>
    </div>
  );
}

export default App;
