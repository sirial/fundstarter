var http = require('http');
var port = Number(process.env.PORT || 8080);
var fs = require("fs");
var x  = fs.readFileSync('public/index.html');
var requestListener = function (req, res){
	res.writeHead(200, {"Content-type":"text/html"});
	res.write(x);
	//console.log(data.toString());
	//res.end('SIMPLE SIMPLE FUN');
	res.end();
}
var server = http.createServer(requestListener);//event emiiter
server.listen(port,function(){
	console.log('Node app is running at port:',port);
});

