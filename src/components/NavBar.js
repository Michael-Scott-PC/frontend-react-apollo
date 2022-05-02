import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
  return (
    <div class="flex justify-between pt-5 px-5">
      <img src="images/rebrandly-logo.png" alt="rebrandly logo" />
      <GiHamburgerMenu />
    </div>
  );
};

export default NavBar;
