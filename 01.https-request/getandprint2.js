function getAndPrintHTML(options) {
  var https = require('https');

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      var output = [];
      for (val of chunk) {
        output += val;
      }
      console.log(output);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);