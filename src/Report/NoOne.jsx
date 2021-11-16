import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom"

function NoOne() {
        
    const [name, setName]=useState("");
    const[format, setFormat]=useState("");
    const[id, setId]=useState("");
    const navigator= useNavigate();

  //  const[params, setParams]=useState({P_depId:1});

    const getReport=()=>{
        
        const data={
            name:name,
            format:format,
            params: {P_depId:parseInt(id)}
        }

        console.log(data)
        
        axios.post("http://localhost:9092/hr/reportApi/report", data,  { responseType: 'blob' })
        .then(res=> {
            saveByteArray("employee", res.data)
        }).catch(err=> {
            console.log(err)
        })
    }

    function saveByteArray(reportName, byte) {
        var blob = new Blob([byte], {type: "application/pdf"});
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        var fileName = reportName;
        link.download = fileName;
        link.click();
    };
//    .subscrib(blob => {
    //     window.open(window.URL.createObjectURL(blob));})

    return (
        <div>
             <div>
          <br></br>
                 <div className = "container">
                      <div className = "row">
                          <div className = "card col-md-6 offset-md-3 offset-md-3"style={{backgroundColor:"#2c466b12"}}>
                              <h2 className="text-center" style={{color:"#2c466b"}}>Report Downloader</h2>
                              <div className = "card-body">
                                  <form>
                                      <div className = "form-group">
                                          <label>Report Name: </label>
                                          <input placeholder="Report Name" name="reportName" className="form-control" 
                                              value={name} onChange={(e)=>setName(e.target.value)}/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Format: </label>
                                          <input placeholder="Format" name="format" className="form-control" 
                                              value={format} onChange={(e)=>setFormat(e.target.value)}/>
                                      </div>

                                      <div className = "form-group">
                                          <label>Department Id: </label>
                                          <input placeholder="Department Id" name="departmentId" className="form-control" 
                                              value={id} onChange={(e)=>setId(e.target.value)}/>
                                      </div>

                                           
                                     

                                       
                                                  
                                                  {/* submit and cancle button*/}
                                      <button className="btn btn-info" onClick={(e)=>{
                                          e.preventDefault()
                                          getReport()}}>Download</button>
                                      {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                                  </form>
                              </div>
                          </div>
                      </div>

                 </div>
      </div>
            
        </div>
    )
}

export default NoOne
