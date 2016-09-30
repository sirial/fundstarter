var http = require('http');
var port = Number(process.env.PORT || 8080);
var fs = require("fs");
//var x  = fs.readFile('public/index.html');
 var x;
// fs.readFile('public/index.html', (err, data) => {
//   if (err) throw err;
//   x = data;
// });
var buff;

var requestListener = function (req, res){
	var stats = fs.stat('public/index.html', function (err,stats) {
		if(err) throw err;
			buff = new Buffer(stats.size);
		if(stats.isFile())
		{
			console.log("File Exists");
			res.writeHead(200, {"Content-type":"text/html"});
			fs.open('public/index.html','r+', function (err, fd) {
				if(err) throw err;
				fs.read(fd,buff,0,buff.length,0,function(err,bytesRead, buffer){
					if(err) throw err;
					res.write(buffer);
    			});
			});
		}
		else
		console.log("File doesn't Exist");
	});
}

var server = http.createServer(requestListener);//event emiiter
server.listen(port,function(){
	console.log('Node app is running at port:',port);
});

