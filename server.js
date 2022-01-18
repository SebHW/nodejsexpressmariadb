const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: '.env-local'});

const PORT = process.env.PORT || '3001';

const app = express();


/**
 * Middleware
 */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/**
 * Routes
 */
app.get('/', (req, res) => {
    res.status(200).send('THis is not why im here. Head to /user/:id replacing :id with the appropriate one')
})

const userRouter = require('./routes/user');
app.use('/user',userRouter);

/**
 * Start listening
 */
app.listen(PORT, ()=> {
    console.log(`Listening for request on port ${PORT}`)
})