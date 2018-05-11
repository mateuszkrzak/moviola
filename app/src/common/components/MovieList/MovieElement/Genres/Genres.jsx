import React from 'react';

import './Genres.scss';

const Genres = genres => <span styleName="genre"> {Object.values(genres).join(' & ')} </span>;

export default Genres;
