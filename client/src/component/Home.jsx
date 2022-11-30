import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

function Home() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);
        navigate('/chat');
    };
    return (
        <form style={{backgroundColor: "#fff" }} className="container main-div home__container" onSubmit={handleSubmit}>
            <h2 className="home__header">Sign in to Open Chat</h2>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                minLength={6}
                name="username"
                id="username"
                className="username__input"
                placeholder='Enter your username...'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button className="btn btn-warning">SIGN IN</button>
        </form>
    );
}

export default Home