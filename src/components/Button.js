import React from 'react';

const Button = ({
  bgColor = 'bg-white',
  border = 'none',
  text = 'default text',
  textColor = 'text-sky-600',
  width = 'w-2/3'
}) => {
  return (
    <div>
      <button
        className={`${bgColor} ${border} ${textColor} ${width} p-1 mb-1 rounded`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
