import './App.css';
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components
import UserList from '../Components/UserList';
import AddUser from '../Components/AddUser';
import UserList2 from './UserList2';


// Apollo clinet setup
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
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
