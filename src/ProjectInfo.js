import React, { PropTypes } from 'react';

export default function ProjectInfo({ projectData }) {
  // console.log('projectData: ', projectData);
  const {
    urls,
    photo,
    name
  } = projectData;
  const url = urls.web.project;
  const photoSrc = photo.med;
  return (
    <div className="project-info">
      <a href={url} target="_blank">
        <div className="image-wrapper">
          <img src={photoSrc} alt="project" />
        </div>
        <h1>{name}</h1>
      </a>
    </div>
  );
}
ProjectInfo.propTypes = {
  projectData: PropTypes.object.isRequired
};
