// // Purpose: The server.js file is responsible for starting the server. It imports the configured app from app.js and starts listening on a specified port.

const dotenv = require("dotenv");
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");

// Loading environment variables
dotenv.config({ path: "./config.env" });

//Importing the app configuration =>  It contains the logic for connection to DB
require("./app"); 

const app = express();
const PORT = process.env.PORT;

//Middleware
app.use(cors());  // so that it frontend can access this 

app.use(express.json());

const middleware = (req, res, next) => {
  console.log("Hello, my middleware");
  next();
};

//Link Router file
const productRoutes = require('./Routes/ProductRoutes');
const serviceRoutes = require('./Routes/ServicesRoutes');

app.use('/api/products', productRoutes); 
app.use('/api/services', serviceRoutes);  
app.use(require("./router"));


app.get("/about", (req, res) => {
  res.send("Hello from About");
});

app.get("/contact", middleware, (req, res) => {
  res.send("Hello from Contact");
});

app.get("/signin", (req, res) => {
  res.send("Hello from signin");
});

app.get("/signup", (req, res) => {
  res.send("Hello from signup");
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
