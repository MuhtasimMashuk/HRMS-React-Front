
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router'


function DeptCreate() {
 
   const[obj,setObj]=useState({name:"",code:"",headOfId:"" ,active:false});

   const navigate=useNavigate();


   const addDepartment= (e)=>{
        e.preventDefault();
   
       axios.post("http://localhost:9092/hr/api/dept/",obj).then( res=>{
        console.log('department => ' + JSON.stringify(obj));
        navigate("/dep-list");
       }
       

       )
   }


  return (
      <div>
          <br></br>
                 <div className = "container">
                      <div className = "row">
                          <div className = "card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:"#2c466b12"}}>
                              <h2 className="text-center" style={{color:"#2c466b"}}>Add Department</h2>
                              <div className = "card-body">
                                  <form>
                                              
                                      <div className = "form-group">
                                          <label>Department Name: </label>
                                          <input placeholder="Department Name" name="departmentName" className="form-control" 
                                              value={obj.name} onChange={(e)=>setObj({...obj,name:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Department code: </label>
                                          <input placeholder="Department code" name="departmentCode" className="form-control" 
                                              value={obj.code} onChange={(e)=>setObj({...obj,code:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Department Head: </label>
                                          <input placeholder="Department Head" name="departmentHead" className="form-control" 
                                              value={obj.headOfId} onChange={(e)=>setObj({...obj,headOfId:e.target.value})}/>
                                      </div>

                                           
                                      { <div className = "form-check">
                                          
                                          <input type="checkbox"  name="deptStatus"  className="form-check-input" 
                                              onChange={(e)=>setObj({...obj,active:e.target.checked})}/>
                                              <label  className="form-check-label"> Active Status </label>
                                      </div> }

                                       
                                                  
                                                  {/* submit and cancle button*/}
                                      <button className="btn btn-success" onClick={addDepartment}>Save</button>
                                      {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                                  </form>
                              </div>
                          </div>
                      </div>

                 </div>
      </div>
  )
}

export default DeptCreate
