const http = require("http");
const app = require("./app");
const path = require ('path')

// Serve static assets if in production

if (process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {

    });
}

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port);
