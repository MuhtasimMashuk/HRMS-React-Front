import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router'

function DesgCreate() {
 
   const[desg,setDesg]=useState({name:"",active:false});
   const navigate=useNavigate();
   

const onSave=(e)=>{
e.preventDefault()
     
       axios.post("http://localhost:9092/hr/desgApi/",desg).then(res=>{
           navigate("/Desg-list",{replace:true});

       }
       

       )
   }


  return (
      <div>
          <br></br>
                 <div className = "container">
                      <div className = "row">
                          <div className = "card col-md-6 offset-md-3 offset-md-3">
                              <h2 className="text-center">Add Designation</h2>
                              <div className = "card-body">
                                  <form>
                                              
                                      <div className = "form-group">
                                          <label>Designation Name: </label>
                                          <input placeholder="Desgname" name="desgname" className="form-control" 
                                              value={desg.name} onChange={(e)=>setDesg({...desg,name:e.target.value})}/>
                                      </div>
 
                                     <div className = "form-check">
                                          
                                          <input type="checkbox"  name="desgStatus"  className="form-check-input" 
                                              onChange={(e)=>setDesg({...desg,active:e.target.checked})}/>
                                              <label  className="form-check-label"> Active Status </label>
                                          
                                      </div> 

                                       
                                                  
                                                  {/* submit and cancle button*/}
                                      <button className="btn btn-success" onClick={onSave}>Save</button>
                                      {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                                  </form>
                              </div>
                          </div>
                      </div>

                 </div>
      </div>
  )
}

export default DesgCreate
