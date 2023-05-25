import React from "react";
import character from './Images/character.png';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="welcome-conatiner">
                <p>Hey, Ethan</p>
                <h1>Wwelcome Back.</h1>

                <div className="img-container">
                    <img src={character} alt="image" />
                </div>
            </div>

            <div className="notifications-container">
                <p className="title">Notifications</p>

                <div className="notification">
                    <p className="date">2023-05-19</p>
                    
                    <div className="notification-objects">
                        <p className="notification-text">You have a new message from John Smith</p>
                        <div className="unread">
                            <p>Unread</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="messages container">
                <p className="title">Messages</p>

                <div className="message">
                    <p className="message-text">Perfect! I'll send you a calendar invite. Thanks, Emily!</p>

                    <div className="message-objects">
                        <div className="user">
                            <span>E</span>
                            <p>Emily Johnson</p>
                        </div>

                        <div className="time">11:20</div>
                    </div>
                </div>
            </div>
        </div>
    )
}