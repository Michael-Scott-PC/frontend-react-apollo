import React from 'react';
import Link from './Link';

const LinksList = ({ links }) => {
  return (
    <div>
      <h1>LinksList Component</h1>
      {links.map((link) => (
        <Link link={link} key={link.id} />
      ))}
    </div>
  );
};

export default LinksList;
