var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var output = html.toUpperCase();
  console.log(output);
}

getHTML(requestOptions, printUpperCase);