import React, { useState } from 'react';

export const Form = ({onMessageSend}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.elements["text"].value) {
            onMessageSend(e.target.elements["text"].value);
        };

        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="text" value={value} onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}
