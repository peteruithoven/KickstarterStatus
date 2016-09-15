const fetch = require('node-fetch');
const express = require('express');
const path = require('path');

const BASE_SEARCH_URL = 'https://www.kickstarter.com/projects/search.json?term=';
const BASE_STATS_URL = 'https://www.kickstarter.com/projects/';
const TRAIL_STATS_URL = '/stats.json?v=1';
const app = express();

// check NODE_ENV environment variable
console.log('env: ', app.get('env'));
const devMode = app.get('env') === 'development';
const rootFolder = path.join(__dirname, '..', devMode ? '.' : 'dist');
app.use(express.static(rootFolder));

// Have all /data routes return attempt to load Kickstarter project data
app.get('/data/:author/:project.:ext', (req, res) => {
  const { project, ext } = req.params;
  if (ext !== 'json') {
    return res.status(404).send('Only supports json format requests');
  }
  const url = `${BASE_SEARCH_URL}${project}`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const projectData = data.projects[0];
    return res.json(projectData);
  })
  .catch(err => res.status(500).send(err.message));
});

// Have all /stats routes return attempt to load Kickstarter project stats data
app.get('/stats/:author/:project.:ext', (req, res) => {
  const { author, project, ext } = req.params;
  if (ext !== 'json') {
    return res.status(404).send('Only supports json format requests');
  }
  const url = `${BASE_STATS_URL}${author}/${project}${TRAIL_STATS_URL}`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    res.json(data);
  })
  .catch(err => res.status(500).send(err.message));
});

// Have all other routes return regular front end
const indexPath = path.join(rootFolder, 'index.html');
app.get('/*', (req, res) => {
  res.sendFile(indexPath);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on ', listener.address().port);
});
