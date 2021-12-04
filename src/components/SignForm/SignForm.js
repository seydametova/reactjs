import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./SignForm.scss";

export const SignForm = ({ onSubmit, error, loading }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePass = (e) => {
        setPass(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(email, pass);
        setEmail('');
        setPass('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="Sign-form-fields">
                <TextField
                    type="text"
                    label="Введите свой email"
                    value={email}
                    onChange={handleChangeEmail}
                    className="Text-form-fields">
                </TextField>
                <TextField
                    type="password"
                    label="Введите пароль"
                    value={pass}
                    onChange={handleChangePass}
                    className="Text-form-fields">
                </TextField>
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    disabled={loading}
                >
                    Submit
                </Button>
            </form>
            {error && <h4>{error}</h4>}
        </>
    );
};