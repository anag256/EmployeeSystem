import React from 'react'
import SideNavBar from './SideNavBar'
import '../Styles/HomeScreen.css'
import MainScreenComponent from './MainScreenComponent'
function HomeScreen() {
    return (
        <div className='homeScreen'>
            {/* <SideNavBar/> */}
            <MainScreenComponent />
        </div>
    )
}

export default HomeScreen
