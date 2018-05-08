import React from 'react';
import CSSModules from 'react-css-modules';

import Logo from '../Logo/Logo';

import styles from './Footer.scss';

const Footer = () => (
  <footer styleName="wrapper">
    <div styleName="content">
      <Logo />
    </div>
  </footer>
);
export default CSSModules(Footer, styles);
