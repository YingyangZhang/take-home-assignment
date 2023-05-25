import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { conversations } from '../Data/conversations';

export default function Conversations() {
    const name = useParams();
    const [conversation, setConversation] = useState(conversations.find(conv => conv.participants.find(participant => participant.replace(/\s/g, "").includes(name.name))));
    const chatBoxRef = useRef(null);

    useEffect(() => {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }, []);

    function handleClick(name) {
        setConversation(conversations.find(conv => conv.participants.includes(name)));
    }

    return (
        <div className="main">
            <div className="list-container">
                <p className="small-title"> List of Conversations </p>

                {conversations.map(conv => {
                    return (
                        <div className="list-user-container" onClick={() => handleClick(conv.participants[1])}>
                            <div className="user">
                                <span>{conv.participants[1].slice(0, 1)}</span>
                                <p>{conv.participants[1]}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="conversation-container">
                <div className="title">Conversation <span>with {conversation.participants[1]}</span></div>

                <div className="conversation" ref={chatBoxRef}>
                    {conversation.messages.map(message => {
                        return (
                            message.sender === 'Ethan Anderson' ?
                                <div className="message-container-right">
                                    <div className="user">
                                        <span>{message.sender.slice(0, 1)}</span>
                                        <p>{message.sender}</p>
                                    </div>

                                    <p className="content-right">
                                        {message.content}
                                    </p>
                                </div>
                                :
                                <div className="message-container-left">
                                    <div className="user">
                                        <span>{message.sender.slice(0, 1)}</span>
                                        <p>{message.sender}</p>
                                    </div>

                                    <p className="content-left">
                                        {message.content}
                                    </p>
                                </div>
                        )
                    })}
                </div>

                <div className="user-input-container">
                    <input type='text' placeholder="Type here" />

                    <div className="send-btn"><p>Send</p></div>
                </div>
            </div>
        </div>
    )
}