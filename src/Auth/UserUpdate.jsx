
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

function UserUpdate() {

    const [user, setUser] = useState({ code: "", name: "",  email: "",  mobileNo: "", roles:"", active: false })
    const navigator = useNavigate()
    const { id } = useParams()

    // "id": 8,
    // "photo": "img2",
    // "code": "123452",
    // "name": "mashuk2Update",
    // "email": "abc2@gmail.com",
    // "mobileNo": "12345456782",
    // "password": "1234562",
    // "active": true
    useEffect(() => {
        console.log(id)
        if (id == undefined) {

        }
        else{
            axios.get("http://localhost:9092/admin/userApi/"+id).then(res=>{
                setUser(res.data)

            })
        }
    }, [id])

    const upUser = () => {
        
        console.log(user)

        axios.put("http://localhost:9092/admin/userApi/"+id, user).then(res => {
            console.log(res);
            navigator("/user-list", { replace: true });
        }).catch(err => {
            console.log(err)
        })
    }


    const setValue = (val) => {
        setUser({ ...user, [val.target.name]: val.target.value })
    }


    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:"#2c466b12"}}>
                        <h2 className="text-center"style={{color:"#2c466b"}}>Update User</h2>
                        <div className="card-body">
                            <form>

                                <div className="form-group">
                                    <label>Code: </label>
                                    <input
                                        name="code"
                                        placeholder=" Code" className="form-control"
                                        value={user.code} onChange={(e) =>
                                            setValue(e)
                                            //   setUser({...user,code:e.target.value})
                                        } />
                                </div>

                                <div className="form-group">
                                    <label> Name: </label>
                                    <input placeholder="userloyee Name" className="form-control"  name="name"
                                        value={user.name} onChange={(e) =>  setValue(e)} />
                                </div>

                                <div className="form-group">
                                    <label>Email:  </label> 
                                    <input type="email" placeholder="Email" className="form-control" name="email"
                                        value={user.email} onChange={(e) =>  setValue(e)} />
                                </div>

                               
                                <div className="form-group">
                                    <label>Mobile Number: </label>
                                    <input placeholder="Mobile No" className="form-control" name="mobileNo"
                                        value={user.mobileNo} onChange={(e) =>  setValue(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Roles </label>
                                    <input placeholder="roles" className="form-control" name="roles"
                                        value={user.roles} onChange={(e) =>  setValue(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Active: </label>
                                    <input placeholder="Mobile No" className="form-control" name="mobileNo"
                                        value={user.active} onChange={(e) =>  setUser({...user,active:JSON.stringify(e.target.value)})} />
                                </div>


                                

                                {/* submit and cancle button*/}
                                <button className="btn btn-success" onClick={(e)=>{e.preventDefault();upUser()}}>Update</button>
                                {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserUpdate
