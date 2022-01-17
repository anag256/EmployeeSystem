import React from 'react'
import '../Styles/MainScreenComponent.css'
import FormSection from './FormSection'
import TopNavBar from './TopNavBar'
import {Outlet} from 'react-router-dom'
function MainScreenComponent() {
    return (
        <div className='mainScreenComponent'>
            <TopNavBar/>
            <Outlet/>
        </div>
    )
}

export default MainScreenComponent
