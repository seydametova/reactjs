import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { store } from "../../store";
import { toggleCheckbox } from "../../store/profile/actions";
import { selectProfile } from "../../store/profile/selectors";
import "./Profile.scss";

export const Profile = () => {
    
    const state = useSelector(selectProfile);
    const dispatch = useDispatch();

    console.log(state);

    const handleChange = () => {
        dispatch(toggleCheckbox);
    }

    return (
        <>
            <h3 className="Profile-header">PROFILE</h3>
            <input className="Profile-checkbox" type="checkbox" checked={state.checkbox} onChange={handleChange} />
            <span className="Profile-checkbox-name">{state.name}</span>
        </>
    )
}
