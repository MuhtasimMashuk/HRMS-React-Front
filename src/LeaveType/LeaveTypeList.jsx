


import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router';

function LeaveTypeList() {
     
    const [types, setTypes]=useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        axios.get("http://localhost:9092/leave/leaveTypeApi/list/").then(res=>{ setTypes(res.data); console.log(res.data) })
      
    }, [])

   const onView=()=>{


   }

   const onDelete=()=>{

    
}

const onEdit=()=>{

    
}
    return (
        <div>
            
            <h2 className="text-center" style ={{color: "#077e82"}}>Application Type List</h2>
                    <div className="row"> </div>
                   <table className = "table table-striped table-bordered">
                   <thead>
                   <tr>
                                    <th>Application Type Name </th>
                                    <th> Allowed Monthly Leave</th>
                                    <th>Allowed Yealry Leave</th>
                                    <th>Actions</th>
                                    
    
                    </tr>
                   </thead>

                   <tbody>
                  { 
                   types.map(
                       (type)  =>(
                        <tr key = {type.id}> 
                             <td> {type.name} </td>   
                             <td> {type.allowedLeaveNoMonthly}</td>
                             <td> {type.allowedLeaveNoYearly}</td>
                            
                             <td>
                                 <button onClick={()=>onView(type.id)} className={{backgroundCalor: "#000GFH"}}>View</button>
                                 <button onClick={()=>onEdit(type.id)} className={{backgroundCalor: "#070GFH"}}>Edit</button>
                                 <button onClick={()=>onDelete(type.id)} className={{backgroundCalor: "#900GFH"}}>Delete</button>
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

export default LeaveTypeList

