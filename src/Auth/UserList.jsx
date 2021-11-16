
import axios from 'axios'
import React,{useState,useEffect} from 'react'

import { useNavigate } from 'react-router'



const UserList =() =>{

    const [ users, setUsers ] = useState([])
    const status=useState(false)
    const navigator = useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:9092/admin/userApi/list/")
       .then(
           (e)=>{
               
               setUsers(e.data)
           
               console.log(e.data)
               console.log(users)
           }
       )
       
    },[])


    const onViwe = (id) => {
        console.log(id);
    }

    const onEdit = (id) => {
        navigator(`/user-update/${id}`, {replace: true})
    }

    const onDelete = (id) => {
       
           prompt("Are you sure?")
           // axios.delete("http://localhost:9092/hr/userApi/"+id).then(res=>{setUsers(users.filter(user=>user.id!=id))})
   
   
        
    }

    


    return (
        <div>
             <h2 className="text-center" style ={{color: "#077e82"}}>UserList</h2>
                    <div className="row"> </div>
                   <table className = "table table-striped table-bordered">
                   <thead>
                   <tr>
                                    <th> code</th>
                                    <th> Name</th>
                                    <th>Email</th>
                                    <th>Mobile No</th>
                                    <th>Role</th>
                                    <th>Active Status</th>
                                    
                                    <th>Actions </th>


                                    
                                 
        {/* "photo": "img",
        "code": "12345",
        "name": "mashuk",
        "email": "abc@gmail.com",
        "mobileNo": "1234545678",
        "password": "123456",
        "active": true */}
                    </tr>
                   </thead>

                   <tbody>
                  { 
                   users.map(
                       (user)  =>(
                        <tr key = {user.id}> 
                             <td> {user.code} </td>   
                             <td> {user.name}</td>
                             <td> {user.email}</td>
                             <td> {user.mobileNo}</td>
                             <td> {user.roles}</td>
                             <td> {JSON.stringify(user.active)}</td>
                             

                             
                             
                          
                             <td>
                                 {/* <button onClick={()=>onViwe(user.id)} className={{backgroundCalor: "#000GFH"}}>View</button> */}
                                 <button onClick={()=>onEdit(user.id)} className={{backgroundCalor: "#070GFH"}}>Edit</button>
                                 <button onClick={()=>onDelete(user.id)} className={{backgroundCalor: "#900GFH"}}>Delete</button>
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

export default UserList
