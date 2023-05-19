import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./pages/register"
import Home from "./pages/home"
import Login from "./pages/login"
import Mainpage from "./pages/mainpagelogin"
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/mainpage" element={<Mainpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
