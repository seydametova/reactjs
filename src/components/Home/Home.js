import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logIn } from "../../services/firebase";
import { SignForm } from "../SignForm/SignForm";
import "./Home.scss";

export const Home = () => {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (email, pass) => {
        setLoading(true)
        try {
           await logIn(email, pass);
        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="Home-container">
                <h3>HOME</h3>
                <SignForm onSubmit={handleSignIn} error={error} loading={loading} />
            </div>
            <div className="Home-container">
                <NavLink style={({isActive}) => ({textDecoration: 'inherit', color: isActive ? "#4DB6AC" : "#009688" })}
                    to="/signup"
                    underline="hover"
                >
                    Sign Up
                </NavLink>
            </div>
            
        </>
    ) 
}