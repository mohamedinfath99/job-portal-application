import express from "express";
import dotenv from 'dotenv';
import colors from 'colors'


// dotenv config
dotenv.config();

// rest object
const app= express()


// routes
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to job portal</h1>`)
})

// port 
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
    console.log(`Node Server is Running ${PORT} in ${process.env.DEV_MODE} Mode`.bgCyan.bgGreen);
})