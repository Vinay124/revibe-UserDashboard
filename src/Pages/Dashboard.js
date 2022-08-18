import React from 'react'
import Header from '../Components/Header'
import '../Styles/app.css'
//import Footer from '../Components/Footer'


export default function Dashboard() {
  return (
    <React.Fragment>
        <Header/>
        <section>
          <div className='container'>
            <div className='wrapper'>
              <div className='user-row'>
                <div className='user-svg'>
                <svg className='usericon' width="35" height="43" fill="none"><path fill="#e06358" d="M33.35 35.392c0-2.08-1.06-3.973-2.72-4.774-2.078-1.002-5.494-2.036-10.752-2.036s-8.673 1.034-10.752 2.036c-1.659.8-2.72 2.694-2.72 4.774v6.163H33.35v-6.163z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33.35 35.233c0-2.132-1.258-4.074-3.224-4.895-2.463-1.029-6.512-2.089-12.743-2.089-6.23 0-10.28 1.06-12.743 2.09-1.966.82-3.224 2.761-3.224 4.894v6.322H33.35v-6.322z"></path><path fill="#FFDE9E" d="M18.88 22.594c-4.134 0-7.484-4.105-7.484-9.17v-2.619c0-5.064 3.35-9.169 7.484-9.169s7.484 4.105 7.484 9.17v2.619c0 5.064-3.35 9.169-7.484 9.169z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M17.383 22.926a9.314 9.314 0 01-9.314-9.314v-2.661a9.314 9.314 0 1118.628 0v2.661a9.314 9.314 0 01-9.314 9.314z"></path></svg>
                </div>
                <div className='text-row-bx'>
                  <div className='text-col'>
                    <h2>Hello, User!</h2>
                    <p>Stay Safe , Stay Well</p>
                  </div>
                </div>
              </div>
              <div>
                <button className='btn-dash-1'> My Plan</button>
              </div>
            </div>
          </div>
        </section>

        {/* alertbox */}
        <section className='alert-box'>
          <div className='container'>
            <div className='alert-col'>
              <div className='alert-row'>
                <div className='alert-txt-bx'>
                  <h1>Verification Pending</h1>
                  <p>Please verify Email and Mobile number </p>
                </div>
                <div className='verify-box'>
                  <div className='verify-email'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="email" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
                  </svg>
                  </div>
                  <div className='verify-mobile'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="mobile" viewBox="0 0 16 16">
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                  </div>
                </div>
                <div className='close-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="close-arrow" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard-body */}
      <section className='your-goal'>
        <div className='container'>
          <div className='goal-txt'>
            <h1>Your Goals</h1>
          </div>
            <div className='goal-m-col'>
              <div className='goal-m-row'>
                <div className='goal-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="droplet" viewBox="0 0 16 16">
                  <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/>
                  </svg>
                </div>
                <div className='goal-tx-row'>
                  <div className='goal-tx'>
                    <h1>Water</h1>
                  </div>
                  <div className='gl-num'>
                    <h1>4</h1>
                  </div>
                  <div className='gl-limit'>
                    <h1>Liters</h1>
                  </div>
                  <div className='main-tx'>
                    <h1>Ideal Water intake</h1>
                  </div>
                </div>
              </div>
              <div className='goal-sleep'>
                <div className='goal-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className='Sleep' viewBox="0 0 16 16">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
            </svg>
                </div>
                <div className='goal-tx-row'>
                  <div className='goal-tx'>
                    <h1>Sleep</h1>
                  </div>
                  <div className='gl-num'>
                    <h1>7</h1>
                  </div>
                  <div className='gl-limit'>
                    <h1>Liters</h1>
                  </div>
                  <div className='main-tx'>
                    <h1>Ideal Sleep</h1>
                  </div>
                </div>
              </div>
              <div className='goal-steps'>
                <div className='goal-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="droplet" viewBox="0 0 16 16">
                  <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/>
                  </svg>
                </div>
                <div className='goal-tx-row'>
                  <div className='goal-tx'>
                    <h1>Steps</h1>
                  </div>
                  <div className='gl-num'>
                    <h1>10,000</h1>
                  </div>
                  <div className='gl-limit'>
                    <h1>Steps</h1>
                  </div>
                  <div className='main-tx'>
                    <h1>Ideal Steps activity</h1>
                  </div>
                </div>
              </div>
              <div className='goal-workout'>
                <div className='goal-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="droplet" viewBox="0 0 16 16">
                  <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/>
                  </svg>
                </div>
                <div className='goal-tx-row'>
                  <div className='goal-tx'>
                    <h1>WorkOuts</h1>
                  </div>
                  <div className='gl-num'>
                    <h1>325</h1>
                  </div>
                  <div className='gl-limit'>
                    <h1>WorkOuts</h1>
                  </div>
                  <div className='main-tx'>
                    <h1>Ideal Workout</h1>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>


        {/* <section className='dashboard-body'>
            <div className='container'>
              <div className='dash-main-col'>
                  <div className='dash-left-col'>
                    <div className='dash-left-row'>
                      <div className='dash-inner-txt'>
                        <h1>Dashboard</h1>
                      </div>
                      <div className='dash-inner-card'>
                          
                      </div>
                      <div></div>
                    </div>
                    <div></div>
                  </div>
                  <div className='dash-right-col'>
                    <div></div>
                    <div></div>
                  </div>
              </div>
            </div>
        </section> */}

        {/* <Footer/> */}
    </React.Fragment>
  )
}
