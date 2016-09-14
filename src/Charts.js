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
        <img src={`${baseURL}/${project}/${name}.png?updateSeed=${updateSeed}`} key={name}/>
      ))}
    </div>
  );
}
