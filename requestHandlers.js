//var exec = require("child_process").exec;


function start(response, postData) {
  console.log("Request handler 'start' was called.");
  //var content = "empty";

/*  exec("ls -lah", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();

  exec()
});*/

    /*exec("find /",
    { timeout: 1000, maxBuffer: 20000*1024},
    function (error, stdout, stderr) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(stdout);
      response.end();
    });*/

  var body = '<html>' +
             '<head>' +
             '<meta charset="utf-8">' +
             '</head>' +
             '<body>' +
             '<form action="/upload" method="post">' +
             '<textarea name="text" row="20" cols="60"></textarea>' +
             '<input type="submit" value="Submit Text"/>' +
             '</form>' +
             '</body>' +
             '</html>';
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write(body);
   response.end();

}


/*function start() {
  console.log("Request handler 'start' was called");
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds)
  }
  sleep(10000)
  return "Hello Start";
}*/

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent:" + postData);
  response.end();
}

exports.start = start;
exports.upload = upload;


function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;
