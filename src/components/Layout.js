import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Layout Component</h1>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
