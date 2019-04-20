const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const WishList = require("./models/wishlist");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);
app.use(express.static(path.join(__dirname, "build")));

app.post("/api/wishlist", (req, res) => {
  WishList.create(req.body)
    .then(function(obj) {
      res.json(obj);
    })
    .catch(function(err) {
      if (err.code === 11000) {
        console.log("Already Created");
        res.send({
          message: "Already Created"
        });
      } else {
        throw err;
      }
    });
});

app.get("/api/wishlist", function(req, res) {
  // Grab every document in the Articles collection

  WishList.find({}, function(err, data) {
    res.json(data);
  });
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ivunt");

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
