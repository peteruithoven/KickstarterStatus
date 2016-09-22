import React, { PropTypes } from 'react';

export default function ProjectInfo({ projectData }) {
  // console.log('projectData: ', projectData);
  const {
    urls,
    photo,
    name
  } = projectData;
  return (
    <div className="project-info">
      <a href={urls.web.project} target="_blank">
        <div className="image-wrapper">
          <img src={photo.med} alt="project" />
        </div>
        <h1>{name}</h1>
      </a>
    </div>
  );
}
ProjectInfo.propTypes = {
  projectData: PropTypes.object.isRequired
};
