import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from 'moment';
function FormComponent({action,handleSubmit,firstName,setFirstName,lastName,setLastName,email,setEmail, dob,setDOB,gender, setgender,radioCHangehandler,empID,setEmpID,handleRead}) {


    return (<>
      {!(action==='create') && <><form onSubmit={handleRead}>
           <label>Employee ID</label><input type="text" value={empID} onChange={(e)=>setEmpID(e.target.value)}/>
           <input className='btn_form submitbtn' type='submit' value="Read"/>
        </form> </>}
    
       <form className='addform' onSubmit={(e)=>handleSubmit(e,action)}>
        <label>First Name</label>  <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} disabled={(action==='read'|| action==='delete')?true:false}/>
        <label>Sur Name </label>  <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} disabled={(action==='read'|| action==='delete')?true:false}/>
        <label>Email</label>   <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} disabled={(action==='read'|| action==='delete')?true:false}></input>
        <label>Date Of Birth</label> 
          <DatePicker  value={dob && moment(dob).format("DD-MM-YYYY")}  onChange={(date) => setDOB(date)} fixedHeight  dateFormat="DD-MM-YYYY" disabled={(action==='read'|| action==='delete')?true:false}/>
        <label>Gender</label> <div className='gender'><input type="radio" name="gender" value="Male" checked={gender==="Male"?true:false} onChange={radioCHangehandler} disabled={(action==='read'|| action==='delete')?true:false}/> <label>Male</label>
        <input type="radio" name="gender" value="Female" className='femgender' checked={gender==="Female"?true:false} onChange={radioCHangehandler} disabled={(action==='read'|| action==='delete')?true:false}/> <label>Female</label></div>
       {!(action==='read') && <input className='btn_form submitbtn' type='submit' value={action}/> }
       </form>
      
    </>
    )
}

export default FormComponent
