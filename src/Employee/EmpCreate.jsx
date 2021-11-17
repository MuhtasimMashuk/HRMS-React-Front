
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router'
// import { useHistory } from 'react-router-dom'

function EmpCreate() {

     const[emp, setEmp]=useState({code:"",name:"", fatherName: "", dob:"",doj:"",nid:"",email:"",gender:"",mobileNo:"",deptId:"",userId:"",desgId:"", supervisorId:"", active: false })
     const navigator = useNavigate();
    

   

    

     const addEmp=(e)=>{
     e.preventDefault();
    console.log(emp)

        axios.post("http://localhost:9092/hr/api/emp/",emp).then(res=> {
            console.log(res)
            navigator("/emp-list", { replace: true })
        }).catch(err=> {
            console.log(err)
        })
     }
     
     
     
     const setValue = (val) => {
        setEmp({...emp, [val.target.name]: val.target.value})
     }


    return (
        <div>
          <br></br>
                 <div className = "container">
                      <div className = "row">
                          <div className = "card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:"#2c466b12"}}>
                              <h2 className="text-center" style={{color:"#2c466b"}}>Add Employee</h2>
                              <div className = "card-body">
                                  <form>
                                              
                                      <div className = "form-group">
                                          <label>Employeecode: </label>
                                          <input
                                          name="code" 
                                          placeholder="Employee Code"  className="form-control" 
                                              value={emp.code} onChange={(e)=>
                                                setValue(e)
                                            //   setEmp({...emp,code:e.target.value})
                                              }/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Employee Name: </label>
                                          <input placeholder="Employee Name"  className="form-control" 
                                              value={emp.name} onChange={(e)=>setEmp({...emp,name:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Date of Birth: </label>
                                          <input type="date" placeholder="Date of Birth" className="form-control" 
                                              value={emp.dob} onChange={(e)=>setEmp({...emp,dob:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Date of Join </label>
                                          <input type="date" placeholder="Date of Join"  className="form-control" 
                                              value={emp.doj} onChange={(e)=>setEmp({...emp,doj:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Nid Number </label>
                                          <input placeholder="Nid Number"  className="form-control" 
                                              value={emp.nid} onChange={(e)=>setEmp({...emp,nid:e.target.value})}/>
                                      </div>
                                      <div className = "form-group">
                                          <label>Email adress </label>
                                          <input type="email" placeholder="Email"  className="form-control" 
                                              value={emp.email} onChange={(e)=>setEmp({...emp,email:e.target.value})}/>
                                      </div>
                                      
                                      <div className = "form-group">
                                          <label>Gender </label>
                                          <input placeholder="Gender"  className="form-control" 
                                              value={emp.gender} onChange={(e)=>setEmp({...emp,gender:e.target.value})}/>
                                      </div>
                                      <div className = "form-group">
                                          <label>Mobile Number </label>
                                          <input placeholder="Mobile Number"  className="form-control" 
                                              value={emp.mobileNo} onChange={(e)=>setEmp({...emp,mobileNo:e.target.value})}/>
                                      </div>
                                      
                                      <div className = "form-group">
                                          <label>User Id</label>
                                          <input placeholder="User Id"  className="form-control" 
                                              value={emp.userId} onChange={(e)=>setEmp({...emp,userId:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Dept Id</label>
                                          <input placeholder="Dept Id"  className="form-control" 
                                              value={emp.deptId} onChange={(e)=>setEmp({...emp,deptId:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Desg Id</label>
                                          <input placeholder="Desg Id"  className="form-control" 
                                              value={emp.desgId} onChange={(e)=>setEmp({...emp,desgId:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Supervisor Id</label>
                                          <input placeholder="Supervisor Id"  className="form-control" 
                                              value={emp.supervisorId} onChange={(e)=>setEmp({...emp,supervisorId:e.target.value})}/>
                                      </div>

                                                  
                                                  {/* submit and cancle button*/}
                                      <button className="btn btn-success" onClick={addEmp}>Save</button>
                                      {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                                  </form>
                              </div>
                          </div>
                      </div>

                 </div>
      </div>
    )
}

export default EmpCreate
