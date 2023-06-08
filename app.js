const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    const messages = fs.readFileSync("message.txt", "utf8").trim().split("\n");
    const displayMessage = messages[messages.length - 1];

    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(`<p>${displayMessage}</p>`);
    res.write(
      "<body><form action=/message method=POST><input type=text name=message><button type=submit>Send</button></form></body>"
    );
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message + "\n");
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});

