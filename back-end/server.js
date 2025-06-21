const express = require('express');
const cors = require('cors');
const connectDB = require('./dbConnection');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use("/api", routes)

app.get("/", (req, res) => {
    res.send("Welcome to the Booking System API");
});

app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})
