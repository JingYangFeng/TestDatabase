import './App.css';
import React, { Component } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import UserList from './Components/UserList';
import AddUser from './Components/AddUser';

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div id="main">

          <h1>List of Users</h1>
          <UserList/>
          <AddUser/>
        
        </div>

      </ApolloProvider>
    </>
  );
}

export default App;
