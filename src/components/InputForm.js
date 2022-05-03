import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import Button from './Button';

const CREATE_LINK = gql`
  mutation CreateLink($url: String!, $slug: String!) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;

const InputForm = () => {
  const [urlInput, setUrlInput] = useState('');
  const [slugInput, setSlutInput] = useState('');
  const [createLink, { loading, error, data }] = useMutation(CREATE_LINK);
  console.log('data: ', data);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    createLink({ variables: { url: urlInput, slug: slugInput } });
  };

  return (
    <div className="pt-10">
      <form onSubmit={(e) => handleSubmit(e)}>
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
          bgColor="bg-sky-600"
          text="Shorten URL"
          textColor="text-white"
          width="w-full"
        />
      </form>
    </div>
  );
};

export default InputForm;
