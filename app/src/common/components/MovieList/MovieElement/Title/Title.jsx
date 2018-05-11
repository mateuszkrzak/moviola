import React from 'react';

import './Title.scss';

const Title = ({ title = 'No title provided' }) => <span styleName="title">{title} </span>;

export default Title;
