
import axios from 'axios'
import React,{useState,useEffect} from 'react'

import { useNavigate } from 'react-router'



const EmpList =() =>{

    const [ employees, setEmployees ] = useState([])
    const navigator = useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:9092/hr/empApi/list/")
       .then(
           (e)=>{
               
               setEmployees(e.data)
           
               console.log(e.data)
               console.log(employees)
           }
       )
       
    },[])


    const onViwe = (id) => {
        console.log(id);
    }

    const onEdit = (id) => {
        navigator(`/emp-update/${id}`, {replace: true})
    }

    const onDelete = (id) => {
       
            axios.delete("http://localhost:9092/hr/empApi/"+id).then(res=>{setEmployees(employees.filter(emp=>emp.id!=id))})
   
   
        
    }

    


    return (
        <div>
             <h2 className="text-center" style ={{color: "#077e82"}}>Employees List</h2>
                    <div className="row"> </div>
                   <table className = "table table-striped table-bordered">
                   <thead>
                   <tr>
                                    <th> Code</th>
                                    <th> Name</th>
                                    <th>Birthday</th>
                                    <th>Joning Date</th>
                                    <th>NID NO.</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Mobile NO</th>
                                    <th> Dept Id</th>
                                    <th> Action</th>
        
                    </tr>
                   </thead>

                   <tbody>
                  { 
                   employees.map(
                       (employee)  =>(
                        <tr key = {employee.id}> 
                             <td> {employee.code} </td>   
                             <td> {employee.name}</td>
                             <td> {employee.dob}</td>
                             <td> {employee.doj}</td>
                             <td> {employee.nid}</td>
                             <td> {employee.email}</td>
                             <td> {employee.gender}</td>
                             <td> {employee.mobileNo}</td>
                             <td> {employee.deptId}</td>
                             <td>
                                 {/* <button onClick={()=>onViwe(employee.id)} className={{backgroundCalor: "#000GFH"}}>View</button> */}
                                 <button onClick={()=>onEdit(employee.id)} className={{backgroundCalor: "#070GFH"}}>Edit</button>
                                 <button onClick={()=>onDelete(employee.id)} className={{backgroundCalor: "#900GFH"}}>Delete</button>
                             </td>
                        </tr>
                       )
                    )
                  }
                       

                   </tbody>



                   </table>
        </div>
    )

}

export default EmpList
