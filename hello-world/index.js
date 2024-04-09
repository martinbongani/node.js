// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// Instantiations
const app = express();

// Configurations
mongoose.createConnection(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
 });

app.set("view engine", "pug") // Setting the view engine to pug
app.set("views", path.join(__dirname, "views")); // Specify the directory where the views are found
 // Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // To return data in the response path
// Route
// app.get("/", (req, res) => {
//   res.send("Homepage! Hello world.");
// });

// app.get("/about", (req, res) => {
//   res.send("About page. Nice.");
// });

// syntax of a route
// app.METHOD(PATH, HANDLER);

// app.get("/course", (req, res) => {
//   res.send("You have hit the courses page");
// });

// app.get('/books/:bookId', (req, res) => {
//     res.send(req.params.bookId);
//     console.log(req.params.bookId)
//   });

//   app.get('/students/:name', (req, res) => {
//     res.send( "This is my students name " + req.params.name);
//   });

// app.get("/students/:studentId", (req, res) => {
//   res.send("This is my students name " + req.params.studentId);
//   console.log("studentId " + req.params);
// });

// // Query params
// app.get("/students", (req, res) => {
//   res.send("This is class " + req.query.class + "Cohort " + req.query.cohort);
// });

// app.get("/babies", (req, res) => {
//   res.send("This is a baby " + req.query.name + "age " + req.query.age);
// });

// app.get("/index", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/signup", (req, res) => {
  console.log(req.body)
  let baby=req.body
  // res.redirect("/index")
  res.json({message:"baby registered",baby})
});

// For invalid routes
app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});
// Boostrapping the server
app.listen(3000, () => console.log("listening on port 3000"));
