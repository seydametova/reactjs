import { NavLink } from "react-router-dom";
import { SignForm } from "../SignForm/SignForm";
import { signUp } from "../../services/firebase";
import "./SignUp.scss";
import { useState } from "react";

export const SignUp = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignUp = async (email, pass) => {
        setLoading(true);
        try {
           await signUp(email, pass);
        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false)
        }
    };
    
    return (
        <>
            <div className="Sign-up-form">
                <SignForm onSubmit={handleSignUp} error={error} loading={loading} />
            </div>
            <div className="Sign-up-form">
                <NavLink style={({isActive}) => ({textDecoration: 'inherit', color: isActive ? "#4DB6AC" : "#009688" })}
                    to="/"
                    underline="hover"
                >
                    Sign In
                </NavLink>
            </div>
        </>
    );
};