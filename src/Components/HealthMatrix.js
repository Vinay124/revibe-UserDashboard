import React from 'react'
import '../Styles/app.css'

export default function HealthMatrix() {

  return (
    <>
    {/* boxsections cards */}
    <section className='card-section'>
          <div className='container'>
            <div className='details'>
                <h1>Health Matrix </h1>
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
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" className="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
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
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" className="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
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
                  <svg viewBox="0 0 38 35" width="50" height="50" focusable="false" role="presentation" className="quary-icon"><svg fill="none" viewBox="0 0 38 35"><path fill="#fff" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1z"></path><path stroke="#2D3D54" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" d="M33 1H4.2A3.2 3.2 0 001 4.2v17.6A3.2 3.2 0 004.2 25h8l6.4 8 6.4-8h8a3.2 3.2 0 003.2-3.2V4.2A3.2 3.2 0 0033 1zM9 9h19.2M9 17h11.2"></path></svg></svg>
                  </div>
                </div>
              </div>
             </div>
           </div>
          </div>
        </section>

</>
  )
}
