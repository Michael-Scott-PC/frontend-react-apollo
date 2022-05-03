import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <div class="text-xs bg-gray-700 text-white px-3 py-4 flex flex-col sm:flex-row sm:justify-between">
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
