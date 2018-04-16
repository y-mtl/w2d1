/* step 2 */
function getAndPrintHTML() {
  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
    https.get(requestOptions, function (response) {

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
getAndPrintHTML();
