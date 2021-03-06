import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumbs } from '@mui/material';
import "./Navigation.scss";

export const Navigation = () => {
    return (
        <div className="Home-breadcrumb">
            <Breadcrumbs aria-label="breadcrumb">
                <NavLink style={({isActive}) => ({ textDecoration: 'inherit', color: isActive ? "#4DB6AC" : "#009688" })}
                    to="/"
                    underline="hover"
                >
                    Home
                </NavLink>
                <NavLink style={({isActive}) => ({ textDecoration: 'inherit', color: isActive ? "#4DB6AC" : "#009688" })}
                    to="/profile"
                    underline="hover"
                >
                    Profile
                </NavLink>
                <NavLink style={({isActive}) => ({ textDecoration: 'inherit', color: isActive ? "#4DB6AC" : "#009688" })}
                    to="/articles"
                    underline="hover"
                >
                    Articles
                </NavLink>
                <NavLink style={({isActive}) => ({ textDecoration: 'inherit', color: isActive ? "#4DB6AC" : "#009688" })}
                    to="/chats"
                    underline="hover"
                >
                    Chats
                </NavLink>
            </Breadcrumbs>
        </div>
    ) 
}