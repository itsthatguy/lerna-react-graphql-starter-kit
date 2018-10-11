import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';

import Routes from 'routes/index';

export default class Root extends React.Component {
  state = {
    client: null,
    loaded: false,
  };

  async componentDidMount() {
    const cache = new InMemoryCache();

    const stateLink = withClientState();

    const client = new ApolloClient({
      cache,
      link: ApolloLink.from([
        stateLink,
        new HttpLink({
          uri: process.env.GRAPHQL_URL,
          credentials:
            process.env.NODE_ENV === 'development' ? 'include' : 'same-origin',
        }),
      ]),
      connectToDevTools: true,
    });

    this.setState({ client, loaded: true });
  }

  render() {
    if (!this.state.loaded) return 'Loading';

    return (
      <ApolloProvider client={this.state.client}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}
