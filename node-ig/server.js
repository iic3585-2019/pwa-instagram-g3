require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./helpers/db');
const routes = require('./routes');
const jwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
const logErrors = require('./helpers/logErrors');

mongoose
  .connect(
    config.DB,
    { useNewUrlParser: true },
  )
  .then(
    () => {
      console.log('Database is connected');
    },
    (err) => {
      console.log(`Can not connect to the database ${err}`);
    },
  );

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(morgan('combined'));

// use JWT auth to secure the api
app.use(jwt());

app.use('/api', routes);

// global error handler
app.use(logErrors);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
