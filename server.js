const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname === "/") {
      if (!query.message) {
        res.writeHead(200);
        return res.end(JSON.stringify({ msg: "Hello" }));
      } else {
        return res.end(
          JSON.stringify({ msg: "Hello, How are you?" })
        );
      }
    }
  }

  if (req.method === "POST" && req.url === "/api/sayhi") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const parsedBody = JSON.parse(body);

      if (parsedBody.name) {
        res.writeHead(200);
        res.end(
          JSON.stringify({
            msg: `Hello ${parsedBody.name}, How are you?`
          })
        );
      } else {
        res.writeHead(400);
        res.end(JSON.stringify({ msg: "Name is required" }));
      }
    });

    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ msg: "Not Found" }));

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
