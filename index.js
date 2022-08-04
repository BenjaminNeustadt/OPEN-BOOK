const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());

app.set("views", path.join(__dirname, "frontend/views"));
app.set("view engine", "jade");

// bootstrap connection
app.use(express.static(path.join(__dirname + "/public")));
app.use("/bootstrap", express.static(path.join(__dirname + "/node_modules/bootstrap/dist/css")))


app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("website is running");
});

const debug = require("debug")("openbook:server");
const http = require("http");
const mongoose = require("mongoose");

// Get port from environment and store in Express.

var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// Connect to MongoDB

var mongoDbUrl = process.env.MONGODB_URI || "mongodb://0.0.0.0/openbook";

mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

// Normalize a port into a number, string, or false.

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// Event listener for HTTP server "error" event.


function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event.

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Now listening on " + bind);
  debug("Listening on " + bind);
}
