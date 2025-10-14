// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const app = express();
const morgan = require("morgan");
const theProjects = require("./data/projects.json");
const theArticles = require("./data/articles.json");
// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));
// ROUTES
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

//json routes
app.get("/api/projects", (req, res) => {
  res.status(200).json(theProjects);
});

app.get("/api/articles", (req, res) => {
  res.status(200).json(theArticles);
});

app.use((req, res) => {
  res.sendFile(__dirname + "/views/not-found.html");
});
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("server is running on port 5005");
});
