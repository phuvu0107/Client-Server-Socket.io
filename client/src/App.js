import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './component/Form';
import Header from './component/Header';
import Home from './component/Home';
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:3001');

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home socket={socket}/>}/>
          <Route path='/chat' element={<Form socket={socket}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
