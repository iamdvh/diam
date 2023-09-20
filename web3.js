const http = require("http");
const fs = require("fs");
const { Console } = require("console");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) console.error(err);
      else {
        res.write(data);
        res.end();
      }
    });
  }
  if (req.url == "/login") {
    fs.readFile("login.html", (err, data) => {
      if (err) console.error(err);
      else {
        res.write(data);
        res.end();
      }
    });
  } else {
    console.log("404 not found");
  }
});
server.listen(1295, () => {
  console.log("Server is running at http://localhost:1295");
});
