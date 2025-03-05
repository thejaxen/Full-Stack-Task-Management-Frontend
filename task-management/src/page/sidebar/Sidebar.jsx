import React, { useState } from "react";
import {Avatar, Button} from "@mui/material";
import "./Sidebar.css";
import CreateNewTaskForm from "../task/CreateNewTaskForm";
import {useLocation} from "react-router-dom";

const menu = [
    { name: "Home", value: "HOME", role: ["ROLE_ADMIN", "ROLE_USER"] },
    { name: "DONE", value: "DONE", role: ["ROLE_ADMIN", "ROLE_USER"] },
    { name: "ASSIGNED", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
    { name: "NOT ASSIGNED", value: "PENDING", role: ["ROLE_ADMIN"] },
    { name: "Create New Task", value: "", role: ["ROLE_ADMIN"] },
    { name: "Notification", value: "Notification", role: ["ROLE_USER"] },
];

const role = "ROLE_ADMIN";

export const Sidebar = () => {

    const location = useLocation();

    const [activeMenu, setActiveMenu] = useState("Home");
    const[openCreateTaskForm,setOpenCreateTaskForm] = useState(false);
    const handleCloseCreateTaskForm=()=>{
        setOpenCreateTaskForm(false);}
    const handleOpenCreateTaskModel=()=>{
        setOpenCreateTaskForm(true);};

    const handleMenuChange=(item)=>{

        if(item.name==="Create New Task"){
           handleOpenCreateTaskModel()
        }
        setActiveMenu(item.name)
    }
    const handleLogout =()=>{
        console.log("Handle logout.")
    }

    return (
        <>
            <div className="card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
                <div className="space-y-5">
                    {/* Avatar */}
                    <div className="flex justify-center">
                        <Avatar
                            sx={{width: "8rem", height: "8rem"}}
                            className="border-2 border-[#143D70]"
                        >
                            C
                        </Avatar>
                    </div>
                    {menu
                        .filter((item) => item.role.includes(role))
                        .map((item) => (
                            <p
                                onClick={() => handleMenuChange(item)}
                                key={item.value}
                                className={`py-3 px-5 rounded-full text-center cursor-pointer ${
                                    activeMenu === item.name ? "activeMenuItem" : "menuItem"
                                }`}
                            >
                                {item.name}
                            </p>
                        ))}
                    <Button onClick={handleLogout} sx={{padding: ".7rem", borderRadius: "2rem"}} fullWidth
                            className='logoutButton'>
                        Logout
                    </Button>
                </div>
            </div>
            <CreateNewTaskForm open={openCreateTaskForm} handleClose={handleCloseCreateTaskForm}/>
        </>
    );
};

export default Sidebar;
