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

        <section className='dashboard-body'>
            <div className='container'>
              <div className='dash-main-col'>
                  <div className='dash-left-col'>
                    <div className='dash-left-row'>
                      <div className='dash-inner-txt'>
                        <h1>My Info</h1>
                      </div>
                      <div className='dash-inner-card'>
                          <div className='inner-txt'>
                            <div className='dash-txt'>
                            <h1>My Progress</h1>
                            </div>
                            <div className='sub-txt'>
                                <div className='sub-txt1'>
                                  <h1>initial Weight</h1>
                                  <span>20.00 Kgs</span>
                                </div>
                                <div className='sub-txt2'>
                                  <h1>Current Weight</h1>
                                  <span>50.00 Kgs</span>
                                </div>
                                <div className='sub-txt3'>
                                  <h1>Goal Weight</h1>
                                  <span>70.0 Kgs</span>
                                </div>
                                <div>
                                  <button className='viewmore-btn'>
                                    <a href='/'>View More</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="arrow-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                  </button>
                                </div>
                            </div>
                          </div>
                          <div className='iner-logo'>
                          <svg viewBox="0 0 152 152" focusable="false" role="presentation" className="health"><svg width="152" height="152" fill="none"><path fill="#CFF1E9" d="M74.594 132.188c34.57 0 62.594-28.024 62.594-62.594S109.164 7 74.594 7 12 35.024 12 69.594s28.024 62.594 62.594 62.594z" opacity="0.4"></path><path fill="#B3E9DD" d="M74.953 112.53c23.78 0 43.059-19.278 43.059-43.059 0-23.78-19.278-43.058-43.059-43.058S31.895 45.691 31.895 69.471s19.278 43.059 43.058 43.059z"></path><path fill="#F9C6B1" stroke="#111" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M50.135 77.047l24.52 24.619 24.619-24.62.199-.199a17.367 17.367 0 005.083-12.26c0-4.385-1.694-8.87-5.083-12.26a17.369 17.369 0 00-12.26-5.082c-4.485 0-8.87 1.694-12.26 5.083l-.199.2-.2-.2c-3.388-3.389-7.873-5.083-12.259-5.083s-8.87 1.694-12.26 5.083c-3.388 3.389-5.083 7.874-5.083 12.26s1.695 8.87 5.083 12.26c-.1.099 0 .199.1.199z"></path><path stroke="#111" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33.19 72.561h31.497l5.682-7.973 7.276 15.848 5.681-7.875h33.49m-18.54 47.245l8.772-5.283c2.89-1.694 6.478-.797 8.272 1.994 1.695 2.691 1.097 6.179-1.395 8.173l-15.648 12.16c-.898.698-1.994 1.196-3.09 1.495l-28.108 7.077c-2.193.598-4.585.199-6.578-1.097l-20.533-13.356h-6.977v-22.326l13.855-2.293a8.52 8.52 0 015.382.897l12.758 6.977 20.732 1.097c3.19.199 5.681 2.79 5.681 5.98 0 3.09-2.292 5.681-5.382 5.98l-22.426 2.193"></path><path fill="#111" d="M33 107.797H22V132h11v-24.203z"></path></svg></svg>
                          </div>
                      </div>
                      <div className='dash-second-card'>
                      <div className='nutri-card'>
                          <div className='inner-txt'>
                            <div className='dash-txt'>
                            <h1>Nutrition</h1>
                            </div>
                            <div className='dash-rows'>
                              <div className='dash-cols'>
                                <div className='protein'>
                                  <h1>Protein</h1>
                                  <p>100g</p>
                                </div>
                                <div className='carbs'>
                                  <h1>Carbs</h1>
                                  <p>200g</p>
                                </div>
                                <div className='fats'>
                                  <h1>Fats</h1>
                                  <p>20g</p>
                                </div>
                                <div className='calories'>
                                  <h1>Calories</h1>
                                  <p>2000Kcal</p>
                                </div>
                              </div>
                            </div>
                            {/* <div className='sub-txt'>
                                <div className='sub-txt1'>
                                  <h1>Protein</h1>
                                  <span>100g</span>
                                </div>
                                <div className='sub-txt2'>
                                  <h1>Carbs</h1>
                                  <span>200g</span>
                                </div>
                                <div className='sub-txt3'>
                                  <h1>Fats</h1>
                                  <span>80g</span>
                                </div>
                                <div>
                                <button className='viewmore-btn'>
                                    <a href='/'>View More</a>
                                  </button>
                                </div>
                            </div> */}
                          </div>
                          {/* <div className='iner-logo'>
                          <svg viewBox="0 0 152 152" focusable="false" role="presentation" className="health"><svg width="152" height="152" fill="none"><path fill="#CFF1E9" d="M74.594 132.188c34.57 0 62.594-28.024 62.594-62.594S109.164 7 74.594 7 12 35.024 12 69.594s28.024 62.594 62.594 62.594z" opacity="0.4"></path><path fill="#B3E9DD" d="M74.953 112.53c23.78 0 43.059-19.278 43.059-43.059 0-23.78-19.278-43.058-43.059-43.058S31.895 45.691 31.895 69.471s19.278 43.059 43.058 43.059z"></path><path fill="#F9C6B1" stroke="#111" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M50.135 77.047l24.52 24.619 24.619-24.62.199-.199a17.367 17.367 0 005.083-12.26c0-4.385-1.694-8.87-5.083-12.26a17.369 17.369 0 00-12.26-5.082c-4.485 0-8.87 1.694-12.26 5.083l-.199.2-.2-.2c-3.388-3.389-7.873-5.083-12.259-5.083s-8.87 1.694-12.26 5.083c-3.388 3.389-5.083 7.874-5.083 12.26s1.695 8.87 5.083 12.26c-.1.099 0 .199.1.199z"></path><path stroke="#111" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33.19 72.561h31.497l5.682-7.973 7.276 15.848 5.681-7.875h33.49m-18.54 47.245l8.772-5.283c2.89-1.694 6.478-.797 8.272 1.994 1.695 2.691 1.097 6.179-1.395 8.173l-15.648 12.16c-.898.698-1.994 1.196-3.09 1.495l-28.108 7.077c-2.193.598-4.585.199-6.578-1.097l-20.533-13.356h-6.977v-22.326l13.855-2.293a8.52 8.52 0 015.382.897l12.758 6.977 20.732 1.097c3.19.199 5.681 2.79 5.681 5.98 0 3.09-2.292 5.681-5.382 5.98l-22.426 2.193"></path><path fill="#111" d="M33 107.797H22V132h11v-24.203z"></path></svg></svg>
                          </div> */}
                      </div>
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>
                  <div className='dash-right-col'>
                    <div className='query-col'>
                    <div className='goal-txt'>
                    <h1>Your Goals</h1>
                  </div>
                      <div className='query-row'>
                        <div className='query-txt'>
                          <div className='query-txtbx'>
                          <h1>Queries or claims?</h1>
                          <p>Talk to us for instant Support</p>
                          </div>
                          <div className='action-btn'>
                          <button className='action-btn'>
                            <a href='/'>View more</a>
                            <div className='arrow-bg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                            </div>
                          </button>
                        </div>
                        </div>
                        <div className='query-img'>
                          <div className='bg-query'>
                          <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" className="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                          </div>
                        </div>
                      </div>
                      <div className='addon-plan'>
                        <div className='addon-txt'>
                          <div className='addon-txtbx'>
                          <h1>Add on plans</h1>
                          <p>Talk to us for instant Support</p>
                          </div>
                          <div className='action-btn'>
                            <div className='plan-row'>
                                <div className='plan-col'>
                                    <div></div>
                                </div>
                            </div>
                          <button className='action-btn'>
                            <a href='/'>View more</a>
                            <div className='arrow-bg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                            </div>
                          </button>
                        </div>
                        </div>
                        <div className='plus-img'>
                          <div className='bg-plus'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="plus" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                            </svg>  
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>
              </div>
            </div>
        </section>

        {/* boxsections cards */}
        <section className='card-section'>
          <div className='container'>
            <div className='details'>
                <h1>Your Body </h1>
            </div>
            <div className='main-card-row'>
              <div className='card-wrapper flex'>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>BMI</span>
                  <h1>12.47</h1>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" class="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Body Fat Percentage</span>
                  <h1>12.47</h1>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" class="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Hip To Waist</span>
                  <h1>12.47</h1>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" class="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Metabolic Age</span>
                  <h1>12.47</h1>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" class="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Blood Age</span>
                  <h1>12.47</h1>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" class="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Helth Score</span>
                  <h1>12.47</h1>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" class="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Life Expectancy</span>
                  <h1>12.47</h1>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" class="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Inches Lost</span>
                  <h1>12.47</h1>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" class="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
              <div className='main-card-col'>
                <div className='cards-txt'>
                  <span>Weight Lost</span>
                  <h1>12.47</h1>
                  <p>Last Update : N/A</p>
                </div>
                <div className='crad-svg'>
                  <div>
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" class="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* my dietplan */}
        <section className='mydiet'>
          <div className='container'>
              <div className='diet-menubar-col'>
                  <div className='diet-menubar-main'>
                    <div className='diet-head'>
                      <h1>My Diet Menus</h1>
                    </div>
                    <div className='menubar'>
                      <ul className='menu-lgs flex'>
                        <li><a href='/' className='active'>BreakFast</a></li>
                        <li><a href='/'>Lunch</a></li>
                        <li><a href='/'>Snacks</a></li>
                        <li><a href='/'>Dinner</a></li>
                      </ul>
                    </div>
                    <div className='slider-btns'>
                      <button className='leftarrow'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="left" viewBox="0 0 16 16">
                      <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                        </svg>
                      </button>
                      <button className='rightarrow'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                          </svg>
                      </button>
                    </div>
                    {/* mainpage */}
                    <div className=''></div>
                  </div>
              </div>
          </div>
        </section>

        {/* <Footer/> */}
    </React.Fragment>
  )
}
