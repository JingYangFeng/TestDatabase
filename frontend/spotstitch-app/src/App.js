import './App.css';
import React, { Component } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import AddUser from './AdminView/AddUser';

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div id="main">

          <AdminViewUser />
          
        </div>

      </ApolloProvider>
    </>
  );
}

export default App;
