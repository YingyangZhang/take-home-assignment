import React from "react";
import character from './Images/character.png';
import { conversations } from '../Data/conversations';
import { notifications } from '../Data/notifications'
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="main">
            <div className="welcome-conatiner">
                <p><i>Hey, Ethan</i></p>
                <h1><i>Welcome Back</i></h1>

                <div className="img-container">
                    <img src={character} alt="image" />
                </div>
            </div>

            <div className="notifications-container">
                <p className="title">Notifications</p>
                
                {notifications.map(noti => {
                    return (
                        <div className="notification" key={noti.id}>
                            <p className="date">{noti.timestamp.slice(0, 10)}</p>
                            
                            <div className="notification-objects">
                                <p className="notification-text">{noti.message}</p>

                                {noti.isRead ? 
                                    <div className="read">
                                        <i className='bx bx-check'></i>
                                        <p>Read</p>
                                    </div>
                                    :
                                    <div className="unread">
                                        <p>Unread</p>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })}

                <div className="gradient"></div>
            </div>

            <div className="messages-container">
                <p className="title">Messages</p>

                {conversations.map((conv, index) => {
                    return (
                        <div className="message" key={index} onClick={() => navigate(`/${conv.participants[1].replace(/\s/g, "")}`)}>
                            <p className="message-text">{conv.messages[conv.messages.length - 1].content}</p>

                            <div className="message-objects">
                                <div className="user">
                                    <span>{conv.messages[conv.messages.length - 1].sender.slice(0,1)}</span>
                                    <p>{conv.messages[conv.messages.length - 1].sender}</p>
                                </div>

                                <div className="time">11:20</div>
                                </div>
                        </div>
                    )
                })}

                <div className="gradient"></div>
            </div>
        </div>
    )
}