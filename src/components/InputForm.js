import React from 'react';
import Button from './Button';

const InputForm = () => {
  return (
    <div>
      <h1>InputForm Component</h1>
      <input
        class="rounded w-11/12 text-center p-2"
        placeholder="Make your links shorter"
      />
      <input
        class="rounded w-11/12 text-center p-2 my-2"
        placeholder="custom slug (optional)"
      />
      <Button
        text="Shorten URL"
        bgColor="bg-sky-600"
        textColor="text-white"
        width="w-11/12"
      />
    </div>
  );
};

export default InputForm;
