import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const client = new ApolloClient({
  uri: 'https://3zgymj.sse.codesandbox.io',
  cache: new InMemoryCache()
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
