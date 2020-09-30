export const




const WebSocket = require('ws');
const wsServer = new WebSocket.Server({ port: 8080 });

let connections = [];

wsServer.on('connection', connection => {
    const id = getUnicId();

    sendConnectionId(connection, id);
    connections.push({ id, connection })

    connection.on('message', message => onMessage(message, id));
    connection.on('close', () => onClose(connection, id));
});

const onMessage = (message, messageId) => {
    connections.forEach(({connection, id}) => {
        if (messageId !== id) {
            console.log(message)
            sendMessage(connection, message)
        }
    })
}

const onClose = (connection, closeId) => {
    console.log('On Close');
    connections = connections.filter(({ id }) => id !== closeId);

    sendMessage(connection, `User ${closeId} leave chat`)
}

const getUnicId = () => +new Date();

const sendConnectionId = (connection, id) => {
    const data = JSON.stringify({ type: 'connection', data: id });
    connection.send(data);
}

const sendMessage = (connection, message) => {
    connection.send(message);
}
