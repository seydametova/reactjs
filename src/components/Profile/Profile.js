import { Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../services/firebase";
import { toggleCheckbox } from "../../store/profile/actions";
import { selectProfile } from "../../store/profile/selectors";
import "./Profile.scss";

export const Profile = () => {
    
    const state = useSelector(selectProfile);
    const dispatch = useDispatch();

    console.log(state);

    const handleChange = () => {
        dispatch(toggleCheckbox);
    };

    const handleLogOutClick = async() => {
        try {
           await logOut();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="Profile-container">
                <h3 className="Profile-header">PROFILE</h3>
                <div className="Profile-checkbox-name">
                    <input className="Profile-checkbox" type="checkbox" checked={state.checkbox} onChange={handleChange} />
                    <span className="Profile-name">{state.name}</span>
                </div>
                
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    onClick={handleLogOutClick}
                >
                    Sign out
                </Button>
            </div>
            
        </>
    )
}
