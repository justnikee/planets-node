const http = require("http");

const PORT = 4000;

const server = http.createServer();

const friends = [
  {
    id: 1,
    name: "nikhil",
    status: "curruntly-busy",
  },
  {
    id: 2,
    name: "nikhil thakur",
    status: "curruntly-busy",
  },
  {
    id: 3,
    name: "Nikeeyyy",
    status: "curruntly-busy",
  },
];

server.on("request", (req, res) => {
  const items = req.url.split("/");
  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      const friend = data.toString();
      console.log(data);
      friends.push(JSON.parse(friend));
    });
  } else if (req.method === "GET" && items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "appplication/json");
    if (items.length === 3) {
      const friendsIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendsIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "message") {
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
