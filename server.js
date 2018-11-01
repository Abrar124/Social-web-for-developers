const express = require ("express");
const mongoose = require("mongoose");

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//init mongo database
 const db = require('./config/keys').mongoURI;

// //connect to mongoDB

mongoose.connect(db , { useNewUrlParser: true }).then(
  (res) => {
   console.log("Connected to Database Successfully.")
  }
).catch((err) => {
  console.log(err); 
});

// mongoose.connect(db , { useNewUrlParser: true })
// .then(()=> console.log('Mongodb connected'))
// .catch(err => console.log(err));

app.get('/' , (req, res)=> res.send('hello! Mongoose ') );

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log('Server is running on port 5000 '));