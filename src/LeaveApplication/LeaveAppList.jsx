


import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router';

function LeaveAppList() {
     
    const [applications, setApplications]=useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        axios.get("http://localhost:9092/leave/leaveAppApi/all/list/").then(res=>{ setApplications(res.data); console.log(res.data) })
      
    }, [])

   const onView=()=>{


   }

   const onDelete=()=>{

    
}

const onEdit=()=>{

    
}
    return (
        <div>
            
            <h2 className="text-center" style ={{color: "#077e82"}}>Application List</h2>
                    <div className="row"> </div>
                   <table className = "table table-striped table-bordered">
                   <thead>
                   <tr>
                                    <th>Application Date </th>
                                    <th> Form Date</th>
                                    <th>To Date</th>
                                    <th>Reason</th>
                                    <th>Emp Id</th>
                                    <th>leave Type id</th>
                                    <th> On leave contactno</th>
                                    <th> ResponiblePerson id</th>
                                    <th>remarks</th>
        
                    </tr>
                   </thead>

                   <tbody>
                  { 
                   applications.map(
                       (app)  =>(
                        <tr key = {app.id}> 
                             <td> {app.appDate} </td>   
                             <td> {app.fromDate}</td>
                             <td> {app.toDate}</td>
                             <td> {app.reason}</td>
                             <td> {app.employeeId}</td>
                             <td> {app.leaveTypeId}</td>
                             
                             <td> {app.onLeaveContactNo}</td>
                             <td> {app.responsiblePersonId}</td>
                             <td> {app.remarks}</td>
                             
                             <td>
                                 <button onClick={()=>onView(app.id)} className={{backgroundCalor: "#000GFH"}}>View</button>
                                 <button onClick={()=>onEdit(app.id)} className={{backgroundCalor: "#070GFH"}}>Edit</button>
                                 <button onClick={()=>onDelete(app.id)} className={{backgroundCalor: "#900GFH"}}>Delete</button>
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

export default LeaveAppList
// "id": 15,
// "appDate": "2021-10-10",
// "fromDate": "2021-10-11",
// "toDate": "2021-10-13",
// "entry": "USER",
// "reason": "medical",
// "employeeId": 1,
// "leaveTypeId": 6,
// "onLeaveContactNo": "1234567",
// "responsiblePersonId": 1,
// "active": true,
// "remarks": null


// "id": 15,
// "appDate": "2021-10-10",
// "fromDate": "2021-10-11",
// "toDate": "2021-10-13",
// "entry": "USER",
// "reason": "medical",
// "employeeId": 1,
// "leaveTypeId": 6,
// "onLeaveContactNo": "1234567",
// "responsiblePersonId": 1,
// "active": true,
// "remarks": null

// useState( {
//     "id": 15,
// "appDate": "",
// "fromDate": "",
// "toDate": "",
// "entry": "USER",
// "reason": "",
// "employeeId": "",
// "leaveTypeId": 6,
// "onLeaveContactNo": "1234567",
// "responsiblePersonId": 1,
// "active": true,
// "remarks": null
// });

 // const setApplications = (val) => {
    //     setEmp({...applications, [val.target.name]: val.target.value})

    //  }