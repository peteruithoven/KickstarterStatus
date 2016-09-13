import 'whatwg-fetch';

const url = '/data.json';

export default function() {
  return fetch(url)
  .then(response => response.json())
  .then(searchData => searchData.projects[0]);
}
