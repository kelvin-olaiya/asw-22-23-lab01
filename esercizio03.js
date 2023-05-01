const http = require("http");
const routes = require("./routes");
const server = http.createServer(routes.requestHandler);

server.listen(8080, () => {
    console.log("Server in attesa su http://localhost:8080");
});