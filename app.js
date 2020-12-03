const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const passport = require('passport');
const User = require('./models/User');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const items = require('./routes/api/items');

const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    const user = new User({
        username: 'nick',
        email: 'nick@nick.com',
        password: '1234567890'
    })
    user.save();
    res.send('Hello Programmers!');
})

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}`) });