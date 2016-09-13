import React from 'react';
import ProgressBar from './ProgressBar.js';
import moment from 'moment';
import { format } from 'currency-formatter';

// make moment more precize
moment.relativeTimeThreshold('s', 60);
moment.relativeTimeThreshold('m', 60);
moment.relativeTimeThreshold('h', 24);
moment.relativeTimeThreshold('d', 31);
moment.relativeTimeThreshold('M', 12);

// Round relative time evaluation down
moment.relativeTimeRounding(Math.floor);

export default function({ projectData }) {
  console.log('projectData: ', projectData);
  const {
    deadline,
    currency,
    currency_symbol,
    pledged,
    goal,
    backers_count
  } = projectData;
  const pledgedText = format(pledged, {
    code: currency,
    symbol: '',
    precision: 0
  });
  const completed = pledged/goal;
  const deadlineMoment = moment(deadline*1000);
  const nowMoment = moment();
  const duration = moment.duration(deadlineMoment.diff(nowMoment));
  const leftText = duration.humanize();
  return (
    <div className="project-info">
      <ProgressBar completed={completed}/>
      <span className="completed">{Math.round(completed*100)}</span>
      <span className="text">{`% ${currency_symbol}`}</span>
      <span className="pledged">{pledgedText}</span>
      <span className="text">{' by '}</span>
      <span className="backers_count">{backers_count}</span>
      <span className="text">{' backers'}</span>
      <br/>
      <span className="left">{leftText}</span>
      <span className="text">{' left'}</span>
    </div>
  );
}
