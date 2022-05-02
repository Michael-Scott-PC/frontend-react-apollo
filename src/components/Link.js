import React from 'react';

const Link = ({ link }) => {
  return (
    <div>
      <h1>Link Component</h1>
      <a href={`${link.url}/${link.slug}`}>{`${link.url}${link.slug}`}</a>
    </div>
  );
};

export default Link;
