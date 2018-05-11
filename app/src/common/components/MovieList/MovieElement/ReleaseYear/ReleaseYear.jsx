import React from 'react';

import './ReleaseYear.scss';

import formatYear from '../../../../utils/format-year';

const ReleaseYear = ({ releaseDate = '' }) => (
  <span styleName="title">
    {releaseDate === '' ? 'No release date provided' : formatYear(releaseDate)}{' '}
  </span>
);

export default ReleaseYear;
