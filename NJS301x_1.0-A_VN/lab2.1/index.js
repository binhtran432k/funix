const http = require("http");

const users = [];

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write(`
<html>
  <head><title>Assignment 1</title></head>
  <body>
    <form action="/create-user" method="post">
      <input type="text" name="username" />
      <button type="submit">Send</button>
    </form>
  </body>
</html>
`);
    return res.end();
  }

  if (url === "/users") {
    res.write(`
<html>
  <head><title>Assignment 1</title></head>
  <body>
    <ul>
${users.map((x) => `<li>${x}</li>`).join("\n")}
    </ul>
  </body>
</html>
`);
    return res.end();
  }

  if (url === "/create-user") {
    const bufs = [];
    req.on("data", (chunk) => {
      bufs.push(chunk);
    });
    req.on("end", () => {
      const body = Buffer.concat(bufs).toString();
      const username = body.split("=")[1];
      console.log(username)
      users.push(username);
    });
  }

  res.statusCode = 302;
  res.setHeader("Location", "/");
  return res.end();
});

server.listen(3000);
