let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('User connected...');

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })

    socket.on('add-message', (message, username) => {
        io.emit('message', {type:'new-message', text: message, username: username})
    })

})


http.listen(8000, () => {
    console.log('server run on port 8000')
})