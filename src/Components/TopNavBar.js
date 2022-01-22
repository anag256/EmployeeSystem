import React, { useContext, useState } from 'react'
import {AppContext} from '../App.js'
import '../Styles/TopNavBar.css'

function TopNavBar() {
    const {toggle,setToggle}=useContext(AppContext);
    return (
        <>
        <div className='topNavBar'>
          {/* <div className='toggle_box' onClick={()=>setToggle(!toggle)}>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
          </div>  */}
          <span className='emp_title'>Employee Management</span>
        </div>
        </>
    )
}

export default TopNavBar
