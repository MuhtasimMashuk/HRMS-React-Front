import axios from 'axios'
import React,{useState,useEffect} from 'react'

function DesgList() {
      
    const [ desgs, setDesgs ] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:9092/hr/desgApi/list/")
       .then(
           (e)=>{
               
               setDesgs(e.data)
             
              
           }
       )
       
    },[])



    return (
        <div>
 <h2 className="text-center" style ={{color: "#077e82"}}>Designation List</h2>
                    <div className="row"> </div>
                   <table className = "table table-striped table-bordered">
                   <thead>
                   <tr>
                                   
                                    <th> Designation Name</th>
                                    <th>Action</th>
                                   
                                    
        
                    </tr>
                   </thead>

                   <tbody>
                  { 
                   desgs.map(
                       (desg)  =>(
                        <tr key = {desg.id}> 
                          
                             <td> {desg.name} </td>  
                            
                             <td>
                             {/* {<button onClick={()=>} className="btn btn-info">Update </button> } */}
                             <button style={{marginLeft: "10px"}} onClick={ ()=>{}} className="btn btn-danger">Delete </button>
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

export default DesgList
