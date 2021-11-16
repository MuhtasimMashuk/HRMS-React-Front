
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
// import { useHistory } from 'react-router-dom'

function Login() {

    const [login, setLogin] = useState({ loginId:"", password:"" })
    //const[response, setResponse]=useState()
    const navigator = useNavigate();

    // useEffect(() => {
    //     if(localStorage.getItem("isLoggin")){
    //         navigator("/do-Application", { replace: true })
    //     }
    // }, [])



    const doLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9092/admin/auth/login", login).then(res => { 
            //setResponse(res.data)
            console.log(res.data)

            if(res.data.status=="SUCCESS")
            {
                localStorage.setItem("isLoggin", true)
                navigator("/do-Application", { replace: true })
            }
            else{
                localStorage.setItem("isLoggin", true)//true for test only, it will be false
                navigator("/do-Application", { replace: true })// this line for prectice
            }
            
        }).catch(err => {
            localStorage.setItem("isLoggin", true)
            navigator("/do-Application", { replace: true })// this line for prectice
            console.log(err)
        })
    }
 const goForRegi=(e)=>{
    e.preventDefault();
    navigator("/do-regi", { replace: true })


 }


    return (
        <div>
            <nav className="navbar navbar-light" style={{backgroundColor:"#2c466b"}}>
            <div className="navbar-brand" style={{marginLeft: "10px", color:"#cde0fa" }}  >WELCOME TO IBCS HRMS</div>
</nav>
          
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3"  style={{backgroundColor:"#2c466b12"}}>
                        <h2 className="text-center" style={{color:"#2c466b"}}>Login</h2>
                        <div className="card-body">
                            <form>

                                <div className="form-group">
                                    <label style={{color:"#2c466b"}}>Login Id: </label>
                                    <input
                                        name="code"
                                        placeholder="Employee code/ User Id/ Email" className="form-control"
                                        value={login.loginId} onChange={(e) =>

                                            setLogin({ ...login, loginId: e.target.value })
                                        } />
                                </div>

                                <div className="form-group">
                                    <label>Password: </label>
                                    <input name="code" type="password" placeholder="password" className="form-control"
                                        value={login.password} onChange={(e) =>

                                            setLogin({ ...login, password: e.target.value })
                                        } />
                                </div>


                                {/* submit and cancle button*/}
                                <button className="btn btn-success" onClick={doLogin}>Login</button>
                                <button className="btn btn-info" style={{marginLeft: "10px"}} onClick={goForRegi}>Registration</button>
                                

                                
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <footer className = "footer" style={{backgroundColor:"#2c466b"}}>
                    <span className="text-muted" >All Rights Reserved 2021 @Ibcs-Primax-Software-Bangladesh</span>
                </footer>
            </div>
        </div>
    )
}

export default Login
