const http = require('http');
const fs = require('fs');
const home = fs.readFileSync('home.html');
const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');
const services = fs.readFileSync('services.html');
const error404 = fs.readFileSync('404.html');

const port = (process.env.PORT);


const server = http.createServer((req, res) => {
    console.log(req.url);


    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    url = req.url;

    if (url == '/') {
        res.end(home)
    }
    else if (url == "/about") {
        res.end(about);
    }
    else if (url == "/contact") {
        res.end(contact);
    }
    else if (url == "/services") {
        res.end(services);
    }
    else {
        res.statusCode = 404;
        res.end(error404);
    }
});

server.listen(port, () => {
    console.log(`server running`)
});
