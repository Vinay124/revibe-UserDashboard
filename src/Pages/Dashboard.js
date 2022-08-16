import React from 'react'
import Header from '../Components/Header'
import '../Styles/app.css'


export default function Dashboard() {
  return (
    <React.Fragment>
        <Header/>
        <section>
          <div className='container'>
            <div className='wrapper'>
              <div className='user-row'>
                <div className='user-svg'>
                <svg viewBox="0 0 35 43" focusable="false" role="presentation" className="usericn"><svg width="10" height="13" fill="none"><path fill="#FFDE9E" d="M33.35 35.392c0-2.08-1.06-3.973-2.72-4.774-2.078-1.002-5.494-2.036-10.752-2.036s-8.673 1.034-10.752 2.036c-1.659.8-2.72 2.694-2.72 4.774v6.163H33.35v-6.163z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33.35 35.233c0-2.132-1.258-4.074-3.224-4.895-2.463-1.029-6.512-2.089-12.743-2.089-6.23 0-10.28 1.06-12.743 2.09-1.966.82-3.224 2.761-3.224 4.894v6.322H33.35v-6.322z"></path><path fill="#FFDE9E" d="M18.88 22.594c-4.134 0-7.484-4.105-7.484-9.17v-2.619c0-5.064 3.35-9.169 7.484-9.169s7.484 4.105 7.484 9.17v2.619c0 5.064-3.35 9.169-7.484 9.169z"></path><path stroke="#2D3D54" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" d="M17.383 22.926a9.314 9.314 0 01-9.314-9.314v-2.661a9.314 9.314 0 1118.628 0v2.661a9.314 9.314 0 01-9.314 9.314z"></path></svg></svg>
                </div>
                <div className='text-row-bx'>
                  <div>
                    <h2>Hello, User!</h2>
                    <p>Stay Safe , Stay Well</p>
                  </div>
                </div>
              </div>
              <div>
                <button className='btn-dash-1'> className</button>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
  )
}
