import React from 'react';
import CSSModules from 'react-css-modules';

import Logo from '../Logo/Logo';

import styles from './Footer.scss';

const Footer = () => (
  <footer styleName="wrapper">
    <Logo />
  </footer>
);
export default CSSModules(Footer, styles);
