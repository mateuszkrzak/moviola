import React from 'react';
import PropTypes from 'prop-types';

import './MovieDetails.scss';
import formatYear from '../../../common/utils/format-year';

export default class MovieDetails extends React.Component {
  static defaultProps = {
    movie: {},
  };

  static propTypes = {
    movie: PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
      release_date: PropTypes.string,
      runtime: PropTypes.number,
    }),
  };

  render() {
    return (
      <div styleName="wrapper">
        <img
          styleName="cover"
          src={this.props.movie.poster_path}
          alt={`Cover of ${this.props.movie.title}`}
        />
        <div styleName="info">
          <div className="row">
            <span styleName="title">{this.props.movie.title}</span>
            <span styleName="rating">{this.props.movie.vote_average}</span>
          </div>
          <div className="row">
            <span styleName="year">{formatYear(this.props.movie.release_date)}</span>
            <span styleName="duration">{this.props.movie.runtime} min</span>
          </div>

          <div styleName="overview">{this.props.movie.overview}</div>
        </div>
      </div>
    );
  }
}
