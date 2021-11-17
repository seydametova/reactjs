import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../store";
import { toggleCheckbox } from "../../store/profile/actions";
import "./Profile.scss";

export const Profile = () => {
    // const state = store.getState();
    const state = useSelector(state => state);
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
