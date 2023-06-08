const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Chinmay Joshi");
  res.end("Chinmay Joshi"); // Used to send a response back to the browser
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
