import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./pages/register"
import Home from "./pages/home"
import Login from "./pages/login"
import Mainpage from "./pages/mainpagelogin"
import PrivateRoutes from "./utility/privateroute"
import Announcements from './pages/announcement';
import Updates from './pages/updates';
import {AuthProvider} from './context/authcontext'
import './App.css';

function App() {
  return (
    <div>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route element={<PrivateRoutes/>}>
                  <Route path="/mainpage" element={<Mainpage/>}/>
                  <Route path="/announcements" element={<Announcements/>}/>
                  <Route path="/updates" element={<Updates/>}/>
                </Route>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route index element={<Home/>}/>
              </Routes>
            </AuthProvider>
          </BrowserRouter>
    </div>
  );
}

export default App;
