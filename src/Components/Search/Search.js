import React, { useState } from "react";
import { users } from '../Data/users';

export default function Search() {
    const [userInput, setUserInput] = useState('');
    const [usersArray, setUsersArray] = useState(users);

    function handleInput(e) {
        setUserInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
       
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(userInput.toLowerCase()));

        setUsersArray(filteredUsers);
    }

    return (
        <div className="search-container container">
            <div className="search">
                <div className="search-header">
                    <p className='search-title'>Search For Friends</p>
                    
                    <form className="search-input-container" onSubmit={handleSubmit}>
                        <input type='text' placeholder="Type here" value={userInput} onChange={handleInput} />

                        <button className="search-btn"><p>Search</p></button>
                    </form>
                </div>

                <div className="friends-container">
                    {usersArray.map(user => {
                        return (
                        <div className="friend" key={user.name}>
                            <div className="user">
                                <span>{user.name.slice(0, 1)}</span>
                                <p>{user.name}</p>
                            </div>

                            <div className="details">
                                <p className="job-title"><i>{user.position}</i></p>
                                <p><i>Age: {user.age}</i></p>
                            </div>

                            <div className="bio">
                                <p>{user.bio}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}