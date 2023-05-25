import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { conversations } from '../Data/conversations';

export default function Conversations() {
    const name = useParams();
    const [conversation, setConversation] = useState(conversations.find(conv => conv.participants.find(participant => participant.replace(/\s/g, "").includes(name.name))));
    
    console.log(conversation)

    return (
        <div className="main">
            <div className="list-container">
                <p className="small-title"> List of Conversations </p>

                {conversations.map(conv => {
                    return (
                        <div className="list-user-container">
                            <div className="user">
                                <span>{conv.participants[1].slice(0, 1)}</span>
                                <p>{conv.participants[1]}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="conversation-container">
                <div className="title">Conversation <span>with Emily Johnson</span></div>
            </div>
        </div>
    )
}