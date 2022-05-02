import React from 'react';
import { useQuery, gql } from '@apollo/client';
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
    <div>
      <LinksList links={data.getAllLinks} />
    </div>
  );
};

export default LandingPage;
