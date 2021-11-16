import React, {useState, useEff} from "react"





function AttenEntry(){

      const [attn,setAtten]=useState({ })



    return<>
    <div>

    <div className = "container">
                      <div className = "row">
                          <div className = "card col-md-6 offset-md-3 offset-md-3"style={{backgroundColor:"#2c466b12"}}>
                              <h2 className="text-center"  style={{color:"#2c466b"}}>Registration</h2>
                              <div className = "card-body">
                                  <form>
                                              
                                      <div className = "form-group">
                                          <label style={{color:"#2c466b"}}>Employee Code:</label>
                                          <input
                                          name="code" 
                                          placeholder="Employee Code"  className="form-control" 
                                              value={regi.code} onChange={(e)=>
                                                   setRegi({...regi,code:e.target.value})
                                              }/>
                                      </div>

                                      <div className = "form-group">
                                          <label style={{color:"#2c466b"}}>Employee Name: </label>
                                          <input placeholder=" Name"  className="form-control" 
                                              value={regi.name} onChange={(e)=>setRegi({...regi,name:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label style={{color:"#2c466b"}}>Email: </label>
                                          <input type="email" placeholder="Email" className="form-control" 
                                              value={regi.email} onChange={(e)=>setRegi({...regi,email:e.target.value})}/>
                                      </div>
                                      <div className = "form-group">
                                          <label style={{color:"#2c466b"}}>Mobile: </label>
                                          <input  placeholder="Mobile" className="form-control" 
                                              value={regi.mobileNo} onChange={(e)=>setRegi({...regi,mobileNo:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label style={{color:"#2c466b"}}>Password: </label>
                                          <input type="password" placeholder="Password"  className="form-control" 
                                              value={regi.password} onChange={(e)=>setRegi({...regi,password:e.target.value})}/>
                                      </div>

                                      <div className = "form-group">
                                          <label style={{color:"#2c466b"}}>Re-Type Password: </label>
                                          <input type="password" placeholder="Re-Type password"  className="form-control" 
                                              value={regi.matchPassword} onChange={(e)=>setRegi({...regi,matchPassword:e.target.value})}/>
                                      </div>
                                   
                                      
                                           
                                                  {/* submit and cancle button*/}
                                      <button className="btn btn-warning" onClick={e=>{e.preventDefault() ;doRegi()}}>Submit</button>
                                      <button className="btn btn-info"style={{marginLeft: "10px"}} onClick={e=>{navigate("/login",{replace:true})}}>back</button>
                                      {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                                  </form>
                              </div>
                          </div>
                      </div>

                 </div>



    </div>
    </>






}

export default AttenEntry;