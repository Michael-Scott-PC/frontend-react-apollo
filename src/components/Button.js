import React from 'react';

const Button = ({
  bgColor = 'bg-white',
  text = 'default text',
  textColor = 'text-sky-600',
  width = 'w-2/3'
}) => {
  return (
    <div>
      <button
        class={`${bgColor} ${textColor} ${width} p-1 rounded`}
        onClick={() => {}}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
