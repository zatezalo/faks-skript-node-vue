const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config');


const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
require('./web.js')(app);

sequelize.sync()
    .then(() => {
        app.listen(8083);
        console.log("Radi port");
    });