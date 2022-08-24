//morgan module used to enable logging capabillities for the server
const morgan = require("morgan")

const setupLogging = (app) => {
    app.use(morgan('combined'));
}

exports.setupLogging = setupLogging
