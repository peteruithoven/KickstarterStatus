import React, { PropTypes } from 'react';
import moment from 'moment';
import { format } from 'currency-formatter';
import ProgressBar from './ProgressBar.js';

// make moment more precize
moment.relativeTimeThreshold('s', 60);
moment.relativeTimeThreshold('m', 60);
moment.relativeTimeThreshold('h', 72); // count down in hours during last 3 days
moment.relativeTimeThreshold('d', 999); // make sure we always see days
moment.relativeTimeThreshold('M', 999);

// Round relative time evaluation down
moment.relativeTimeRounding(Math.floor);

function formatNumber(number, decimals = 0) {
  try {
    return number.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  } catch (error) {
    return number.toFixed(decimals);
  }
}

export default function ProjectStats({ projectData }) {
  // console.log('projectData: ', projectData);
  const {
    deadline,
    currency,
    currency_symbol: currencySymbol,
    pledged,
    goal,
    backers_count: backersCount,
    state
  } = projectData;
  const pledgedText = format(pledged, {
    code: currency,
    symbol: '',
    precision: 0
  }).trim(); // for some reason currency-formatter added a space afterwards
  const completed = pledged / goal;
  const deadlineMoment = moment(deadline * 1000);
  const nowMoment = moment();
  const duration = moment.duration(deadlineMoment.diff(nowMoment));
  const leftText = duration.humanize();
  return (
    <div className="project-stats">
      <ProgressBar completed={completed} />
      <span className="completed">{formatNumber(completed * 100, 2)}</span>
      <span className="text">{`% ${currencySymbol}`}</span>
      <span className="pledged">{pledgedText}</span>
      <span className="text"> by </span>
      <span className="backers_count">{formatNumber(backersCount)}</span>
      <span className="text"> backers</span>
      {state === 'live' ? (
        <p>
          <span className="left">{leftText}</span>
          <span className="text"> left</span>
        </p>
      ) : null}
    </div>
  );
}
ProjectStats.propTypes = {
  projectData: PropTypes.object.isRequired
};
