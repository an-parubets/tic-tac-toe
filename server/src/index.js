const WebSocket = require('ws');
const { getUnicId } = require('./utilites');

const wsServer = new WebSocket.Server({ port: 8080 });

const connections= [];

wsServer.on('connection', connection => {
    const id = getUnicId();

    connections.push({ id, connection })

    console.log(connection)

    // connection.on('message', message => onMessage(message, id));
    // connection.on('close', () => onClose(connection, id));
});


