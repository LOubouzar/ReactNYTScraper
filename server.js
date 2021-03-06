//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

//Tie app to express
const app = express();

//Server Set Up
const PORT = process.env.PORT || 3001;

//Node/Server Set up Test for Port 3001
// app.get('*', (req, res) => {
//   res.send(`Node Server Connected on PORT ${PORT}!`);
// });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactnytscraper");

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
