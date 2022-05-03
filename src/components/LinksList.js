import React from 'react';
import Link from './Link';

const LinksList = ({ links }) => {
  return (
    <div className="mt-4 rounded">
      {links.map((link) => (
        <Link link={link} key={link.id} />
      ))}
    </div>
  );
};

export default LinksList;
