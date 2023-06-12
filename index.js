const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

// router files
const formRouter = require('./routes/form');
const userRouter = require('./routes/user');

// mongoDB url
const mongoString = "mongodb+srv://admin:arulthatha@admin.nhrgc.mongodb.net/?retryWrites=true&w=majority"; 
 //

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

const app = express();

app.use(express.json());

const corsOpts = {
  origin: '*',
  //domain : * means for all

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};
app.use(cors(corsOpts));

app.use('/api/form', formRouter)
app.use('/api/user', userRouter)

app.use((req, res, next) => {
  res.status(404).send({ "status": 404, "message": "API URL Not Found", "error": true });
});

app.listen(3002, () => {
  console.log(`Server Started at ${3003}`)
})
app.timeout = 300000;