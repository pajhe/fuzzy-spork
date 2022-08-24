//"import" modules

const express = require("express")
const {setupLogging} = require("./logging");

//define variables
const app = express()
const port = 8000;

//call setupLogging from logging.js
setupLogging(app);

app.get('/hello', (req, resp) => {
    return resp.send('HELLO WORLD!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})