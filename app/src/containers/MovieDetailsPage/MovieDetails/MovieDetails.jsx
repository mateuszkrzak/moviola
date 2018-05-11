import React from 'react';

import './MovieDetails.scss';
import formatYear from '../../../common/utils/format-year';

const MovieElement = ({
  title,
  release_date: releaseDate,
  vote_average: voteAverage,
  poster_path: posterPath,
  runtime,
  overview,
}) => (
  <div styleName="wrapper">
    <img styleName="cover" src={posterPath} alt={`Cover of ${title}`} />
    <div styleName="info">
      <div className="row">
        <span styleName="title">{title}</span>
        <span styleName="rating">{voteAverage}</span>
      </div>
      <div className="row">
        <span styleName="year">{formatYear(releaseDate)}</span>
        <span styleName="duration">{runtime} min</span>
      </div>

      <div styleName="overview">{overview}</div>
    </div>
  </div>
);

export default MovieElement;
