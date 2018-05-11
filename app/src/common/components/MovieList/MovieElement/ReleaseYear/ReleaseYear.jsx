import React from 'react';

import './ReleaseYear.scss';

import formatYear from '../../../../utils/format-year';

const ReleaseYear = ({ releaseDate = 'No release date provided' }) => (
  <span styleName="title">{formatYear(releaseDate)} </span>
);

export default ReleaseYear;
