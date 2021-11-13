import React from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Breadcrumbs } from '@mui/material';
import "./Home.scss"

export const Home = () => {
    return (
        <div className="Home-breadcrumb">
            <Breadcrumbs aria-label="breadcrumb">
                <NavLink style={({isActive}) => ({ textDecoration: 'inherit', color: isActive ? "#4DB6AC" : "#009688" })}
                    to="/profile"
                    underline="hover"
                >
                    Profile
                </NavLink>
                <NavLink style={({isActive}) => ({ textDecoration: 'inherit', color: isActive ? "#4DB6AC" : "#009688" })}
                    to="/chats"
                    underline="hover"
                >
                    Chats
                </NavLink>
            </Breadcrumbs>
        </div>
        
        // <ul>
        //     <li>
        //         <Link to="/profile" >Profile</Link>
        //     </li>
        //     <li>
        //         <Link to="/chats" >Chats</Link>
        //     </li>
        // </ul>
    ) 
}