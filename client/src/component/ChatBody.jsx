import React from 'react';
import './style.css';

function ChatBody({ messageReceived }) {

    return (
        <div className='messages' data-mdb-perfect-scrollbar="true">
            {/* This is for text I received */}
            {messageReceived.map((item) => {
                return (
                    item.name === localStorage.getItem('userName') ? (
                    <div key={item.id} className='d-flex flex-column align-items-end'>
                        <p className='user-name'>{item.name}</p>
                        <div className='d-flex flex-row'>
                            <p class="small p-2 me-3 mb-3 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>
                                {item.message}
                            </p>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                                alt="avatar 1" style={{ width: '45px', height: '100%' }} />

                        </div>
                    </div>
                ) : (
                    <div key={item.id} className='d-flex flex-column align-items-start'>
                        <p className='user-name'>{item.name}</p>
                        <div className='d-flex flex-row justify-content-start'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                                alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                            <p class="small p-2 ms-3 mb-3 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>
                                {item.message}
                            </p>
                        </div>
                    </div>

                )
                )
            }
                
            )}
            {/* Triggered when a user is typing */}
            {/* <div className="message__status">
                <p>Someone is typing...</p>
            </div> */}
        </div>
    )
}

export default ChatBody