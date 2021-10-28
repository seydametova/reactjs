import React from 'react';
import './Message.scss';

export const Message = ({message, onMessageClick}) => {
    return (
        <h3 className="Message-header" onClick={onMessageClick}>
            {message}
        </h3>
    );
    
}