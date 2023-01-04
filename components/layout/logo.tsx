import React from 'react';

import classes from './logo.module.css';

type LogoProps = { children?: React.ReactNode };

const Logo = ({}: LogoProps) => {
  return <div className={classes.logo}>Alex&apos; Next Blog</div>;
};

export default Logo;
