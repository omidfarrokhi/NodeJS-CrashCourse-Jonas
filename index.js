const fs = require("fs");
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");

const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(204);
    return res.end();
  }

  const query = url.parse(req.url, true);
  console.log(query);

  res.writeHead(200, { "content-type": "text/html" });
  res.end("This is the response!");
});

server.listen(1010, "127.0.0.1", () => {
  console.log("Listening for requests now");
});
