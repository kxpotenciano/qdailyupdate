import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "./component/navbar.js"
import Register from "./pages/register"
import Home from "./pages/home"
import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
      <br/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
