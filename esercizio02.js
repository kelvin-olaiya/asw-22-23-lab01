const http = require('http2');
const server = http.createServer((request, response) => {
    response.write("Hello World!");
    response.write(JSON.stringify({
        firstname: "Mario",
        lastname: "Rossi",
        title: "Dr."
    }))
    response.end();
});
const LISTENING_PORT = 8080;
server.listen(LISTENING_PORT, () => {
    console.log("Server listening on http://localhost:" + LISTENING_PORT);
});
