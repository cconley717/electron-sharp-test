const http = require('http');
const express = require('express');
const sharp = require('sharp');

const app = express();

const httpServer = http.createServer(app);

httpServer.listen(8080, function() {
    console.log('server is listening on port 8080');
});

app.get('/', (req, res) => {
    res.send('electron sharp test');
});