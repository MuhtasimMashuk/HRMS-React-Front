import { Outlet } from "react-router"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import Dropdown from 'react-dropdown';
import DropdownButton from 'react-dropdown';


const Dashboard = () => {

    const navigate = useNavigate()

    // useEffect(() => {
    //     if(!localStorage.getItem("isLoggin")){
    //         navigate("/login")
    //     }
    // }, [])

    const onLogout = () => {
        localStorage.removeItem("isLoggin")
        navigate("/login")
    }

    return (
        <>
            <div>
                <nav className="navbar fixed-top  navbar-light" style={{ backgroundColor: "#2c466b" }}>
            {/* <div><a href="http://localhost:3000/" className="navbar-brand">IBCS-HRMS</a></div> */}
            <a class="navbar-brand" href="#">HRMS</a>
                <ul className="nav nav-tabs">

                <Link to="/emp-create" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class ="btn btn-secondary">Employee Create </Link>

                <Link to="/emp-list" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class ="btn btn-secondary">Employee List </Link>
                <Link to="/user-list" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class ="btn btn-secondary">User list</Link>
                <Link to="/department-create" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class ="btn btn-secondary">Department create </Link>
                <Link to="/dep-list" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class ="btn btn-secondary">Department List</Link>

                <Link to="/desg-create" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class ="btn btn-secondary">Designation Create </Link>

                <Link to="/desg-list" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class ="btn btn-secondary">Designation list </Link>
                <Link to="/app-list" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class ="btn btn-secondary">Application list</Link>
                <Link to="/app-type-list" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class ="btn btn-secondary">Application type list</Link>

                <Link to="/login" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class ="btn btn-secondary">login</Link>
                <Link to="/do-application" type ="button" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class ="btn btn-secondary">Apply for leave</Link>
                <Link to="/do-admin-application" type ="button" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class ="btn btn-secondary">Apply for leave from admin</Link>
            {/* <Link to="/do-regi" type="button"style={{backgroundColor:"#266e9e98"}}>registration</Link> */}
                <Link to="/show-report" type ="button" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class ="btn btn-secondary">Report generate 1</Link>
                <button onClick={onLogout} className="btn btn-secondary" style={{ position: "absolute", bottom: "0", right: "0" }}>Logout</button>
                </ul>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                <a class ="dropdown-item waves-effect waves-light" href="#">Action</a>
                <a class ="dropdown-item waves-effect waves-light" href="#">Another action</a>
                <a class ="dropdown-item waves-effect waves-light" href="#">Something else here</a>
                </div>
            {/* <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="dropdown-item" type="button">    <Link to="/emp-create" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">Employee Create </Link></button>
                                <Link to="/emp-list" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">Employee List </Link>
                                <Link to="/user-list" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">User list</Link>
                                <Link to="/department-create" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">Department create </Link>
                                <Link to="/dep-list" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">Department List</Link>

                                <Link to="/desg-create" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">Designation Create </Link>

                                <Link to="/desg-list" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">Designation list </Link>
                                <Link to="/app-list" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">Application list</Link>
                                <Link to="/app-type-list" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">Application type list</Link>

                                <Link to="/login" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">login</Link>
                                <Link to="/do-application" type="button" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">Apply for leave</Link>
                                <Link to="/do-admin-application" type="button" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">Apply for leave from admin</Link>
                                <Link to="/show-report" type="button" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">Report generate 1</Link>
                        </div>
            </div> */}


{/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Link to="/emp-list" style={{ backgroundColor: "#266e9e98", margin: "1px 1px 1px 1px" }} class="btn btn-secondary">Employee List </Link>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
        </nav>
            </div >




            <div style={{ marginTop: "100px", marginBottom: "50px" }}>
                <Outlet />
            </div>

            <div>
                <footer className="footer" style={{ backgroundColor: "#2c466b" }}>
                    <span className="text-muted" >All Rights Reserved 2021 @Ibcs-Primax-Software-Bangladesh</span>
                </footer>
            </div>
        </>
    )

}

export default Dashboard