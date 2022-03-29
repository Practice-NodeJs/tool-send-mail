var http = require("http");
var fs = require("fs");

var job = require("./cronjob");

http
  .createServer((req, res) => {
    res.writeHead(200);
    console.log(req.url);
    if (req.url === "/") {
      fs.readFile("index.html", (err, data) => {
        res.end(data);
      });
    } else if (req.url === "/start") {
      job.start();
      res.end("Start thành công!");
    } else {
      job.stop();
      res.end("Stop thành công!");
    }
  })
  .listen(8000);
