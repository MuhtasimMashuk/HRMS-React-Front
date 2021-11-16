import { Navigate } from "react-router"
import EmpList from "./Employee/EmpList"
import Dashboard from "./Dashboard/Dashboard"
import DeptCreate from "./Dept/DeptCreate"
import DeptList from "./Dept/DeptList"
import EmpCreate from "./Employee/EmpCreate"
import EmpUpdate from "./Employee/EmpUpdate"
import DeptUpdate from "./Dept/DeptUpdate"
import DesgCreate from "./Desg/DesgCreate"
import DesgList from "./Desg/DesgList"
import LeaveAppList from "./LeaveApplication/LeaveAppList"
import LeaveTypeList from "./LeaveType/LeaveTypeList"
import UserList from "./Auth/UserList"
import Login from "./Auth/Login"
import Registration from "./Auth/Registration"
import LeaveAppCreate from "./LeaveApplication/LeaveAppCreate"
import LeaveAppAdminCreate from "./LeaveApplication/LeaveAppAdminCreate"
import NoOne from "./Report/NoOne"
import UserUpdate from "./Auth/UserUpdate"



const route =(params) => [
    {
        path: "/",
        element: params? <Dashboard/> : <Navigate to="/login"/> ,
        children: [
            {
                path: "emp-create",
                element: <EmpCreate/>
            },
            {
                path: "emp-update/:id",
                element: <EmpUpdate/>
            },
            {
                path: "emp-list",
                element: <EmpList/>
            },
            {
                path: "department-create",
                element: <DeptCreate/>
            },
            {
                path: "dep-list",
                element: <DeptList/>
            },
            {
                path: "dep-update/:id",
                element: <DeptUpdate/>
            },
            {
                path: "desg-create",
                element: <DesgCreate/>
            },
            {
                path: "desg-list",
                element: <DesgList/>
            },
            {
                path: "app-list",
                element: <LeaveAppList/>
            },
            {
                path: "app-type-list",
                element: <LeaveTypeList/>
            },
            {
                path: "user-list",
                element: <UserList/>
            },

            {
                path: "do-application", 
                element: <LeaveAppCreate/>
            },
            {
                path: "do-admin-application",
                element: <LeaveAppAdminCreate/>
            },
            {
                path: "show-report",
                element: <NoOne/>   
            },
            {
                path: "user-update/:id",
                element: <UserUpdate/>
            },
            {
                path: "/",
                element: <Navigate to="/emp-list"/>
            }
            
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "do-regi",
        element:<Registration/>
    }
    //,
    // {
    //     path: "/admin",
    //     element:  role === "admin" ? <Registration/> : <Navigate to="/user"/>, // AdminLayout,
    //     children: [

    //     ]
    // },
    // {
    //     path: "/user",
    //     element: <Registration/>, // AdminLayout, 
    //     children: [
    //         {
    //             path: '/no-user',
    //             element: "" //<No User/>
    //         }
    //     ]
    // }
]

export default route