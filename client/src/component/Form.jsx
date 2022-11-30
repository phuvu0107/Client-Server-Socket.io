import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import './style.css';

function Form({socket}) {
    const navigate = useNavigate();
    //room state
    const [room, setRoom] = useState("");
    const [roomText, setRoomText] = useState("")

    //sent message and received message state
    const [messageReceived, setMessageReceived] = useState([]);

    //Handling events
    const joinRoom = () => {
        room !== "" && socket.emit("join_room", room);
        setRoomText(room)
    }

    const leaveRoom = (e) => {
        e.preventDefault();
        setRoom('');
        setRoomText('');
        setMessageReceived([])
        socket.emit('disconnect');
    }

    
    //useEffect
    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived([...messageReceived, data])
        })
    }, [socket, messageReceived])
 
    return (
        <div className='container main-div'>
            {/* Room Input field */}
            <div className="input-group mb-3 room-input-div">
                <input type='number' className='form-control' placeholder='Join your desired room...' value={room} onChange={(event) => {
                    setRoom(event.target.value);
                }} required />
                <button type='button' className='btn btn-warning' onClick={joinRoom}>Join</button>
            </div>
            
            {/* Chat box field */}
            <div className='chat-div'>
                
                <div className='room-header d-flex flex-row justify-content-between align-items-center chatbox-header'>
                    <h5 className='room-num'>Room {roomText}</h5>
                    <button className='quit-room' onClick={leaveRoom}>x</button>
                </div>
                
                <ChatBody socket={socket} messageReceived={messageReceived}/>
                <ChatFooter room={room} socket={socket}/>
            </div>
            
            
            
        </div>
    )
}

export default Form