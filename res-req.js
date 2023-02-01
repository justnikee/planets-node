const http = require("http");

const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "appplication/json");
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    // });
    res.end(
      JSON.stringify({
        id: 1,
        name: "nikhil",
        status: "curruntly-busy",
      })
    );
  } else if (req.url === "/message") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>hiii nikhill</ul>");
    res.write("<li>Whats your thoughts on this </ul> ");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");

    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Our port is running on ${PORT} ....`);
});
