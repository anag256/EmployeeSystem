import React, { useEffect, useState } from 'react'
import '../Styles/FormSection.css'
import {useNavigate} from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import FormComponent from './FormComponent';
import axios from 'axios'

function FormSection({action}) {
    let navigate=useNavigate()
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [dob,setDOB]=useState("");
    const [gender,setgender]=useState("");
    const [employees,setEmployees]=useState([]);
    const [empID,setEmpID]=useState("");
    const handleSubmit=(e,action)=>{
        e.preventDefault();
        if(action==='delete'){
            axios.delete(`http://localhost:3002/employees/${empID}`)
            let empl=employees.filter(emp=>emp.id!==empID);
            setEmployees(empl);
            setFirstName("");
            setLastName("");
            setEmail("");
            setDOB("");
            setgender("");
            setEmpID("");
        }
        else if(action==='create'){
    
            const request={
                id:uuid(),
                firstname:firstName,
                lastname:lastName,
                email,
                DOB:dob,
               Gender:gender
            }
            axios.post('http://localhost:3002/employees',request)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
            setEmployees([...employees,request])
            setFirstName("");
            setLastName("");
            setEmail("");
            setDOB("");
            setgender("");
            
           
        }
        else if(action==="update"){
            const request={
                id:empID,
                firstname:firstName,
                lastname:lastName,
                email,
                DOB:dob,
               Gender:gender
            }
            axios.put(`http://localhost:3002/employees/${empID}`,request)
            .then(res=>res.data)
            .catch(err=>console.log(err))
            
            setEmployees(employees.map(employee=>{
               return (employee.id===empID ? ({...request}):(employee) )
            }))
            setFirstName("");
            setLastName("");
            setEmail("");
            setDOB("");
            setgender("");
            setEmpID("");
        }
 
    }
    const handleRead=(e)=>{
        e.preventDefault();
    let emp=employees.filter(emp=>emp.id===empID)
      setFirstName(emp[0].firstname);
      setLastName(emp[0].lastname);
      setEmail(emp[0].email);
      setDOB(emp[0].DOB);
      setgender(emp[0].Gender);
    }
    const radioCHangehandler=(e)=>{
      
        setgender(e.target.value);
        
    }
    function getEmployees(){
        axios.get('http://localhost:3002/employees')
        .then(res=>setEmployees(res.data))
        .catch(err=>console.log(err))
        }
    useEffect(() => {
        
        getEmployees();
      
    }, [])
    return (
        <div className='formSection'>
       
            <div className='button_flx'>
                <button className={`btn_form ${action==='create' && 'btn_active'}`} onClick={()=> navigate('/emp/create')}>Create</button>
                <button className={`btn_form ${action==='read' && 'btn_active'}`} onClick={()=> navigate('/emp/read')}>Read</button>
                <button className={`btn_form ${action==='update' && 'btn_active'}`} onClick={()=> navigate('/emp/update')}>Update</button>
                <button className={`btn_form ${action==='delete' && 'btn_active'}`} onClick={()=> navigate('/emp/delete')}>Delete</button>
            </div>
            {action==='create' && <div className='form_sec'>
                <h3>Create New Employee</h3>
                <FormComponent action={action} handleSubmit={handleSubmit} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} dob={dob} setDOB={setDOB} gender={gender} setgender={setgender} radioCHangehandler={radioCHangehandler}/>
            </div>}
            
            {action==='delete' && <div className='form_sec'>
                <h3>Delete an Employee</h3>
                <FormComponent action={action} handleSubmit={handleSubmit} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} dob={dob} setDOB={setDOB} gender={gender} setgender={setgender} radioCHangehandler={radioCHangehandler} empID={empID} setEmpID={setEmpID} handleRead={handleRead}/>
            </div>}
            {action==='read' && <div className='form_sec'>
                <h3>Read existing Employee</h3>
                <FormComponent action={action} handleSubmit={handleSubmit} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} dob={dob} setDOB={setDOB} gender={gender} setgender={setgender} radioCHangehandler={radioCHangehandler} empID={empID} setEmpID={setEmpID} handleRead={handleRead}/>
            </div>}
            {action==='update' && <div className='form_sec'>
                <h3>Update an Employee</h3>
                <FormComponent action={action} handleSubmit={handleSubmit} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} dob={dob} setDOB={setDOB} gender={gender} setgender={setgender} radioCHangehandler={radioCHangehandler} empID={empID} setEmpID={setEmpID} handleRead={handleRead}/>
            </div>}
        </div>
    )
}

export default FormSection
