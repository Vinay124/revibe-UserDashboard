import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import Login from './Components/Login'
import Register from './Pages/Register'
// reset password pages
import Resetpassword from "./Pages/Resetpassword"
import Forgotpassword from './Pages/Forgotpassword'
import Checkemail from "./Pages/Checkemail";
import Passwordchanged from './Pages/Passwordchanged'
import EmailReq from "./Pages/EmailReq";
// import Forgotusername from './Pages/Forgotusername'
// Dashboard Links
import Dashboard from "./Pages/Dashboard"
// import Addon from './Pages/Addon'
// import Addonplan from './Pages/Addonplan'
// import Grocery from './Pages/Grocery'
// import Habbits from './Pages/Habbits'
// import Myplan from './Pages/Myplan'
// import Myprofile from './Pages/Myprofile'
// import Myprogress from './Pages/Myprogress'
// import Newplans from './Pages/Newplans'
// import Notification from './Pages/Notification'
// import Nutrition from './Pages/Nutrition'
// import Plans from './Pages/Plans'
// import Recipe from './Pages/Recipe'
// import Subscriptionplan from './Pages/Subscriptionplan'
// import Upgradeplans from './Pages/Upgradeplans'
// import Viewprofile from './Pages/Viewprofile'
// import Workoutroutine from './Pages/Addonplan'



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
        {/* <Route path="/Addon" element={<Addon/>}/>
        <Route path="/Addonplan" element={<Addonplan/>}/>
        <Route path="/Grocery" element={<Grocery/>}/>
        <Route path="/Habbits" element={<Habbits/>}/>
        <Route path="/Myplan" element={<Myplan/>}/>
        <Route path="/Myprogress" element={<Myprogress/>}/>
        <Route path="/Newplans" element={<Newplans/>}/>
        <Route path="/Nutrition" element={<Nutrition/>}/>
        <Route path="/Myprofile" element={<Myprofile/>}/>
        <Route path="/Plans" element={<Plans/>}/>
        <Route path="/Recipe" element={<Recipe/>}/>
        <Route path="/Subscriptionplan" element={<Subscriptionplan/>}/>
        <Route path="/Upgradeplans" element={<Upgradeplans/>}/>
        <Route path="/Viewprofile" element={<Viewprofile/>}/>
        <Route path="/Notification" element={<Notification/>}/>
        <Route path="/Workoutroutine" element={<Workoutroutine/>}/> */}
      </Routes>
    </Router>
  </>
  );
}

export default App;
