import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/app.css'
import logo from '../assets/images/logo-sm.png'

export default function Header() {

  return (
    <React.Fragment>
        <nav>
            <div className='container'>
                <div className='nav-col'>
                    <div className='nav-logo'>
                        <img src={logo} className="main-logo" alt='logo'/>
                    </div>
                    <div className='nav-btns'>
                        <div>
                            <Link to="/Notification">
                            <button className='notification'>
                            <a href='/' className='not-badge'>2</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                        </svg>
                        </button>
                        </Link>
                        </div>
                        <div>
                        <button className='menu-btn'>
                            <div className='btn-txt'>
                                <p>Dashboard</p>
                            </div>
                            <div className='svg-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg>
                            </div>
                        </button>
                        </div> 
                    </div>
                </div>
            </div>
        </nav>
    </React.Fragment>
  )
}
