const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const passport = require('passport');
const User = require('./models/User');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const kitchens = require('./routes/api/kitchens');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    const user = new User({
        handle: 'nick',
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
app.use("/api/kitchens", kitchens);

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}`) });