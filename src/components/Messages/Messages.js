import React from "react";
import "./Messages.scss";

export const Messages = ({messages}) => {
    return (
        <div className="Messages">
          {messages?.map((message) => <div key={message.id}>{message.author}: {message.text}</div>)}
        </div>
    )
}