import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import React, { useRef, useState } from 'react';
import './Form.scss'

export const Form = ({onMessageSend}) => {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value) {
            onMessageSend(value);
        };

        inputRef.current?.focus();

        setValue('');
    }

    return (
        <form onSubmit={handleSubmit} className="Message-form">
            <TextField
                id="standard-basic"
                label="Message"
                variant="standard" 
                value={value}
                color="primary"
                onChange={handleChange}
                inputRef={inputRef}
                className="Text-field"
                autoFocus
            />
            <Button
                type="submit"
                variant="outlined"
                color="primary"
            >Send</Button>
        </form>
    )
}
