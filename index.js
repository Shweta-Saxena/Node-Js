const http = require("http");
const data = require("./getData");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" ,"access-control-allow-headers": "*"});
    res.write(JSON.stringify(data))
      res.end();

  })
  .listen(8000);
