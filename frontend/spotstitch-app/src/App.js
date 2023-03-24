import './App.css';
import React, { Component } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import UserList from './Components/UserList';
import AddUser from './Components/AddUser';
import SearchUser from './Components/SearchUser';

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Adding Users</h1>
          <AddUser/>

          <h1>Search user by username or email</h1>
          <SearchUser/>

          <h1>List of Users</h1>
          <UserList/>

        
        </div>

      </ApolloProvider>
    </>
  );
}

export default App;
