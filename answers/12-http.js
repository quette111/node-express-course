const http = require("http");
const host = 'localhost';
const port = 3000

const smiley = function (req, res) {
    res.writeHead(200);
    res.end(`
                <h1> QUETTE WAS HERE </h1>
                
        `
    )
};

const server = http.createServer(smiley);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});