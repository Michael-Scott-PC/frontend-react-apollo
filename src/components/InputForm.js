import React, { useState } from 'react';
import Button from './Button';

const InputForm = () => {
  const [urlInput, setUrlInput] = useState('');
  const [slugInput, setSlutInput] = useState('');
  return (
    <div className="pt-10">
      <input
        className="rounded w-full text-center p-2"
        onChange={(e) => setUrlInput(e.target.value)}
        placeholder="Make your links shorter"
        value={urlInput}
      />
      <input
        className="rounded w-full text-center p-2 my-2"
        onChange={(e) => setSlutInput(e.target.value)}
        placeholder="custom slug (optional)"
        value={slugInput}
      />
      <Button
        text="Shorten URL"
        bgColor="bg-sky-600"
        textColor="text-white"
        width="w-full"
      />
    </div>
  );
};

export default InputForm;
