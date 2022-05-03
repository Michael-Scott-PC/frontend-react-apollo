import React from 'react';
import { MdFileCopy } from 'react-icons/md';

const Link = ({ link }) => {
  return (
    <div className="bg-white mb-4 last-of-type:mb-0 rounded flex justify-between py-2 px-4 items-center">
      <a href={`${link.url}/${link.slug}`}>{`${link.url}/${link.slug}`}</a>
      <button
        onClick={() =>
          navigator.clipboard.writeText(`${link.url}/${link.slug}`)
        }
      >
        <MdFileCopy />
      </button>
    </div>
  );
};

export default Link;
