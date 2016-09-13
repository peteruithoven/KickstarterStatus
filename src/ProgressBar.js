import React from 'react';
export default function({
  completed = 1,
  height = 25,
  color = '#0BD318',
  backgroundColor = '#d0d0d0'
}) {
  if (completed < 0) {
    completed = 0;
  } else if (completed > 1) {
    completed = 1;
  };

  const bgStyle = {
    borderRadius: `${height/2}px`,
    backgroundColor: backgroundColor,
    width: '100%'
  };
  const style = {
    borderRadius: `${height/2}px`,
    backgroundColor: color,
    width: `${Math.round(completed*100)}%`,
    transition: "width 200ms",
    height: height
  };

  return (
    <div
      className="progressbar-container"
      style={bgStyle}
    >
      <div
        className="progressbar-progress"
        style={style}
      />
    </div>
  );
}
