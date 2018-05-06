import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Logo.scss';

const Logo = () => <span styleName="title">netflixroulette</span>;
export default CSSModules(Logo, styles);
