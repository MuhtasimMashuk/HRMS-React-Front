import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router'


function DeptList() {

    const [ depts, setDepts ] = useState([]);
    const navigate= useNavigate();
    
 
    useEffect(()=>{
        
        axios.get("http://localhost:9092/hr/deptApi/list/")
       .then(
           (e)=>{
               
               setDepts(e.data)
             
              
           }
       )
       
    },[])

     
    function deleteDep(id){
       axios.delete("http://localhost:9092/hr/deptApi/"+id).then( e=> {setDepts( depts.filter(department => department.id !== id))})

    }
   

    const onViwe = (id) => {
        console.log(id);
    }

    const onEdit = (id) => {
        
        navigate(`/dep-update/${id}`, {replace: true})
        
    }

    const onDelete = (id) => {

       
        axios.delete("http://localhost:9092/hr/deptApi/"+id).then( e=> {setDepts( depts.filter(department => department.id !== id))})
   
   
        
    }
    return (
        <div>
            
    
                    <h2 className="text-center" style ={{color: "#077e82"}}>Depts List</h2>
                    <div className="row"> </div>
                   <table className = "table table-striped table-bordered">
                   <thead>
                   <tr>
                                    <th> Department code</th>
                                    <th> Department Name</th>
                                    <th> Department head</th>
                                    <th> Actions </th>
                                    
        
                    </tr>
                   </thead>

                   <tbody>
                  { 
                   depts.map(
                       (dept)  =>(
                        <tr key = {dept.id}> 
                             <td> {dept.code} </td> 
                             <td> {dept.name} </td>  
                             <td> {dept.headOfId}</td>
                             <td>
                             <button onClick={(e)=> {e.preventDefault(); onEdit(dept.id)}} className="btn btn-info">Edit </button> 
                             <button style={{marginLeft: "10px"}} onClick={ ()=>{deleteDep(dept.id)}} className="btn btn-danger">Delete </button>
                             <button style={{marginLeft: "10px"}} onClick={()=>{} } className="btn btn-info">View </button>
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

export default DeptList
