import React from 'react';

import './Poster.scss';

const Poster = ({ src = 'http://via.placeholder.com/500x750', title = 'No title provided' }) => (
  <img styleName="poster" src={src} alt={`Poster of ${title}`} />
);

export default Poster;
