const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET', 'POST']
    }
})

//listen to the event from client: when a user is connected
io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`)

    //Listen to event name "join_room" to take data sent from client
    socket.on('join_room', (data) => {
        socket.join(data);
    })
    //Listen to event name "send_message" to take data sent from client
    socket.on('send_message', (data) => {
        //Broadcast is used to send to everyone including the sender
        io.to(data.room).emit("receive_message", data);
    })

    //A user disconnect
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected')
    })
})

server.listen(3001, () => console.log("Server is running on port 3001")); 