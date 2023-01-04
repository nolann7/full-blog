import React from 'react';

import classes from './Layout.module.css'
import MainNavigation from './main-navigation';

type LayoutProps={ children: React.ReactNode };

const Layout = ({children}:LayoutProps) => {
return (
    <>
    <MainNavigation/>
    <main>{children}</main>
    </>
  );
};

export default Layout;