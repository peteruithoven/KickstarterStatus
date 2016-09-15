var fetch = require('node-fetch');
var express = require('express');
var path = require('path');

const BASE_SEARCH_URL = 'https://www.kickstarter.com/projects/search.json?term=';
const app = express();

// check NODE_ENV environment variable
console.log('env: ', app.get('env'));
var devMode = app.get('env') === 'development';
const rootFolder = path.join(__dirname, '..', devMode? '.' : 'dist');
app.use(express.static(rootFolder));

// Have all data routes return attempt to load Kickstarter project data
app.get('/data/:author/:project.:ext', function(req, res) {
  const { project, ext } = req.params;
  if (ext !== 'json') {
    return res.status(404).send('Only supports json format requests');
  }
  const url = `${BASE_SEARCH_URL}${project}`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(500).send(err.message);
  });
});

// Have all other routes return regular front end
const indexPath = path.join(rootFolder, 'index.html');
app.get('/*', function(req, res) {
  res.sendFile(indexPath);
});

const listener = app.listen(process.env.PORT|3000, function () {
  console.log('Server listening on ', listener.address().port);
});
