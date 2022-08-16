import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import Login from './Components/Login'
import Register from './Pages/Register';
// Dashboard Links
import Dashboard from "./Pages/Dashboard";
import Notification from "./Pages/Notification";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        {/* Dashboard */}
        <Route path="/Notification" element={<Notification/>}/>
      </Routes>
    </Router>
  </>
  );
}

export default App;
