const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
var cors = require('cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Health check OK!"});
});

require('./app/routes/person.routes.js')(app);

const apiPort = process.env.NODE_ENV == 'development' ? 9090 : 80;
// listen for requests
app.listen(apiPort, () => {
    console.log(`Server is listening on port ${apiPort}`);
});