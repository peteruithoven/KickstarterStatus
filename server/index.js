var fetch = require('node-fetch');
var express = require('express');

const searchTerm = process.env.SEARCH_TERM || 'The+Vamp+Stereo';
const url = 'https://www.kickstarter.com/projects/search.json?term='+searchTerm;
const app = express();

app.get('/data.json', function(req, res) {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(500).send(err.message);
  });
});

// check NODE_ENV environment variable
console.log('env: ', app.get('env'));
var devMode = app.get('env') === 'development';
var rootFolder = devMode? '.' : 'dist';
app.use(express.static(rootFolder));

const listener = app.listen(process.env.PORT|3000, function () {
  console.log('Server listening on ', listener.address().port);
});
