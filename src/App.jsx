import { useState } from 'react'

import './App.css'
import logo from "./assets/left.svg"
import back from "./assets/back.svg"
import back2 from "./assets/back2.svg"
import Button from "./components/Button.jsx"
import AppBtn from "./components/AppBtn.jsx"
import phone from "./assets/phone.svg"
import phone1 from "./assets/Phone1.svg"
import phone2 from "./assets/Phone2.svg"
import phone3 from "./assets/Phone3.svg"



function App() {
  return (
    <>
      <div className='home'>
        <div className='homeFst'>
          <img src={logo} alt="" />
        </div>
        <div className='homeSec'>
          <ul className='homeMenu'>
            <li className='homeCH'>Home</li>
            <li>Product</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div>
        <img className='back' src={back} alt="" />
        <div>
          <div className='textCont'>
            <h3 className='app'>Food app</h3>
            <p className='why'>Why stay hungry when <br />
            you can order form Bella Onojie</p>
            <h4 className='down'>Download the bella onoje’s food app now on</h4>
          </div>
          <div>
            <div className='btn'>
              <Button/> 
            </div>
            <div className='btn2'>
              <AppBtn/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className='phone' src={phone} alt="" />
      </div>
      <div className='line'>
      </div>
      <div>
        <div>
          <p className='how'>How the app works</p>
        </div>
        <div className='flex gap-[200px]'>
          <div>
            <img className='phn' src={phone1} alt="" />
          </div>
          <div className='hh'>
            <h3 className='create'>Create an account</h3>
            <h2 className='create1'>Create/login to an existing <br />
            account to get started</h2>
            <h4 className='create2'>An account is created with your email <br />
            and a desired password</h4>
          </div>
        </div>
      </div>
      <div className='flex gap-[400px]'>
          <div className='hhh'>
            <h3 className='create'>Explore varieties</h3>
            <h2 className='create1'>Shop for your favorites <br />
            meal as e dey hot.</h2>
            <h4 className='create2'>Shop for your favorite meals or drinks <br />
            and enjoy while doing it.</h4>
          </div>
          <div>
            <img className='phnn' src={phone2} alt="" />
          </div>
        </div>
        <div className='flex gap-[200px]'>
          <div>
            <img className='phn' src={phone3} alt="" />
          </div>
          <div className='hh'>
            <h3 className='create'>Checkout</h3>
            <h2 className='create1'>When you done check out <br />
            and get it delivered.</h2>
            <h4 className='create2'>When you done check out and get it <br />
            delivered with ease.</h4>
          </div>
        </div>
        <div>
          <img className='vack2' src={back2} alt="" />
          <div className='back21'>
            <h2 className='downv'>Download the app now.</h2>
            <h4 className='av'>Available on your favorite store. Start your premium experience now</h4>
          </div>
        </div>
        <div className='ms'>
          <div className='btn'>
            <Button/> 
          </div>
          <div className='btn2'>
            <AppBtn/>
          </div>          
        </div>
    </>
  )
}

export default App
