import React, { useContext, useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PreviewIcon from '@mui/icons-material/Preview';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import '../Styles/SideNavBar.css';
import { AppContext } from '../App';
import {Link,useNavigate} from 'react-router-dom';
function SideNavBar() {
    let navigate=useNavigate()
    const {toggle}=useContext(AppContext);
    return (
       
        <div className={`sideNavBar ${toggle && 'redWidth'}`} >
        <div className='sideNavBar_profile'>
            <AccountCircleIcon style={{ color: '#fff', width: '50px', height: '50px' }} />
            <h4>Anag Gaunekar</h4>
            <p>Admin</p>
        </div><ul className='sideNavBar_list'>
        <li onClick={()=> navigate('/emp/create')}><AddBoxIcon style={{ color: 'rgb(152, 159, 169)', width: '20px', height: '20px' }} /> <span className="li_title">Add Employee</span></li>
        <li onClick={()=> navigate('/emp/read')}><PreviewIcon style={{ color: 'rgb(152, 159, 169)', width: '20px', height: '20px' }} /> <span className="li_title">Read Employees</span></li>
        <li onClick={()=> navigate('/emp/update')}><UpdateIcon style={{ color: 'rgb(152, 159, 169)', width: '20px', height: '20px' }} /> <span className="li_title">Update Employee</span></li>
         <li onClick={()=> navigate('/emp/delete')}><DeleteOutlineIcon style={{ color: 'rgb(152, 159, 169)', width: '20px', height: '20px' }} /> <span className="li_title">Delete Employee</span></li>
            </ul>
        </div>
    )
}

export default SideNavBar
