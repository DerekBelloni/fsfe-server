const http = require('http');

http.createServer(function (req, res) {
res.write("From the digital ocean droplet");
res.end();	
}
).listen(3000);

console.log("Server started on port 3000");
