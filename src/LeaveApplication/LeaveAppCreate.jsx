
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router'
// import { useHistory } from 'react-router-dom'

function LeaveAppCreate() {

     const[apply, setApply]=useState({appDate:"", fromDate:"", toDate: "", entry:"USER",reason:"",employeeId:"",leaveTypeId:"",onLeaveContactNo:"",responsiblePersonId:"",remarks:"", active: false })
     const navigator = useNavigate();
    

    //  private LocalDate appDate;

    //  private LocalDate fromDate;
 
    //  private LocalDate toDate;
 
    //  private EntryType entry;
 
    //  private String reason;
 
    //  private Long employeeId;
 
    //  private Long leaveTypeId; //object to long
 
    //  private String onLeaveContactNo;
 
    //  private Long responsiblePersonId;
 
    //  private boolean active;
 
    //  private String remarks;

    

     const doneApply=(e)=>{
     e.preventDefault();
    console.log(apply)

        axios.post("http://localhost:9092/leave/leaveAppApi/create/",apply).then(res=> {
            console.log(res)
            navigator("/app-list", { replace: true })
        }).catch(err=> {
            console.log(err)
        })
     }
     
     
     
     const setValue = (val) => {
        setApply({...apply, [val.target.name]: val.target.value})
     }


    return (
        <div>
          <br></br>
                 <div className = "container">
                      <div className = "row">
                          <div className = "card col-md-6 offset-md-3 offset-md-3">
                              <h2 className="text-center">Apply for Leave</h2>
                              <div className = "card-body">
                                  <form>
                                              
                                      <div className = "form-group">
                                          <label>Application Date: </label>
                                          <input type="date" name="appDate" placeholder="Appltcation date"  className="form-control" 
                                              value={apply.appDate} onChange={(e)=>setValue(e)}/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Leave From Date: </label>
                                          <input type="date" placeholder="LaveFrom date"  className="form-control" 
                                              value={apply.fromDate} onChange={(e)=>setApply({...apply, fromDate:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Leave upto date: </label>
                                          <input type="date" placeholder="date of birth" className="form-control" 
                                              value={apply.toDate} onChange={(e)=>setApply({...apply,toDate:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Reason of leave </label>
                                          <textarea name="reason"placeholder="Reason"  className="form-control" 
                                              value={apply.reason} onChange={(e)=>setApply({...apply,reason:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label> Employee Id </label>
                                          <input placeholder="employee id"  className="form-control" 
                                              value={apply.employeeId} onChange={(e)=>setApply({...apply,employeeId:e.target.value})}/>
                                      </div>
                                      <div className = "form-group">
                                          <label>Email adress </label>
                                          <input  placeholder="leaveTypeId"  className="form-control" 
                                              value={apply.leaveTypeId} onChange={(e)=>setApply({...apply,leaveTypeId:e.target.value})}/>
                                      </div>
                                      
                                      <div className = "form-group">
                                          <label>On leave Contact umber </label>
                                          <input placeholder="On Leave Contact No"  className="form-control" 
                                              value={apply.onLeaveContactNo} onChange={(e)=>setApply({...apply,onLeaveContactNo:e.target.value})}/>
                                      </div>
                                      <div className = "form-group">
                                          <label>Responsible </label>
                                          <input placeholder="Responsible Person id"  className="form-control" 
                                              value={apply.responsiblePersonId} onChange={(e)=>setApply({...apply,responsiblePersonId:e.target.value})}/>
                                      </div>
                                      
                                      <div className = "form-group">
                                          <label>Remarks</label>
                                          <input placeholder="Remarks"  className="form-control" 
                                              value={apply.remarks} onChange={(e)=>setApply({...apply,remarks:e.target.value})}/>
                                      </div>

                                            
                                                  {/* submit and cancle button*/}
                                      <button className="btn btn-success" onClick={doneApply}>Save</button>
                                      {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                                  </form>
                              </div>
                          </div>
                      </div>

                 </div>
      </div>
    )
}

export default LeaveAppCreate
