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

  const pathName = url.parse(req.url, true).pathname;
  console.log(pathName);

  if (pathName === "/products" || pathName === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("This is the products page!");
  } else if (pathName === "/laptop") {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("This is the laptop page");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("Url was not found on the server!");
  }
});

server.listen(1010, "127.0.0.1", () => {
  console.log("Listening for requests now");
});
