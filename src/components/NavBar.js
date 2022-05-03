import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Button from './Button';

const NavBar = () => {
  return (
    <div className="flex justify-between pt-5 px-5">
      <img src="images/rebrandly-logo.png" alt="rebrandly logo" />
      <GiHamburgerMenu class="lg:hidden" />
      <nav class="hidden lg:flex justify-between w-10/12">
        <a href="https://localhost:3000/">Features</a>
        <a href="https://localhost:3000/">Domains</a>
        <a href="https://localhost:3000/">Pricing</a>
        <a href="https://localhost:3000/">Enterprise</a>
        <a href="https://localhost:3000/">Login</a>
        <a href="https://localhost:3000/">Sign Up</a>
        <Button
          border="border border-sky-600"
          text="Get a quote"
          width="w-full"
        />
      </nav>
    </div>
  );
};

export default NavBar;
