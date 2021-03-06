import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Button from './Button';
import InputForm from './InputForm';
import LinksList from './LinksList';

const ALL_LINKS = gql`
  query GetAllLinks {
    getAllLinks {
      id
      url
      slug
    }
  }
`;

const LandingPage = () => {
  const { loading, error, data } = useQuery(ALL_LINKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="text-center mt-8">
      <img
        className="w-3/4 mx-auto"
        src="images/rebrandly-person.png"
        alt="rebrandly logo"
      />
      <p className="hidden sm:flex justify-center text-4xl">
        Your Brand on Your Links
      </p>
      <p className="font-sans my-3 px-3 sm:mx-12">
        Rebrandly is the industry-leading link management platform to brand,
        track and share short URLs using a custom domain
      </p>
      <Button text="Sign up free" bgColor="bg-sky-600" textColor="text-white" />
      <Button text="Request a demo" />
      <section className="bg-slate-900 mt-4 px-3 pb-4">
        <InputForm />
        <LinksList links={data.getAllLinks} />
      </section>
    </div>
  );
};

export default LandingPage;
