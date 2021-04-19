const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const workersRoute = require('./Routes/workerRoutes')
const roomsRoute = require('./Routes/roomRoutes')
const port = 8005
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/workers',workersRoute);
app.use('/api/rooms',roomsRoute);

app.listen( port , () => {
    console.log('App runs at port '+ port)
})