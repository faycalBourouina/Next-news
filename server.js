const next = require('next');
const http = require('http');
const url = require('url');
const path = require('path');

const port = process.env.PORT || 3000.
const dev = process.env.NODE_ENV !== 'production';

// creating an instance of next server  
const app = next({dev});
const handle = app.getRequestHandler();

//intializing next server
app.prepare().then(()=> {
    // cb: creating a node server so we can use the req object  
    http.createServer((req, res) => {
        const parsedUrl = url.parse(req.url, true);
        const { pathname } =  parsedUrl;
        //handeling the response manually with next if path equals /service-worker.js
        if (pathname ==='/service-worker.js') {
            const filePath = path.join(__dirname, '.next', pathname);
            app.serveStatic(res, req, filePath);
        } 
        //otherwise froward to next using handle
        else {
            handle(req, res, parsedUrl);  
        }


    }).listen(port, () => {
        console.log('listening on ', port);
    })

});
