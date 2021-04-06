const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 3000;

function renderHTML(path, res) {
    fs.readFile(path, (error, data)=>{
        if(error) {
            res.writeHead(404);
            res.write('<h1>Route not defined!!</h1>');
        } else {
            res.write(data);
        }
        res.end();
    })
}

module.exports = {
    handleRequest: (req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        const path = req.url;
        switch(path) {
            case '/': 
                renderHTML('./home.html', res);
                break;
            default:
                renderHTML(`./days/${path}.html`, res);
        }
    }
}