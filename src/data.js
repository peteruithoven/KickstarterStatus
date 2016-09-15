import 'whatwg-fetch';
import cancellable from './cancellable.js';

export function loadData(project) {
  // remove leading / trailing /'s'
  project = project.replace(/^\/|\/$/g,'');
  return cancellable(fetch(`/data/${project}.json`)
  .then(response => {
    if (!response.ok) { // error response
      return response.text() // parse error text
      .then(text => {
        throw Error(text);
      });
    } else {
      return response.json()
    }
  }));
}

export function loadStats(project) {
  // remove leading / trailing /'s'
  project = project.replace(/^\/|\/$/g,'');
  return cancellable(fetch(`/stats/${project}.json`)
  .then(response => {
    if (!response.ok) { // error response
      return response.text() // parse error text
      .then(text => {
        throw Error(text);
      });
    } else {
      return response.json()
    }
  }));
}
