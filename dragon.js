const fs = require('fs');
const http = require('http');
const url = require('url');
const path_p = require('path');
// const base_path = "D://complete-node-bootcamp-master (1)//Node Tutorials//promises and callbacks//dragonballAPI"
const base_path = `${__dirname}`
index = fs.readFileSync(path_p.join(base_path, 'dragon.html').replace(/^\/+/, ''));

const server = http.createServer(function (request, response) {
    let path = request.url;
    const parsedUrl = url.parse(path, true);
    const pathname = parsedUrl.pathname;

    if (pathname === "/" || pathname === "/overview") {
        response.writeHead(200, { "Content-type": "text/html" });
        response.end(index);
    } else {
        let contentType;
        const ext = path_p.join(base_path, pathname);
        fs.readFile(ext, function (error, file_data) {
            if (error) {
                response.writeHead(404, { "Content-type": "text/plain" });
                response.end("File not found!");
                return;
            }
            const extension = path_p.extname(ext);
            if (extension === '.css') contentType = 'text/css';
            else if (extension === '.js') contentType = 'application/javascript';
            else if (extension === '.html') contentType = 'text/html';
            else if (extension === '.png') contentType = 'image/png';
            else if (extension === '.jpg' || extension === '.jpeg') contentType = 'image/jpeg';
            response.writeHead(200, { 'Content-type': contentType });
            response.end(file_data);
        });
    }
})
server.listen(8000, '127.0.0.1', function () {
    console.log('Server running');
})