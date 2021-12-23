const http = require('http');
const path = require('path');

const express = require('express'); //Express
const app = express(); //Guarda las funciones express
const server = http.createServer(app);

const socketio = require('socket.io'); //Conexion tiempo real
const io = socketio(server); //Actualizado

// Settings
app.set('port', process.env.PORT || 3000);

require('./sockets')(io);

//Public
app.use(express.static(path.join(__dirname, 'public')));

//Puerto que inicializa el servidor
server.listen(app.get('port'), () => {
    console.log('Server working on port ', app.get('port'));
});