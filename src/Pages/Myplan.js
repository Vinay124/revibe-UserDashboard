import React from 'react'
// import Footer from '../Components/footer'
import Header from '../Components/Header'
import '../Styles/app.css'

export default function Myplan() {
  return (
    <React.Fragment>
      <Header/>
      <section className='myplan'>
        <div className='container'>
          <div className='plan-col'>
            <div className='plan-txtrow'>
              <div className='plans-txts'>
                <h1>My Plan</h1>
              </div>
              <div className='plan-btn'>
                <button className='plnbtn'>Blood  BioMarker</button>
              </div>
            </div>
            {/* calender */}
            <div className='cals-col'>
              <div className='cals-row'>
                
              </div>
            </div>
          </div>

        </div>
      </section>
    </React.Fragment>
  )
}
