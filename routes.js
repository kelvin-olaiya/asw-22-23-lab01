function getForm() {
    return `
        <!DOCTYPE>
        <html lang="it">
            <head>
                <title>FORM</title>
            </head>
            <body>
                <form action="/message" method="post">
                    <input type="text" name="message" />
                    <input type="submit" />                            
                </form>    
            </body>
        </html>
    `;
}

function writeHTML(response, content) {
    response.writeHead(200, { 'Content-type' : 'text/html' });
    response.write(content);
    response.end();
}

function redirectTo(response, location) {
    response.writeHead(302, { Location : location });
    response.end();
}

function isGET(request) {
    return request.method === "GET";
}

function isPOST(request) {
    return request.method === "POST";
}

const handler = (request, response) => {
    switch (request.url) {
        case "/":
            if (isGET(request)) {
                writeHTML(response, getForm());
            }
            break;
        case "/message":
            if (isPOST(request)) {
                const body = [];
                request.on("data", chunk => {
                    body.push(chunk);
                });
                request.on("end", () => {
                    const parseBody = Buffer.concat(body).toString();
                    console.log(parseBody);
                    redirectTo(response, "/");
                });
            }
            break;
    }
};

exports.requestHandler = handler;