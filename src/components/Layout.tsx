import React from 'react';
import * as styles from './index.module.scss';
import Header from './header';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;