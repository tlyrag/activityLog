const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.DBRUI || "mongodb+srv://test:test@cluster0.l1n3kls.mongodb.net/";
console.log(uri);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(uri
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// import routes change and define rout name
const activityRouter = require('./routes/activities');

// // adding /activity to before all routes
app.use('/activity', activityRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
