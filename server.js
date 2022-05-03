import { WebSocketServer } from 'ws';
import express from 'express';

// Set up normal web server
const app = express()
    .use('/', express.static('./static'));
const server = app.listen(8080);

// Set up Websocket server
const wss = new WebSocketServer({ server });

// When the server receives a new connection...
wss.on('connection', (ws) => {

    console.log('Received new connection');

    // Optionally perform verification, set fields on the `ws` object

    // Register listener for client messages
    ws.on('message', (data) => {
        console.log('received: %s', data);

        ws.send(`You said: '${data}'`);
    });

});