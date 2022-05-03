import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <div class="bg-gray-800 text-white pl-3 py-4">
      <p>Terms & Conditions</p>
      <p>Privacy Policy</p>
      <p>Cookie Policy</p>
      <p>
        Rebrandly <AiOutlineCopyrightCircle class="inline" /> Copyright 2020
      </p>
    </div>
  );
};

export default Footer;
