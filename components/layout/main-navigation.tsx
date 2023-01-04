import Link from 'next/link';
import React from 'react';
import Logo from './logo';
import classes from './main-navigation.module.css';

type MainNavigationProps = { children?: React.ReactNode };

const MainNavigation = (props: MainNavigationProps) => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
