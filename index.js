require('dotenv').config();
const express = require('express');

//Import all routes
const mentorsRouter = require('./routes/mentor.route');
const studentsRouter = require('./routes/student.route');
//Import DB;
const db = require('./db/connect');

const app = express();

//Establishing the DB connection.
db();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Student Mentor Application')
})

app.use('/mentors', mentorsRouter)
app.use('/students', studentsRouter)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`)
})