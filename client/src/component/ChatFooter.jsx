import React, { useState, useEffect } from 'react';
import './style.css';

function ChatFooter({ socket, room }) {
    
    const [message, setMessage] = useState('');

    const sendMessage = (e) => {
        //send a "send_message" event to the back end
        e.preventDefault();
        if (message.trim() && localStorage.getItem('userName')){
            socket.emit("send_message", { 
                message: message,
                room: room,
                name: localStorage.getItem('userName'),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id
            })
        }
        setMessage('');
    }
    return (
        <form
            className="input-group mb-3 input-message"
            onSubmit={(e) => {
                if (room === "") {
                    alert('Join a room before sending messages!')
                } else {
                    sendMessage(e);
                }
            }}
        >
            <input type='text' className='form-control' placeholder='Type message...' value={message} onChange={(event) => {
                setMessage(event.target.value);
            }} />
            <button
                className='btn btn-warning'
            >
                Send
            </button>
        </form>
    )
}

export default ChatFooter