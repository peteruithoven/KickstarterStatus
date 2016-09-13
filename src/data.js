import 'whatwg-fetch';

const url = '/data.json';

export default function() {
  return fetch(url)
  .then(response => {
    if (!response.ok) { // error response
      return response.text() // parse error text
      .then(text => {
        throw Error(text);
      });
    } else {
      return response.json()
    }
  })
  .then(searchData => {
    if(typeof searchData === 'string') {
      throw new Error(`Couldn't parse json`);
    }
    return searchData.projects[0]
  });
}
