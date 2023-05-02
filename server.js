import express from "express";

// rest object
const app= express()


// routes
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to job portal</h1>`)
})


// listen
app.listen(8080, () => {
    console.log("Node server is running");
})