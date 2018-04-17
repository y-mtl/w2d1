var request = require('request');
var fs = require('fs');

console.log('Downloading image...');
request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log(response.statusCode);
         console.log(response.headers['content-type']);
         console.log('Download complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));

// message is return in response at the end.
