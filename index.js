const express = require('express');
const mongoose = require('mongoose');
const planetRoute = require('./routes/planet.route');
const app = express();


// middleware
app.use(express.json());


app.get('/', (req, res) => {
    res.send("APIs is Working!");
})

app.use('/api/planet', planetRoute);

mongoose.connect('mongodb://127.0.0.1:27017/planet')
    .then(() => {
        console.log("Database Connected!");
        app.listen(3000, ()=> {
            console.log("Server is Running");
        });
    })
    .catch((error) => {
        console.log("Database not connected", error.message);
    })
