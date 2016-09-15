import React from 'react';

const baseURL = 'https://www.kicktraq.com/projects';

const charts = [
  'dailychart',
  'dailypledges',
  'dailybackers',
  'dailycomments',
  'exp-cone',
]

export default function({ project, updateSeed }) {
  return (
    <div className="graphs">
      {charts.map(name => (
        <a href={`${baseURL}/${project}`} target="_blank">
          <img src={`${baseURL}/${project}/${name}.png?updateSeed=${updateSeed}`} key={name}/>
        </a>
      ))}
    </div>
  );
}
