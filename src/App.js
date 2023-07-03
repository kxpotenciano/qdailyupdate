import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./pages/register"
import Home from "./pages/home"
import Login from "./pages/login"
import Mainpage from "./pages/mainpagelogin"
import PrivateRoutes from "./utility/privateroute"

import AnnMainPage from './pages/annMainPage';
import AnnPage from './pages/annPage'
import AnnPage2 from './pages/annPage2'
import Announcements from './pages/announcement';

import UpdMainPage from './pages/updMainPage';
import Updates from './pages/updates';
import UpdPage from './pages/updPage'
import UpdPage2 from './pages/updPage2'


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

                </Route>
                <Route path="/AnnMainPage" element={<AnnMainPage/>}/>
                <Route path="/announcements" element={<Announcements/>}/>
                <Route path="/UpdMainPage" element={<UpdMainPage/>}/>
                <Route path="/updates" element={<Updates/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/UpdPage" element={<UpdPage/>}/>
                <Route path="/UpdPage2" element={<UpdPage2/>}/>
                <Route path="/AnnPage" element={<AnnPage/>}/>
                <Route path="/AnnPage2" element={<AnnPage2/>}/>
                <Route index element={<Home/>}/>
              </Routes>
            </AuthProvider>
          </BrowserRouter>
    </div>
  );
}

export default App;
