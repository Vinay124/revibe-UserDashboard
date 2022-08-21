import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import Login from './Components/Login'
import Register from './Pages/Register'
// reset password pages
import Resetpassword from "./Pages/Resetpassword"
import Forgotpassword from './Pages/Forgotpassword'
import Checkemail from "./Pages/Checkemail"
import Passwordchanged from './Pages/Passwordchanged'
import EmailReq from "./Pages/EmailReq"

// Dashboard Links
import Dashboard from "./Pages/Dashboard"
import Myplan from "./Pages/Myplan"



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/'  element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
        {/* PasswordReset */}
        <Route path="/Resetpassword" element={<Resetpassword/>}/>
        <Route path="/Checkemail" element={<Checkemail/>}/>
        <Route path="/Passwordchanged" element={<Passwordchanged/>}/>
        <Route path="/EmailReq" element={<EmailReq/>}/>
        {/* Dashboard */}
        <Route path="/Myplan" element={<Myplan/>}/>
       </Routes>
    </Router>
  </>
  );
}

export default App;
