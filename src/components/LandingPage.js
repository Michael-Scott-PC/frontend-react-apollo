import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Button from './Button';
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
    <div class="text-center mt-8">
      <img
        class="w-3/4 mx-auto"
        src="images/rebrandly-person.png"
        alt="rebrandly logo"
      />
      <p class="font-sans my-3">
        Rebrandly is the industry-leading link management platform to brand,
        track and share short URLs using a custom domain
      </p>
      <Button text="Sign up free" bgColor="bg-sky-600" textColor="text-white" />
      <Button text="Request a demo" />
      <LinksList links={data.getAllLinks} />
    </div>
  );
};

export default LandingPage;
