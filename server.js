// import modules
var http = require('http');
var dispatcher = require('httpdispatcher');

// port to user
const PORT = 8080;

// function to handle requests and send response
function handleRequest(request, response)
{
	try{
		// log the request on the console
		console.log(request.url);
		// dispatch
		dispatcher.dispatch(request, response);
	}catch(err){
		console.log(err);
	}
}

// GET request
dispatcher.onGet("/page1", function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Page One');
});

// POST request
dispatcher.onPost("/post1", function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Got Post Data');
});

// create a server
var server = http.createServer(handleRequest);

// start the server
server.listen(PORT, function()
{
	console.log("Server listening on port %s", PORT);
});
